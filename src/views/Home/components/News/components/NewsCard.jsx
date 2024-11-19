const NewsCard = ({ data }) => {
  return (
    <div className="bg-slate-900 max-w-[360px] rounded-lg">
      <div className="relative w-full h-52 rounded-lg">
        <img
          src={data.image}
          alt="Artist"
          className="w-full h-full object-cover rounded-t-lg"
        />
        <button className="absolute bottom-4 left-4 bg-pink-600 text-white text-sm px-5 py-1 rounded-full">
          MUSIC
        </button>
      </div>
      <div className="pt-8 pb-14 px-6">
        <p className="font-title text-sm text-subtitleSecondary">
          [{data.date}]
        </p>
        <h2 className="text-2xl">{data.title}</h2>
      </div>
    </div>
  );
};

export default NewsCard;
