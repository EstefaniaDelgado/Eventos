import { useEffect, useState } from 'react';
import EVENTS_LIKE from '../../../utils/contantsLocalstorage';
import EventItem from '../../../components/EventItem';
import { useNavigate } from 'react-router-dom';

const LikedEvents = () => {
  const [likedEvents, setLikedEvets] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState({});

  const navegate = useNavigate();

  console.log('eventos que fav: ', likedEvents);

  const handleEventClick = (id) => {
    navegate(`/detail/${id}`);
  };

  // usando un Promise.all con el metodo map, ya que el map por si solo no permite manejar operacioes asincronas
  useEffect(() => {
    const fetchEventsLiked = async () => {
      try {
        setIsloading(true);
        const events = JSON.parse(localStorage.getItem(EVENTS_LIKE)) || [];

        // Mapea los ids de los eventos a promesas de fetch
        const eventsLiked = await Promise.all(
          events.map(async (eventId) => {
            const response = await fetch(
              `https://app.ticketmaster.com/discovery/v2/events/${eventId}?apikey=${
                import.meta.env.VITE_TICKETMASTER_API_KEY
              }`
            );
            const data = await response.json();
            return data;
          })
        );

        // Una vez resueltas todas las promesas, actualiza el estado
        setLikedEvets(eventsLiked);
      } catch (error) {
        setError(error);
      } finally {
        setIsloading(false);
      }
    };

    fetchEventsLiked();
  }, []);

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  if (Object.keys(error).length) {
    return <div>Ha ocurrido un error</div>;
  }

  return (
    <div>
      {likedEvents.length ? (
        likedEvents.map((event, index) => {
          return (
            <EventItem
              key={`liked-event-item-${event.id}-${index}`}
              name={event.name}
              info={event.info}
              img={event.images[0].url}
              id={event.id}
              onEventClick={handleEventClick}
            />
          );
        })
      ) : (
        <div>No hay eventos favoritos aun</div>
      )}
    </div>
  );
};

export default LikedEvents;

//usando un forOf que permite manejar llamados asincronos
// useEffect(() => {
//   const fectchEventsLiked = async () => {
//     try {
//       setIsloading(true)
//       const events = JSON.parse(localStorage.getItem(EVENTS_LIKE)) || [];
//       console.log("ids ", events)
//       const results = [];
//       for (const eventId of events) {
//         const response = await fetch(
//           `https://app.ticketmaster.com/discovery/v2/events/${eventId}?apikey=${
//             import.meta.env.VITE_TICKETMASTER_API_KEY
//           }`
//         );
//         const data = await response.json();
//         results.push(data);
//       }
//       setLikedEvets(results);
//     } catch (error) {
//       setError(error)
//     }finally{
//       setIsloading(false)
//     }
//   };
//   fectchEventsLiked();
// }, []);
