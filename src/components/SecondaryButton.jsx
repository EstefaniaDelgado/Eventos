const SecondaryButton = ({ children }) => {
  return (
    <button className="flex items-center justify-center gap-2 font-medium border border-subtitlePrimary bg-blue-950 text-white px-4 py-2 rounded-2xl mt-4 mx-auto hover:scale-[0.95] transition duration-150 ease-in-out">
      {children}
    </button>
  );
};

export default SecondaryButton;
