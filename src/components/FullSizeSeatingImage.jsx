const FullSizeSeatingImage = ({ imageSrc, closeImage }) => {
  return (
    <div
      className="fixed inset-0 w-full h-full bg-black bg-opacity-50 z-50 flex justify-center items-center"
      onClick={closeImage}
    >
      <button
        className="absolute right-8 top-32 md:top-12 md:right-16 text-white text-4xl cursor-pointer"
        onClick={closeImage}
      >
        &times;
      </button>
      <div
        className="h-1/2 w-4/5 md:h-3/4 max-w-screen-2xl rounded-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={imageSrc}
          alt="Seating Distribution"
          className="w-full h-full object-contain rounded-lg"
        />
      </div>
    </div>
  );
};

export default FullSizeSeatingImage;
