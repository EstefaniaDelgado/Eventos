const Counter = () => {
  return (
    <div className="h-[520px]  md:h-[647px] relative flex flex-col">
      <section className="bg-counter pt-10 pb-10 md:pt-14 md:pb-24">
        <div
          className="mx-auto w-5/6 max-w-[1200px] flex flex-col md:flex-row md:justify-evenly lg:justify-evenly justify-center items-center"
        >
          <h2 className=" text-2xl text-center lg:text-start font-semibold p-5 md:p-0 md:flex-[0.5] xl:text-3xl ">
            Conteo de cada <strong className="text-purple">segundo</strong>{' '}
            antes del <strong className="text-purple">Evento</strong>
          </h2>
          <article className="mb-8 max-w-[446px] text-center grid grid-cols-3 auto-cols-auto md:grid-cols-7 place-items-center items-center md:gap-3 md:mb-0 md:mt-0">
            {' '}
            <div>
              <p className="text-4xl font-semibold md:text-5xl">340</p>
              <p className="text-pink md:text-xl self-end md:mt-5">[Días]</p>
            </div>
            <strong className="text-4xl md:self-start ">:</strong>
            <div>
              <p className="text-4xl font-semibold md:text-5xl">18</p>
              <p className="text-pink  md:text-xl md:mt-5">[Horas]</p>
            </div>
            <strong className="text-4xl hidden md:block md:self-start">
              :
            </strong>
            <div>
              <p className="text-4xl font-semibold md:text-5xl">13</p>
              <p className="text-pink  md:text-xl md:mt-5">[Minutos]</p>
            </div>
            <strong className="text-4xl md:self-start">:</strong>
            <div>
              <p className="text-4xl font-semibold md:text-5xl">13</p>
              <p className="text-pink  md:text-xl md:mt-5">[Segundos]</p>
            </div>
          </article>
        </div>
      </section>
      <div className="absolute w-5/6  max-w-[1015px] h-52 md:h-[400px] bottom-0 md:bottom-3  lg:bottom-14 right-1/2 transform translate-x-1/2 bg-theater bg-no-repeat bg-center bg-cover rounded"></div>
    </div>
  );
};

export default Counter;
