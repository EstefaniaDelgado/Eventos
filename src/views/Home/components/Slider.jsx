import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Navigation, Autoplay  } from 'swiper/modules';
import './Switer.css';
import useResults from '../../../state/useResults';
import { useEffect } from 'react';

// const ExpandMore = styled((props) => {
//   const { expand, ...other } = props;
//   return <IconButton {...other} />;
// })(({ theme }) => ({
//   marginLeft: 'auto',
//   transition: theme.transitions.create('transform', {
//     duration: theme.transitions.duration.shortest,
//   }),
//   variants: [
//     {
//       props: ({ expand }) => !expand,
//       style: {
//         transform: 'rotate(0deg)',
//       },
//     },
//     {
//       props: ({ expand }) => !!expand,
//       style: {
//         transform: 'rotate(180deg)',
//       },
//     },
//   ],
// }));

const Slider = () => {
  const [expanded, setExpanded] = React.useState(false);
  const { data, fetchEvents } = useResults();

  const events = data._embedded?.events.slice(8,16) || [];

  useEffect(() => {
    fetchEvents();
  }, []);

  

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="relative mx-auto w-5/6 h-[180px] ">
      <div className="absolute px-4 py-10 -top-10 right-1/2 transform translate-x-1/2 w-11/12 h-[250px] bg-black/40">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            '768': {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }}
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper h-full w-full custom-pagination"
          autoplay={{
            delay: 2000, // Mueve automáticamente el slider cada 3 segundos
            disableOnInteraction: false, // Evita que se detenga al interactuar
          }}
        >
          {events.map((event, index) => (
            <SwiperSlide key={`item-slider-${index}`} className='cursor-pointer'>
              <img src={event.images[3].url} alt="evento" className=" h-full object-conver object-center opacity-60 hover:opacity-100" />
              <Typography className="absolute z-20 top-1/2 left-2 text-white font-semibold truncate-text">
                {event.name}
              </Typography>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
export default Slider;
