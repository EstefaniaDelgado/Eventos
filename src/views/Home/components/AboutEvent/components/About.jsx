import Collage1 from '../../../../../assets/artists/collage1.jpg'
import Collage2 from '../../../../../assets/artists/collage2.jpg'
import Collage3 from '../../../../../assets/artists/collage3.jpg'
import Collage4 from '../../../../../assets/artists/collage4.jpg'
import Collage5 from '../../../../../assets/artists/collage5.jpg'

 const About = () => {
  return (
   <section className="flex w-[90%] xl:w-[70%] mx-auto flex-wrap gap-2">
  <img src={Collage1} alt="event images" className="hidden md:block h-56 w-56 grow object-cover xl:h-60 xl:w-60" />
  <img src={Collage2} alt="event images" className="hidden md:block h-56 w-56 grow object-cover xl:h-60 xl:w-60" />
  <img src={Collage3} alt="event images" className="hidden md:block h-56 w-56 grow object-cover xl:h-60 xl:w-60" />
  <img src={Collage4} alt="event images" className="hidden md:block h-56 w-56 grow object-cover xl:h-60 xl:w-60" />
  <img src={Collage5} alt="event images" className="h-56 w-56 xl:h-60 xl:w-60 grow object-cover object-bottom" />
   </section>
  )
}


export default About;