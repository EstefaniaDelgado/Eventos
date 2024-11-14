import CardGuest from "./components/CardGuest";
import Singer1 from "/public/singer_1.jpg";
import Singer2 from "/public/singer_2.jpg";
import Singer3 from "/public/singer_3.jpg";
import Singer4 from "/public/singer_4.jpg";
import Singer5 from "/public/singer_5.jpg";
import Twitter from "/public/twitter.svg";
import Facebook from "/public/facebook.svg";
import Linkedin from "/public/linkedin.svg";
import Instagram from "/public/instagram.svg";

const guests = [
  {
    name: "Richard Nellson",
    image: Singer5,
    profession: "Musician",
    socialNetworks: [
      {
        name: "twitter",
        url: "https://x.com",
        icon: Twitter,
      },
      {
        name: "facebook",
        url: "https://www.facebook.com",
        icon: Facebook,
      },
      {
        name: "linkedin",
        url: "https://www.linkedin.com",
        icon: Linkedin,
      },
      {
        name: "instagram",
        url: "https://www.instagram.com",
        icon: Instagram,
      },
    ],
  },
  {
    // name: "Willy Samford",
    name: "Aria Lane",
    image: Singer2,
    profession: "Singer",
    socialNetworks: [
      {
        name: "twitter",
        url: "https://x.com",
        icon: Twitter,
      },
      {
        name: "facebook",
        url: "https://www.facebook.com",
        icon: Facebook,
      },
      {
        name: "linkedin",
        url: "https://www.linkedin.com",
        icon: Linkedin,
      },
      {
        name: "instagram",
        url: "https://www.instagram.com",
        icon: Instagram,
      },
    ],
  },
  {
    name: "Larry Woodpeker",
    image: Singer3,
    profession: "Singer",
    socialNetworks: [
      {
        name: "twitter",
        url: "https://x.com",
        icon: Twitter,
      },
      {
        name: "facebook",
        url: "https://www.facebook.com",
        icon: Facebook,
      },
      {
        name: "linkedin",
        url: "https://www.linkedin.com",
        icon: Linkedin,
      },
      {
        name: "instagram",
        url: "https://www.instagram.com",
        icon: Instagram,
      },
    ],
  },
  {
    name: "Emma Thunder",
    image: Singer1,
    profession: "Singer",
    socialNetworks: [
      {
        name: "twitter",
        url: "https://x.com",
        icon: Twitter,
      },
      {
        name: "facebook",
        url: "https://www.facebook.com",
        icon: Facebook,
      },
      {
        name: "linkedin",
        url: "https://www.linkedin.com",
        icon: Linkedin,
      },
      {
        name: "instagram",
        url: "https://www.instagram.com",
        icon: Instagram,
      },
    ],
  },
];

const Guest = () => {
  const guestCards = guests.map((guest) => (
    <CardGuest
      key={guest.name}
      name={guest.name}
      image={guest.image}
      profession={guest.profession}
      socialNetworks={guest.socialNetworks}
    />
  ));

  return (
    <section className="w-full bg-slate-900">
      <section className="relative z-10 my-16 mx-5 w-11/12 max-w-[1200px] flex flex-col justify-center items-center gap-11 md:pl-5 xl:mx-auto">
        <div className="pt-12 md:pt-16 xl:pt-24 flex flex-col justify-center items-center gap-5 md:flex-1">
          {" "}
          <h2 className="absolute top-2 text-7xl font-extrabold text-slate-950 md:text-8xl xl:text-9xl">
            GUESTS
          </h2>
          <div className="z-50 flex flex-col justify-center items-center">
            <h3 className="font-light z-50 text-lg md:text-xl font-title text-subtitlePrimary">
              [ Nuestros Rockstars ]
            </h3>
            <h2 className="font-semibold text-2xl md:text-3xl mt-2 mb-5">
              Invitados Especiales
            </h2>
            <p className="text-center max-w-2xl text-gray-300">
              Escuche 9 charlas inspiradoras, conozca a los mejores expertos en
              productos de Europa y diviértanse juntos después del evento.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 my-6">
          {guestCards}
        </div>
      </section>
    </section>
  );
};

export default Guest;
