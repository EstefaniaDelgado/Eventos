import { useState } from 'react';
import HeartFilled from '../assets/heartFilled.png';
import HeartUnfilled from '../assets/heartUnfilled.png';
import { useEffect } from 'react';
import useLikedEvents from '../Hooks/useLikedEvents';
import truncateText from '../utils/truncateText';

const EventItem = ({ name, id, info, img, onEventClick }) => {
  const { isLiked, toogleLiked } = useLikedEvents(id);
 

  // const [isLiked, setIsLiked] = useState(checkedLike());

  useEffect(() => {}, []);

  const handleSeeMoreEvents = (e) => {
    e.stopPropagation();
    onEventClick(id);
  };

  const handleClickLiked = () => {
    toogleLiked();
  };

  return (
    <div
      /* onClick={() => console.log('Padre cliqueado')} */ className=" max-auto text-center
    pb-3 border-2 rounded-lg w-[263px] lg:w-auto md:h-[420px] flex flex-col items-center gap-2"
    >
      <div className="w-full  relative">
        <img
          src={img}
          alt="Event Image"
          // style={{ width: '100%', display: 'block' }}
          // height={200}
          className=" w-full rounded-t-lg md:h-full object-cover"
        />
        <img
          src={!isLiked ? HeartUnfilled : HeartFilled}
          // style={{
          //   position: 'absolute',
          //   top: '10px',
          //   left: '10px',
          //   cursor: 'pointer',
          // }}
          className='absolute top-4 left-3 cursor-pointer'
          alt="Corazón relleno"
          width={20}
          onClick={handleClickLiked}
        />
      </div>
      <div className="h-full flex flex-col justify-center items-center gap-5">
        <h3 className="text-xl font-semibold px-2 ">{name}</h3>
        <p className="hidden md:block px-2">{truncateText(info, 80)}</p>
        <button
          className="border-white  order-2 border-2 px-4 py-1 mb-4 md:py-2 text-[10px] lg:text-sm rounded-3xl font-semibold tracking-widest hover:text-subtitleSecondary hover:border-subtitleSecondary"
          onClick={(e) => handleSeeMoreEvents(e)}
        >
          Ver más
        </button>
      </div>
    </div>
  );
};

export default EventItem;
