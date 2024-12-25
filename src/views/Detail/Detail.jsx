import { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./style.css";
import useResults from "../../state/useResults";
import format from "date-fns/format";
import { es } from "date-fns/locale";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import formatDateTime from "../../utils/formatDateTime";
import PrimaryButton from "../../components/PrimaryButton";
import Location from "../../components/Location/Location";
import SecondaryButton from "../../components/SecondaryButton";

const Detail = () => {
  //1. usando el estado y el llamando al endpoint para traer la data del detalle
  // const [detailEvent, setDetailEvent] = useState({});
  // const [isLoadingDetail, setIsLoadingDetail] = useState(true);
  // const [errorDetail, setErrorDetail] = useState('');

  //tomando el parametro de la URL
  const { id } = useParams();

  //2. usando un state global con zustand
  const { detailEvent, isLoadingDetail, errorDetail, fetchEventDetail } =
    useResults();

  console.log(detailEvent);

  // formatear y obtener fecha y hora de inicio del evento
  const { startTimeEvent, startDateEvent } = formatDateTime(
    format,
    es,
    detailEvent
  );
  const heroImage = detailEvent.images?.find((image) => image.width > 500);

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
    fetchEventDetail(id);
  }, [fetchEventDetail, id]);

  if (errorDetail.length) {
    return <div>Ha ocurrido un error</div>;
  }

  if (isLoadingDetail) {
    return <div>Cargando detalle del evento....😵</div>;
  }

  return (
    <div>
      <figure className="w-full md:h-[75vh]">
        <img
          className="w-full h-full object-cover"
          src={heroImage?.url}
          alt={detailEvent.name}
        />
      </figure>
      <h1 className="text-3xl font-bold text-center my-5">
        {detailEvent.name}
      </h1>
      <div className="w-11/12 xl:w-3/4 mx-auto my-4">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:my-6">
          {/* Details Event */}
          <div className="flex justify-around md:justify-between">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <CalendarMonthIcon className="text-subtitlePrimary" />
                <p>{startDateEvent}</p>
              </div>
              <div className="flex items-center gap-2">
                <AccessAlarmIcon className="text-subtitlePrimary" />
                <p>{startTimeEvent}</p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div>Rango de precios</div>
              <div className="text-xl font-medium text-subtitlePrimary">
                {detailEvent.priceRanges?.[0].currency}{" "}
                {detailEvent.priceRanges?.[0].min} -{" "}
                {detailEvent.priceRanges?.[0].max}
              </div>
            </div>
          </div>
          {/* Get Ticket */}
          <div className="flex justify-center md:justify-end lg:justify-end lg:mr-[16%] xl:justify-center xl:mr-0 items-center xl:col-start-3">
            <PrimaryButton className={"mx-auto"} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 space-x-2">
          {/* Descripcion general del evento */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-semibold text-center md:text-start my-6">
              Descripción General del Evento
            </h2>
            <p className="text-justify w-11/12 mx-auto md:mx-0 lg:text-start">
              {detailEvent.info}
            </p>
            {/* Información importante */}
            <div className="my-6 w-11/12 mx-auto md:mx-0">
              <h2 className="font-semibold text-subtitlePrimary">
                Información Importante
              </h2>
              <p className="text-justify text-sm lg:text-start text-gray-300">
                {detailEvent.pleaseNote}
              </p>
            </div>
          </div>

          {/* Imagen con distribución de asientos */}
          <div className="h-full">
            <h2 className="text-xl font-semibold text-center my-6">
              Distribución de Asientos
            </h2>
            {detailEvent.seatmap?.staticUrl ? (
              <figure className="rounded-lg py-2 lg:p-2 h-4/5">
                <img
                  src={detailEvent.seatmap?.staticUrl}
                  alt={detailEvent.name}
                  className="rounded-lg w-full h-full"
                />
              </figure>
            ) : (
              <p className="text-center">Información No Disponible</p>
            )}
          </div>

          {/* Mapa de ubicación del evento */}
          <div className="md:col-span-3 flex flex-col justify-center items-center py-6">
            <h3 className="text-xl font-semibold pb-6">Ubicación</h3>
            <Location customStyles="rounded-md" detailEvent={detailEvent} />
          </div>
        </div>
        <SecondaryButton>
          <a href={detailEvent.url} target="_blank">
            Comprar Boletos
          </a>
        </SecondaryButton>
      </div>
    </div>
  );
};

export default Detail;
