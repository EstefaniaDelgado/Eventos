import Twitter from '/public/twitter.svg';
import Facebook from '/public/facebook.svg';
import Linkedin from '/public/linkedin.svg';
import Instagram from '/public/instagram.svg';

const icons = [Twitter, Facebook, Instagram, Linkedin];

const Footer = () => {
  return (
    <>
      <section className="mt-5 px-2 pb-10 flex lg:flex-row flex-col items-center lg:items-start justify-center lg:justify-around gap-8 font-light">
        <article className="text-center lg:flex-[0.8] xl:flex-[0.5]">
          <h2 className="text-2xl font-bold">EVENTOS</h2>
          <p className="mt-3 mx-auto font-light md:w-1/2 lg:text-start lg:w-auto">
            Contruyendo grandes productos. Hace pocos años comenzamos este
            proyecto para aprender de quienes han estado en esta industria del
            entretenimiento.
          </p>
          <div className=" flex justify-center items-center py-3 gap-3">
            {icons.map((icon, index) => {
              return (
                <div
                  key={`icon-item-${index}`}
                  className="bg-slate-900 border-2 border-slate-900 p-2 rounded-full hover:border-white hover:bg-transparent"
                >
                  <img src={icon} alt="Icons" className=" w-4 h-4" />
                </div>
              );
            })}
          </div>
        </article>
        <section className=" flex flex-col items-center justify-center gap-4 md:flex-row md:gap-10 lg:gap-6 ">
          <article className="flex flex-col items-center gap-5 md:ml-20 lg:ml-0">
            <h4 className="text-xl font-semibold md:self-start">Workshops</h4>
            <p className="self-start ">Sprigns bien diseñadas</p>
            <p className="self-start ">Comenzar con marcadores</p>
            <p className="self-start ">Aprender todos los días</p>
            <p className="self-start">Crear productos estrategicos</p>
          </article>
          <article className="ml-5 md:ml-0 flex flex-col items-center gap-5">
            <h4 className="text-xl font-semibold md:self-start">Events</h4>
            <p className="self-start ">Lima - Perú</p>
            <p className="self-start">Bogotá - Colombia</p>
            <p className="self-start ">Buenos Aires - Argentina</p>
            <p className="self-start">Ciudad de Mexico - Mexico D.F</p>
          </article>
        </section>
        <form
          className="flex flex-col justify-center items-center gap-4"
          onSubmit={(e) => e.preventDefault()}
        >
          <h4 className="text-xl font-semibold lg:self-start">Newsletter</h4>
          <input
            type="text"
            placeholder="Tu correo.."
            // className="bg-transparent border-b-2 border-slate-900"
            className="font-title block mx-auto bg-transparent  border-b-2 border-subtitlePrimary focus:outline-none focus:border-white caret-subtitlePrimary placeholder-gray-500"
          />
          <button className="border-2 border-subtitlePrimary bg-subtitlePrimary  px-8 py-2 rounded-3xl font-semibold tracking-widest hover:border-white hover:bg-transparent">
            Suscribete
          </button>
        </form>
      </section>
      <section className="w-11/12 mx-auto py-3 border-t-2 border-slate-900 flex justify-center md:justify-start">
        <p
          className="text-slate-500 font-semibold 
    "
        >
          Hecho con ♥ por Hans Urpay y Estefania Delgado.
        </p>
      </section>
    </>
  );
};

export default Footer;
