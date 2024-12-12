import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './style.css';
import useResults from '../../state/useResults';
import format from 'date-fns/format';
import { es } from 'date-fns/locale';

const Detail = () => {

  //1. usando el estado y el llamando al endpoint para traer la data del detalle
  // const [detailEvent, setDetailEvent] = useState({});
  // const [isLoadingDetail, setIsLoadingDetail] = useState(true);
  // const [errorDetail, setErrorDetail] = useState('');

  //tomando el parametro de la URL
  const { id } = useParams();

  //2. usando un state global con zustand
  const{detailEvent, isLoadingDetail, errorDetail, fetchEventDetail}=useResults()

  // console.log(isLoadingDetail)

  useEffect(() => {
    //HACIENDO EL LLAMADO DIRECTAMENTE EN EL COMPONENTE
    // const fetchEvents = async () => {
    //   try {
    //     const eventDetail = await fetch(
    //       `https://app.ticketmaster.com/discovery/v2/events/${id}?apikey=${
    //         import.meta.env.VITE_TICKETMASTER_API_KEY
    //       }`
    //     );
    //     const response = await eventDetail.json();
    //     setDetailEvent(response);
    //   } catch (error) {
    //     setErrorDetail(error);
    //   } finally {
    //     setIsLoadingDetail(false);
    //   }
    // };
    // fetchEvents();
    //USANDO EL STATE GLOBAL
    fetchEventDetail(id)
  }, []);

  

  if (errorDetail.length) {
    return <div>Ha ocurrido un error</div>;
  }

  if (isLoadingDetail) {
    return <div>Cargando detalle del evento....😵</div>;
  }


  return (
    <div>
        <p className="text-xl text-center font-semibold bg-slate-500/25 px-3 py-5">
            Vista en desarrollo..👨🏻‍💻
          </p>
      {/* <figure>
        {' '}
        <img
          className="image-detail"
          src={detailEvent.images?.[0].url}
          alt={detailEvent.name}
          height={200}
          width={200}
        />
      </figure>{' '}
      <div className="container-info">
        <h3 className="event-name">{detailEvent.name}</h3>
        <p className="item-event-info">{detailEvent.info}</p>
      {detailEvent.dates?.start.localDate ? (
        <p>
          {format(
            new Date(detailEvent.dates?.start?.localDate),
            'd LLLL yyyy',
            { locale: es }
          )}
        </p>
      ) : null}
      </div>
      <div className="seat-info-container">
        <h3>Mapa del Evento</h3>
        <figure className="container-image-map">
          <img src={detailEvent.seatmap?.staticUrl} alt={detailEvent.name} />
        </figure>
        <p>{detailEvent.pleaseNote}</p>
        <p>
          Rango de Precios: {detailEvent.priceRanges?.[0].min}-
          {detailEvent.priceRanges?.[0].max}
        </p>
      </div>
      <a href={detailEvent.url} target="_blank">
        Ir por tus boletos
      </a> */}
    </div>
  );
};

export default Detail;
