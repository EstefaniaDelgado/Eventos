const PrimaryButton = ({className}) => {
  return (
    <div>
      <button
        className={`flex items-center justify-center font-medium bg-subtitlePrimary text-white
           px-4 py-2 rounded-2xl ${className}`}
      >
        <a href="https://www.ticketmaster.com/" target="_blank">
          COMPRAR TICKETS
        </a>
      </button>
    </div>
  );
};

export default PrimaryButton;
