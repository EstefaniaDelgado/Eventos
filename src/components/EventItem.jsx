import { useState } from 'react';
import HeartFilled from '../assets/heartFilled.png';
import HeartUnfilled from '../assets/heartUnfilled.png';
import { useEffect } from 'react';
import useLikedEvents from '../Hooks/useLikedEvents';

const EventItem = ({ name, id, info, img, onEventClick }) => {
  

  const{isLiked,toogleLiked}=useLikedEvents(id)

  // const [isLiked, setIsLiked] = useState(checkedLike());

  useEffect(() => {}, []);

  const handleSeeMoreEvents = (e) => {
    e.stopPropagation();
    onEventClick(id);
  };

  const handleClickLiked = () => {
   toogleLiked()
  };

  return (
    <div /* onClick={() => console.log('Padre cliqueado')} */>
      <div
        style={{
          position: 'relative',
          backgroundColor: 'yellow',
          width: '200px',
          margin: 'auto',
        }}
      >
        <img
          src={img}
          alt=""
          style={{ width: '100%', display: 'block' }}
          height={200}
        />
        <img
          src={!isLiked ? HeartUnfilled : HeartFilled}
          style={{
            position: 'absolute',
            top: '10px',
            left: '10px',
            cursor: 'pointer',
            borderColor: 'red',
          }}
          alt="Corazón relleno"
          width={20}
          onClick={handleClickLiked}
        />
      </div>
      <h3>{name}</h3>
      <p>{info}</p>
      <button onClick={(e) => handleSeeMoreEvents(e)}>Ver más</button>
    </div>
  );
};

export default EventItem;
