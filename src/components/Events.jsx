import React, { useState } from 'react';
import EventItem from './EventItem';
import useEventsData from '../Hooks/useEvents';
import { useNavigate } from 'react-router-dom';

const Events = ({ searchTerm, events }) => {
  // 1. usando un state para guardar la info
  // const [data]=useState(data)
  // const {
  //   _embedded: { events },
  // } = data;

  // 2. usando el hook creado para tener la info de manera global
  // const { events, isLoading, error } = useEventsData();

  const navigate = useNavigate()
  
  //Ir a la pantalla de detalle
  const handleEventClick = (id) => {
    console.log(id);
    navigate(`detail/${id}`)
  };

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


  const renderEvents = () => {
    let eventsItems = events;

    if (searchTerm.length) {
      eventsItems = eventsItems.filter((event) =>
        event.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return eventsItems.map((event) => (
      <EventItem
        key={`event-item-${event.id}`}
        name={event.name}
        info={event.info}
        img={event.images[0].url}
        id={event.id}
        onEventClick={handleEventClick}
      />
    ));
  };

  return (
    <div >
      Events
      {renderEvents()}
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
