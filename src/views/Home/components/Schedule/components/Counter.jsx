const Counter = () => {
  return (
    <div className="h-[536px] relative flex flex-col md:h-[400px] ">
    <section className="bg-counter flex flex-col md:flex-row md:justify-around md:py-5 lg:justify-evenly justify-center items-center">
      <h2 className="max-w-[289px] text-2xl text-center lg:text-start font-semibold p-5 md:p-0 md:flex-[0.5] xl:text-3xl ">
        Conteo de cada <strong className="text-purple">segundo</strong> antes
        del <strong className="text-purple">Evento</strong>
      </h2>
      <article className="mt-3 mb-8 max-w-[446px] text-center grid grid-cols-2 gap-5 md:grid-cols-4 place-items-center md:gap-3 md:mb-0 md:mt-0">
        {' '}
        <div >
          <p className="text-4xl font-semibold md:text-5xl">340</p>
          <p className="text-purple md:text-xl">[Días]</p>
        </div>
        <div>
          <p className="text-4xl font-semibold md:text-5xl">18</p>
          <p className="text-purple md:text-xl">[Horas]</p>
        </div>
        <div>
          <p className="text-4xl font-semibold md:text-5xl">13</p>
          <p className="text-purple md:text-xl">[Minutos]</p>
        </div>
        <div>
          <p className="text-4xl font-semibold md:text-5xl">13</p>
          <p className="text-purple md:text-xl">[Segundos]</p>
        </div>
      </article>
    </section>
    <div className="absolute w-[327px] bottom-5 right-10 bg-artist bg-no-repeat bg-center bg-cover h-52 rounded md:w-full"></div>
    </div>
  );
};

export default Counter;
