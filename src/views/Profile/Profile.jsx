import React from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import styles from './Profile.module.css';


const Profile = () => {
  const { pathname } = useLocation();
  
  const navigate = useNavigate()

  const handleTapOnClick = (path) => {
    navigate(`/profile${path}`)
  };

  return (
    <div>
      <Link to={'/'}>Inicio</Link>
      <div className={styles.container}>
      <span
          className={`${
            pathname.includes('/my-info') ? styles.active : ''
          } ${styles.tab}`}
          onClick={()=>handleTapOnClick('/my-info')}
        >
          Mi Información
        </span>
        <span
          className={`${
            pathname.includes('/liked-events') ? styles.active : ''
          } ${styles.tab}`}
          onClick={()=>handleTapOnClick('/liked-events')}
        >
          Mis Eventos Favoritos
        </span>
      </div>
      <Outlet />
    </div>
  );
};

export default Profile;
