import { useState, useEffect } from 'react';
import ConfettiExplosion from 'react-confetti-explosion';


const Counter = ({ event, events }) => {
 
  // console.log(events)

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [eventStarted, setEventStarted] = useState(false);

  useEffect(() => {
    if (!event) return; 

    const calculateTimeLeft = () => {
      const now = new Date();
      const eventTime = new Date(event);
      const difference = eventTime - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });
        setEventStarted(false);
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        setEventStarted(true);
      }
    };

    const interval = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(interval);
  }, [event]);

  return (
    // <div className="h-[535px]  md:h-[800px] relative flex flex-col">
    <div
      className={`${
        eventStarted ? 'h-[420px]' : 'h-[535px]'
      } md:h-[800px] relative flex flex-col `}
      //className={'h-[535px] md:h-[800px] relative flex flex-col'}
    >
      <section className="bg-counter pt-10  pb-16 md:pt-14 md:pb-40">
        <div className=" mx-auto mb-4 lg:mt-8 w-11/12 max-w-[1200px] flex flex-col md:flex-row md:justify-around items-center">
          <h2 className="text-2xl mt-6 text-center md:text-start lg:text-start font-semibold px-5 py-6 pb-0 md:p-0 md:flex-[0.5] xl:text-3xl ">
            Conteo de cada{' '}
            <strong className="text-subtitleSecondary">segundo</strong> antes
            del <strong className="text-subtitleSecondary">Evento</strong>
          </h2>
          {!eventStarted ? (
            <article className=" mb-8 w-8/12 max-w-[750px] text-center grid grid-cols-3 auto-cols-auto md:grid-cols-7 place-items-center items-center md:gap-0 lg:gap-6 md:mb-0 md:mt-0">
              {' '}
              <div className="lg:mr-8">
                <p className="text-4xl font-semibold md:text-5xl lg:text-7xl ">
                  {timeLeft.days}
                </p>
                <p className="text-subtitlePrimary md:text-xl lg:text-2xl self-end md:mt-5">
                  [Días]
                </p>
              </div>
              <strong className="text-4xl lg:text-6xl  md:self-start ">
                :
              </strong>
              <div>
                <p className="text-4xl lg:text-7xl font-semibold md:text-5xl">
                  {timeLeft.hours}
                </p>
                <p className="text-subtitlePrimary  md:text-xl lg:text-2xl md:mt-5">
                  [Horas]
                </p>
              </div>
              <strong className="text-4xl lg:text-6xl hidden md:block md:self-start">
                :
              </strong>
              <div>
                <p className="text-4xl lg:text-7xl font-semibold md:text-5xl">
                  {timeLeft.minutes}
                </p>
                <p className="text-subtitlePrimary  md:text-xl lg:text-2xl md:mt-5">
                  [Minutos]
                </p>
              </div>
              <strong className="text-4xl lg:text-6xl md:self-start">:</strong>
              <div>
                <p className="text-4xl lg:text-7xl font-semibold md:text-5xl">
                  {timeLeft.seconds}
                </p>
                <p className="text-subtitlePrimary  md:text-xl lg:text-2xl md:mt-5">
                  [Segundos]
                </p>
              </div>
            </article>
          ) : (
            <>
              <ConfettiExplosion />
              <h3 className="font-semibold  text-center text-xl md:text-4xl">
                🎉 El Evento ha comenzado 🎉
              </h3>
            </>
          )}
          
        </div>
      </section>
      {/* <div className="absolute w-5/6  max-w-[1200px] h-52 md:h-[550px] bottom-0 md:bottom-3  lg:bottom-0 right-1/2 transform translate-x-1/2 bg-theater bg-no-repeat bg-center bg-cover rounded"></div> */}
      <img
        src={events[2]?.images[0]?.url}
        className="absolute w-5/6  max-w-[1200px] h-52 md:h-[550px] bottom-0 md:bottom-3  lg:bottom-0 right-1/2 transform translate-x-1/2 rounded"
      ></img>
      <div className="w-10/12 md:w-1/2 absolute top-0 right-1/2 transform translate-x-1/2 py-3 z-20 font-semibold  text-center text-xl bg-slate-400/30 md:text-3xl ">
        <h2>{events[2]?.name}</h2>
      </div>
    </div>
  );
};

export default Counter;
