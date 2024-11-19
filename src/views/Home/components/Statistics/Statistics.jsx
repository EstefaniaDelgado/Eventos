const data = [
  {
    statistics: "21",
    title: "ARTISTAS EN ESCENA",
  },
  {
    statistics: "10",
    title: "SESIONES DE NETWORKING",
  },
  {
    statistics: "15",
    title: "COFFEE BREAKS",
  },
  {
    statistics: "8",
    title: "CONFERENCIAS",
  },
];

const Statistics = () => {
  const dataElement = data.map((item) => (
    <div key={item.title}>
      <h2 className="text-5xl text-center font-bold text-white">
        {item.statistics}
      </h2>
      <p className="text-sm sm:text-base text-white">{item.title}</p>
    </div>
  ));

  return (
    <div>
      {/* Statistics Section */}
      <section className="relative h-52 bg-party bg-top bg-cover">
        <div className="absolute inset-0 bg-fuchsia-950 opacity-30"></div>
        <div className="absolute inset-0 flex flex-wrap items-center justify-evenly gap-4 sm:flex-nowrap">
          {dataElement}
        </div>
      </section>
    </div>
  );
};

export default Statistics;