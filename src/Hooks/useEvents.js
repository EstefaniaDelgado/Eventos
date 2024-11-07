import dataEvents from '../data/data.json';
import { useEffect, useRef, useState } from 'react';

const useEventsData = () => {
  // 1. opcion para usar el estado y luego hacer un desturturing de la info
  // const [data]=useState(dataEvents)
  // const {
  //   _embedded: { events },
  // } = data;

  //probando la diferencia con una referencia
  // const ref = useRef([]){current:[]}

  // useEffect(()=>{
  //   setTimeout(()=>{
  //    ref.current = dataEvents;
  //    console.log(ref.current)
  //   }, 2000)
  // },[])

  //usando state
  const [data, setData] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  const [error, setError] = useState("");

  //HACIENDO EL LLAMADO DE LA DATA LOCAL en el archivo JSON
  // useEffect(() => {
  //   setTimeout(() => {
  //     try {
  //       setData(dataEvents);
  //     } catch (error) {
  //       setError(error);
  //     }finally{
  //       setIsloading(false)
  //     }
  //   }, 2000);
  // }, []);

  //haciendo el llamado a la API
  // useEffect(() => {
  //   const fecthEvents = async () => {
  //     try {
  //       const response = await fetch(
  //         'https://app.ticketmaster.com/discovery/v2/events.json?apikey=AydPahDLnXCXMHnjaoh2e0xghTN8eGGj'
  //       );
  //       const data = await response.json();
  //       setData(data);
  //     } catch (error) {
  //       setError(error);
  //     } finally {
  //       setIsloading(false);
  //     }
  //   };
  //   fecthEvents();
  // },[]);

  //PARA AUMENTAR LA REUSABILIDAD SOLO DEJAMOS LA FUNCION FETCH Y QUIEN NECESITE LA INFO VA A LLAMAR A LA FUNCION
  const fetchEvents = async (params) => {
    try {
      const response = await fetch(
        `https://app.ticketmaster.com/discovery/v2/events.json?apikey=Q3ZlIxi2udPG9SrzsiHzwHZVsAWwBann&countryCode=MX${params ? params: ""}`
      );
      const data = await response.json();
      setData(data);
    } catch (error) {
      setError(error);
    } finally {
      setIsloading(false);
    }
  };
 
  

  return {
    /* Usando una referencia */
    // events:ref.current?._embedded?.events || [],
    events: data._embedded?.events || [],
    page:data?.page || {},
    isLoading,
    error,
    fetchEvents,
  };
};

export default useEventsData;
