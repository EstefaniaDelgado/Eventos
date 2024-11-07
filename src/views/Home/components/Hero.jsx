import { Typography } from '@mui/material';
import './Hero.css'


const Hero = () => {
  return (
    <div className="h-screen bg-hero-image bg-no-repeat bg-cover bg-center flex flex-col justify-center items-center ">
      <Typography variant='h1' className='text-xl text-center font-extrabold md:text-[3rem] leading-loose ' >DISFRUTA DE LOS MEJORES <strong>EVENTOS</strong></Typography>

      <Typography variant='h3' className='font-light mt-3 font-title text-xl'>[No te pierdas ninguno!]</Typography>
     
    </div>
  );
};

export default Hero;
