import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
import Box from '@mui/material/Box';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import useResults from '../../../../../../state/useResults';
import truncateText from '../../../../../../utils/truncateText';
import { parse, format } from 'date-fns';
import { es } from 'date-fns/locale';
import Sponsor1 from '../../../../../../assets/sponsors/sponsor1.png';
import Sponsor2 from '../../../../../../assets/sponsors/sponsor2.png';
import Sponsor3 from '../../../../../../assets/sponsors/sponsor3.png';
import Sponsor4 from '../../../../../../assets/sponsors/sponsor4.png';
import Sponsor5 from '../../../../../../assets/sponsors/sponsor5.png';
// import Artist from '../../../../../../assets/artist.jpg';
import Singer from '../../../../../../assets/artists/singer.jpg';
import Ballerinas from '../../../../../../assets/artists/ballerinas.jpg';
import Scenary from '../../../../../../assets/artists/scenary.jpg';

const TabPanel = ({ children, value, index }) => {
  return (
    <div
      className={`h-[250px] md:h-[168px] xl:h-[240px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-black `}
      role="tabpanel"
      hidden={value !== index}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
};

const convertTo12HourFormat = (time24) => {
  // Convertir la cadena "20:00:00" a un objeto Date
  const timeAsDate = parse(time24, 'HH:mm:ss', new Date());
  // Formatear la fecha al formato de 12 horas con AM/PM
  return format(timeAsDate, 'hh:mm a');
};

const Calendar = () => {
  const [value, setValue] = useState(0);
  const [dateTap, setDateTap] = useState('');

  //Información api:
  const { data, isLoading, error, fetchEvents } = useResults();
 
  let events = data._embedded?.events || [];


  const eventsDates = events.map((event) => {
    return event.dates?.start?.localDate;
  });

  const datesTaps = [...new Set(eventsDates)].sort(
    (a, b) => new Date(a) - new Date(b)
  );

  useEffect(() => {
    fetchEvents();
  }, []);

  // Solo establecer `dateTap` al valor del primer tab cuando `datesTaps` cambia y `dateTap` esté vacío
  useEffect(() => {
    if (datesTaps.length > 0 && dateTap === '') {
      setDateTap(datesTaps[0]);
    }
  }, [datesTaps, dateTap]);

  // Manejador de cambio de tabs
  const handleChange = (event, newValue) => {
    setValue(newValue);
    setDateTap(datesTaps[newValue]);
  };

  const titleTaps = () => {
    return datesTaps.map((date, index) => {
      return (
        <Tab
          key={`date-${index}`}
          sx={{
            margin: 'auto',
            width: '50%',
            color: 'white',
          }}
          className="text-white"
          label={
            <div className="text-center font-light">
              <h1 className="capitalize font-semibold text-white mb-2 ">Día</h1>
              <div className=" capitalize font-extralight text-white">
                {format(new Date(date), 'd LLLL yyyy', { locale: es })}
              </div>
            </div>
          }
        />
      );
    });
  };

  const renderContentTabs = () => {
    const filteredEvents = events.filter(
      (event) => event.dates?.start?.localDate === dateTap
    );

    return (
      <TabPanel value={value} index={value}>
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event) => {
            return (
              <div
                key={`event-item-${event.id}`}
                className="mt-5 flex flex-col md:flex-row items-center lg:justify-evenly gap-2 text-center"
              >
                <strong className="hidden md:block w-[15%] xl:text-xl">
                  {convertTo12HourFormat(event.dates?.start?.localTime)}
                </strong>

                <div className="order-1 text-start md:w-2/5 ml-1 xl:text-xl">
                  <h3 className="font-semibold text-xl lg:text-2xl">
                    {event.name}
                  </h3>
                  <p className="hidden overflow-hidden font-light md:block ">
                    {truncateText(event.info, 90)}
                  </p>
                </div>

                <figure className="md:w-3/12 ">
                  {' '}
                  <img
                    src={event.images?.[0].url}
                    alt="Evento"
                    className="rounded-lg w-full"
                  />
                </figure>

                <button className="border-white  order-2 border-2 px-4 py-1 md:py-2 text-[10px] lg:text-sm rounded-3xl font-semibold tracking-widest hover:text-subtitleSecondary hover:border-subtitleSecondary">
                 <Link to={`/detail/${event.id}`}>READ MORE</Link>
                </button>
              </div>
            );
          })
        ) : (
          <p className="text-xl text-center font-semibold bg-slate-500/25 px-3 py-5">
            No hay eventos programados
          </p>
        )}
      </TabPanel>
    );
  };

  if (error.length) {
    return (
      <p className="text-xl font-semibold bg-slate-500/25 px-3 py-5">
        Ha ocurrido un error
      </p>
    );
  }
  if(isLoading){
    return (
      <p className="text-xl font-semibold bg-slate-500/25 px-3 py-5">
      Cargando Calendario de Eventos...
    </p>
    )
  }

  return (
    <div className="w-full">
      <section className="relative z-10  my-16 md:flex md:items-center md:gap-5 xl:mx-auto ">
        <div className="pt-8 md:pt-16 xl:pt-24 flex flex-col justify-end items-center gap-5 md:flex-1">
          <h2 className="absolute top-2 t text-5xl font-extrabold text-gray-900 md:text-8xl xl:text-9xl">
            SCHEDULE
          </h2>
          <div className="z-50 text-center">
            <h3 className="font-light z-50 text-lg md:text-xl font-title text-pink-600">
              [ Nuestro Calendario ]
            </h3>
            <h2 className="z-50 font-semibold text-2xl md:text-3xl ">
              ¿A Qué Hora?
            </h2>
            <p className="mt-5 px-5 md:px-14">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil.
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis iste odit aliquid quaerat alias est fugit.
            </p>
          </div>
          <Box
            sx={{
              flexGrow: 1,
              maxWidth: { xs: 290, sm: 700, md: 900, lg: 1300 },
              bgcolor: 'transparent',
            }}
            className="mx-auto mt-7"
          >
            <Tabs
              value={value}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons="auto"
              aria-label="visible arrows tabs example"
              indicatorColor="secondary"
              sx={{
                justifyContent: 'center',
                alignItems: 'center',
                [`& .${tabsClasses.scrollButtons}`]: {
                  display: { xs: 'flex', lg: 'none' },
                },
                '& .MuiTabs-indicator': {
                  backgroundColor: '#be185d',
                  height: '2px',
                },
              }}
            >
              {titleTaps()}
            </Tabs>

            {renderContentTabs()}
          </Box>
        </div>
      </section>
      {/* Sponsors secction */}
      <section className="bg-[#070415]  p-5 grid grid-cols-3 md:grid-cols-5 place-items-center gap-3">
        <img src={Sponsor1} alt="patrocinador" />
        <img
          src={Sponsor2}
          alt="patrocinador"
          className="col-start-3 row-start-3 md:col-auto md:row-auto"
        />
        <img
          src={Sponsor3}
          alt="patrocinador"
          className="col-start-1 row-start-3 md:col-auto md:row-auto"
        />
        <img
          src={Sponsor4}
          alt="patrocinador"
          className="col-start-3 row-start-1 md:col-auto md:row-auto"
        />
        <img
          src={Sponsor5}
          alt="patrocinador"
          className="col-start-2 row-start-2 md:col-auto md:row-auto"
        />
      </section>
      {/* Images Section */}
      <section className="mt-10 md:h-[300px] grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center">
        <img
          src={Singer}
          alt="entretenimiento"
          className="h-full w-full object-cover col-span-2 md:col-auto md:row-auto"
        />

        <img
          src={Ballerinas}
          alt="entretenimiento"
          className="h-full w-full object-cover col-start-3 row-span-2 md:col-auto md:row-auto"
        />

        <img
          src={Scenary}
          alt="entretenimiento"
          className="h-full w-full object-cover col-span-2 row-start-2 md:col-auto md:row-auto"
        />

        <img
          src={Singer}
          alt="entretenimiento"
          className="hidden md:block h-full w-full object-cover col-start-1 row-start-3 md:col-auto md:row-auto"
        />

        <img
          src={Scenary}
          alt="entretenimiento"
          className="hidden lg:block h-full w-full col-span-2 row-start-3 md:col-auto md:row-auto"
        />
      </section>
    </div>
  );
};

export default Calendar;
