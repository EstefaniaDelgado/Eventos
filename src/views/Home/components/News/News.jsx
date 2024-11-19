import NewsCard from "./components/NewsCard";
import Singer from "@assets/news/woman-smoke-pink.jpg";
import WomanDj from "@assets/news/woman-dj.jpg";
import GuitarPlayer from "@assets/news/guitar-player.jpg";

const data = [
  {
    title: "Vota por tu Acto en Vivo Favorito",
    image: Singer,
    date: "Noviembre 30, 2024",
  },
  {
    title: "Descubre el Festival de Música de Verano para Ti",
    image: WomanDj,
    date: "Noviembre 22, 2024",
  },
  {
    title: "Música en Vivo: Espectáculo de Clase Mundial",
    image: GuitarPlayer,
    date: "Noviembre 25, 2024",
  },
];

const News = () => {
  const renderNews = () => {
    return data.map((item, index) => {
      return <NewsCard key={index} data={item} />;
    });
  };

  return (
    <section className="relative z-10 my-16 w-11/12 max-w-[1200px] flex flex-col gap-11 mx-auto ">
      <div className="pt-12 md:pt-16 xl:pt-24 flex flex-col justify-end items-start gap-5 md:flex-1">
        <h2 className="absolute top-2 text-7xl font-extrabold text-gray-900 md:text-8xl xl:text-9xl">
          NEWS
        </h2>
        <div className="z-50 w-full">
          <h3 className="font-light z-50 text-lg md:text-xl font-title text-subtitlePrimary">
            [ Nuestro Blog ]
          </h3>
          <div className="flex justify-between items-center w-full">
            <h2 className="font-semibold text-2xl md:text-3xl ">
              ¿Qué hay de Nuevo?
            </h2>
            <div>
              <button className="border-white border-2 w-36 py-2 rounded-3xl font-semibold tracking-widest hover:text-subtitleSecondary hover:border-subtitleSecondary">
                VER MÁS!
              </button>
            </div>
          </div>
          <p className="py-4 text-slate-200">
            El día después del gran show, sigue disfrutando de las experiencias
            más exclusivas. ¡Las entradas son limitadas, asegura la tuya ya!
          </p>
        </div>
      </div>
      <div className="flex flex-wrap justify-evenly xl:justify-between gap-6">{renderNews()}</div>
    </section>
  );
};

export default News;
