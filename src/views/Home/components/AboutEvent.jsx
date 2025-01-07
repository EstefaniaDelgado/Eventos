const AboutEvent = () => {
  return (
    <section className="relative z-10 my-16 mx-5 max-w-[1200px] md:flex md:items-center md:gap-5 xl:mx-auto">
      <div className="pt-5 md:pt-4 lg:pt-0 xl:pt-20 flex flex-col justify-end items-start gap-5 md:flex-1 md:order-1 md:pl-5 xl:p-5 ">
        {" "}
        <h2 className="absolute top-0 text-5xl font-extrabold text-gray-900 md:text-6xl lg:text-8xl xl:text-9xl">
          ABOUT
        </h2>
        <div className="z-50">
          <h3 className="font-light z-50 text-lg md:text-xl font-title text-subtitlePrimary">
            [ Sobre el Evento ]
          </h3>
          <h2 className="z-50 font-semibold text-2xl md:text-3xl ">
            Bienvenido a los mejores eventos 
          </h2>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, magni
          commodi voluptate, eveniet exercitationem obcaecati quod ipsam
          doloribus vero non inventore debitis, quisquam ullam.{" "}
        </p>
        <button className="border-white border-2 px-8 py-2 rounded-3xl font-semibold tracking-widest hover:text-subtitleSecondary hover:border-subtitleSecondary">
          VER MÁS!
        </button>
      </div>

      {/* <div className="flex flex-col items-center gap-2 mt-5 md:w-full md:mt-0 md:flex-1 md:pl-5">
        <div className=" h-16 md:h-20  lg:h-24 w-4/5 max-w-[268px] md:max-w-none  lg:ml-16 lg:w-4/6 bg-artist bg-top bg-cover rounded-lg "></div>
        <div className=" h-16 mr-12 md:mr-4  md:h-20  lg:h-24  w-4/5 max-w-[223px] md:max-w-none rounded-lg self-end    bg-artist bg-center bg-cover"></div>
        <div className=" h-16 md:h-20  lg:h-24 rounded-lg w-4/5 max-w-[268px] md:max-w-none   lg:ml-16 lg:w-4/6 bg-artist bg-bottom bg-cover"></div>
      </div> */}
      <div className="relative items-center gap-2 mt-5 md:w-full md:mt-0 md:flex-1 md:h-96 bg-black">
        {/* Contenedor de las ventanas */}
        <div className="relative z-10 flex flex-col items-center justify-center gap-4 h-full mx-auto max-w-[450px]">
          {/* Ventana 1 */}
          <div className="h-16 md:h-20 lg:h-24 w-4/5 rounded-lg self-start ml-8 overflow-hidden">
            <div className="h-full w-full bg-artist bg-cover bg-[18px_top] md:bg-[15px_top]"></div>
          </div>

          {/* Ventana 2 */}
          <div className="h-16 md:h-20 lg:h-24 w-4/5 rounded-lg self-center ml-7 overflow-hidden">
            <div className="h-full w-full bg-artist bg-cover bg-[6px_center] min-[425px]:bg-[-3px_center] lg:bg-[-15px_65%]"></div>
          </div>

          {/* Ventana 3 */}
          <div className="h-16 md:h-20 lg:h-24 rounded-lg w-4/5 self-start ml-4 overflow-hidden">
            <div className="h-full w-full bg-artist bg-cover bg-[32px_bottom] md:bg-[20px_60px]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutEvent;
