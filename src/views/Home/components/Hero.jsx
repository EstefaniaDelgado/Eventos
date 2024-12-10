import { Typography } from "@mui/material";
import "./Hero.css";
import Logo from "@assets/hero_logo.png";
import SecondaryButton from "../../../components/SecondaryButton";

const Hero = () => {
  return (
    <div className="h-screen bg-hero-image bg-no-repeat bg-cover bg-center flex flex-col justify-center items-center gap-4">
      <div className="relative w-11/12 sm:w-8/12 mx-auto flex flex-col items-center">
        {/* <div className="absolute inset-0 opacity-10 bg-black"></div> */}
        <img src={Logo} alt="Logo" className="w-full h-full" />
        <Typography
          variant="h3"
          className="font-light font-title text-sm sm:text-base lg:text-2xl absolute bottom-2 sm:bottom-4 xl:bottom-16"
        >
          [Diciembre 20-22, Seattle, Show en Vivo]
        </Typography>
      </div>
      <div className="w-11/12 sm:w-3/4 lg:w-7/12 xl:w-5/12 text-center">
        <Typography variant="p" className="text-base">
          Cada año, 600 creadores curiosos vienen a escuchar historias de
          negocios, conocer gente amigable y comer excelente comida juntos.
          ¡Ojalá nos veamos allí!
        </Typography>
        <SecondaryButton>
          <a href="#event">COMPRAR TICKETS</a>
        </SecondaryButton>
      </div>
    </div>
  );
};

export default Hero;
