import { useState, useEffect, useRef } from 'react';
import EventItem from './EventItem';
import Searchbar from './SearchBar';
import ReactPaginate from 'react-paginate';
// import useEventsData from '../Hooks/useEvents';
import useResults from '../state/useResults';
import { useNavigate } from 'react-router-dom';

// const Events = ({ searchTerm, events }) => {
const Events = () => {
  // 1. usando un state para guardar la info
  // const [data]=useState(data)
  // const {
  //   _embedded: { events },
  // } = data;

  // 2. usando el hook creado para tener la info de manera global
  // const { events, isLoading, error } = useEventsData();

  //Hace lo que hacia el home
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  

  const { data, isLoading, error, fetchEvents } = useResults();
  const events = data._embedded?.events || [];
  const page = data?.page || {};

  const refComp = useRef();

  useEffect(() => {
    fetchEvents();
  }, []);

      

  const handleSearchEvent = (nameEvent) => {
    // refComp.current.setSearch('');

    setSearchTerm(nameEvent);
    // fetchEvents(`&keyword=${nameEvent}`);
    renderEvents();
  };

  const handlePageClick = ({ selected }) => {
    // console.log(selected);
    fetchEvents(`&keyword=${searchTerm}&page=${selected}`);
  };

  // //Ir a la pantalla de detalle
  const handleEventClick = (id) => {
    navigate(`/detail/${id}`);
  };

  const renderEvents = () => {
    let eventsItems = events;
    if (searchTerm.length) {
      eventsItems = eventsItems.filter((event) =>
        event.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    if (isLoading) {
      return (
        <p className="my-10 p-3 text-xl text-center font-semibold bg-slate-500/25 ">
          Cargando Eventos...
        </p>
      );
    }

    if (error) {
      return (
        <p className="my-10 p-3 text-xl text-center font-semibold bg-slate-500/25">
          Ocurrio un error (˘･_･˘)
        </p>
      );
    }
    return (
      <div className="mt-10 grid grid-cols-1  md:grid-cols-2 md:gap-10 lg:grid-cols-3 gap-5 place-items-center">
        {eventsItems.length ?   eventsItems.map((event) => (
            <EventItem
              key={`event-item-${event.id}`}
              name={event.name}
              info={event.info}
              img={event.images[0].url}
              id={event.id}
              onEventClick={handleEventClick}
            />
          ))
           : (
            <p className="my-10 w-full col-start-2 p-3 text-xl text-center font-semibold bg-slate-500/25">
              No hay eventos!
            </p>
          )
        }
       {eventsItems.length ?  <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={
            page.totalPages < 53 ? page.totalPages : page.totalPages - 53
          }
          previousLabel="<"
          renderOnZeroPageCount={null}
          className="pagination mb-16 py-3 w-full mx-auto flex justify-between font-semibold md:justify-around md:col-start-1 md:col-end-3 lg:col-end-4"
          disabledClassName="opacity-50 cursor-not-allowed pointer-events-none"
          previousClassName="previous"
          activeClassName="bg-subtitleSecondary rounded-xl px-3"
        /> : null }
      </div>
    );
  };

  //---------------------------------------------------------------->
  /* 1.FORMA PARA RENDERIZAR TANTO LOS FRILTRADOS O TODOS */
  // const renderEvents = () => {
  //   let eventsItems = events;

  //   if (searchTerm.length) {
  //     eventsItems = eventsItems.filter((event) =>
  //       event.name.toLowerCase().includes(searchTerm.toLowerCase())
  //     );
  //   }

  //   return eventsItems.map((event) => (
  //     <EventItem
  //       key={`event-item-${event.id}`}
  //       name={event.name}
  //       info={event.info}
  //       img={event.images[0].url}
  //       id={event.id}
  //       onEventClick={handleEventClick}
  //     />
  //   ));
  // };

  /* 2. FORMA DE MONTRAR POR SEPARADOS LOS FILTRADOS Y TODOS LOS EVENTOS */
  //   const evenstItems = events.map((event) => {
  //     return (<EventItem
  //       key={`event-item-${event.id}`}
  //       name={event.name}
  //       info={event.info}
  //       img={event.images[0].url}
  //       id={event.id}
  //       onEventClick={handleEventClick}
  //     />)
  //   }
  //   );

  //  const filterEvent = events.filter((event) =>
  //   event.name.toLowerCase().includes(searchTerm.toLowerCase()));
  //-------------------------------------------------------------->

  return (
    <div className=" w-10/12 mx-auto ">
      <Searchbar onSearchEvent={handleSearchEvent} ref={refComp} />
      {renderEvents()}

      {/* Otra forma de renderizar los eventos y los que estan filtrados */}
      {/* { !searchTerm ? evenstItems : filterEvent.map((event) => (
      <EventItem
        key={`event-item-${event.id}`}
        name={event.name}
        info={event.info}
        img={event.images[0].url}
        id={event.id}
        onEventClick={handleEventClick}
      />
    ))} */}
    </div>
  );
};

export default Events;
