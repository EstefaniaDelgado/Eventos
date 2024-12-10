const SecondaryButton = ({ children }) => {
  return (
    <button className="flex items-center justify-center gap-2 font-medium border border-subtitlePrimary bg-blue-950 text-white px-4 py-2 rounded-2xl mt-4 mx-auto">
      {children}
    </button>
  );
};

export default SecondaryButton;
