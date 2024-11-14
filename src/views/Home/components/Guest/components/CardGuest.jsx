const CardGuest = ({ name, image, profession, socialNetworks }) => {
  const socialNetworksList = socialNetworks.map((socialNetwork) => (
    <li key={socialNetwork.name}>
      <a href={socialNetwork.url}>
        <img
          src={socialNetwork.icon}
          className="w-6 h-6"
          alt={socialNetwork.name}
        />
      </a>
    </li>
  ));

  return (
    <div>
      <div className="flex flex-col justify-center items-center relative mb-6">
        <div className="rounded-full w-64 h-64">
          <img
            src={image}
            alt="Musician"
            className="rounded-full w-full h-full object-cover object-center"
          />
        </div>
        <ul className="absolute -bottom-6 grid grid-cols-4 p-4 bg-indigo-950 justify-items-center rounded-3xl w-4/5">
          {socialNetworksList}
        </ul>
      </div>
      <div className="flex flex-col justify-center items-center my-10 gap-2">
        <h2 className="text-3xl font-semibold">{name}</h2>
        <p className="text-subtitleSecondary">[{profession}]</p>
      </div>
    </div>
  );
};

export default CardGuest;
