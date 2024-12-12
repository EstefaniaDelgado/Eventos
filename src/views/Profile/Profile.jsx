import React, { useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import styles from './Profile.module.css';


const Profile = () => {

  const[userData, setUserData]=useState({});
 
  const { pathname } = useLocation();
  
  const navigate = useNavigate();

  useEffect(()=>{
    const data= JSON.parse(localStorage.getItem('user_info'));
    if(Object.values(data).length){
      setUserData(data)
    }
  },[])

  const handleTapOnClick = (path) => {
    navigate(`/profile${path}`)
  };

  return (
    <div>
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
      <div className="relative  text-center pt-12 md:pt-16 xl:pt-24 flex flex-col justify-center items-center gap-5 md:flex-1">
        <h2 className="absolute top-2 text-7xl font-extrabold uppercase text-gray-900 md:text-8xl xl:text-9xl">
        {userData.name?.length ? userData?.name :  'PROFILE'}
        </h2>
        <div className="z-50">
          <h3 className="font-light z-50 text-lg md:text-xl font-title text-subtitlePrimary">
           [{userData.email?.length ? userData?.email : " Email "}]
          </h3>
          {/* <h2 className="z-50 font-semibold text-2xl md:text-3xl">
            Guardar tus eventos favoritos
          </h2> */}
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Profile;
