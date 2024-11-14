const Counter = () => {
  return (
    <div className="h-[535px]  md:h-[800px] relative flex flex-col">
      <section className="bg-counter pt-10 pb-16 md:pt-14 md:pb-40">
        <div className=" mx-auto w-11/12 max-w-[1200px] flex flex-col md:flex-row md:justify-around items-center">
          <h2 className="text-2xl text-center md:text-start lg:text-start font-semibold p-5 md:p-0 md:flex-[0.5] xl:text-3xl ">
            Conteo de cada{" "}
            <strong className="text-subtitleSecondary">segundo</strong> antes
            del <strong className="text-subtitleSecondary">Evento</strong>
          </h2>
          <article className=" mb-8 w-8/12 max-w-[750px] text-center grid grid-cols-3 auto-cols-auto md:grid-cols-7 place-items-center items-center md:gap-0 lg:gap-6 md:mb-0 md:mt-0">
            {" "}
            <div className="lg:mr-8">
              <p className="text-4xl font-semibold md:text-5xl lg:text-7xl ">
                340
              </p>
              <p className="text-subtitlePrimary md:text-xl lg:text-2xl self-end md:mt-5">
                [Días]
              </p>
            </div>
            <strong className="text-4xl lg:text-6xl  md:self-start ">:</strong>
            <div>
              <p className="text-4xl lg:text-7xl font-semibold md:text-5xl">
                18
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
                13
              </p>
              <p className="text-subtitlePrimary  md:text-xl lg:text-2xl md:mt-5">
                [Minutos]
              </p>
            </div>
            <strong className="text-4xl lg:text-6xl md:self-start">:</strong>
            <div>
              <p className="text-4xl lg:text-7xl font-semibold md:text-5xl">
                13
              </p>
              <p className="text-subtitlePrimary  md:text-xl lg:text-2xl md:mt-5">
                [Segundos]
              </p>
            </div>
          </article>
        </div>
      </section>
      <div className="absolute w-5/6  max-w-[1200px] h-52 md:h-[550px] bottom-0 md:bottom-3  lg:bottom-0 right-1/2 transform translate-x-1/2 bg-theater bg-no-repeat bg-center bg-cover rounded"></div>
    </div>
  );
};

export default Counter;
