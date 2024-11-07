import { useState } from "react";
import EVENTS_LIKE from "../utils/contantsLocalstorage";


const checkedLike = (id) => {
    let storage = JSON.parse(localStorage.getItem(EVENTS_LIKE)) || [];
    return storage.includes(id);
  };

const useLikedEvents =(id)=>{

  const[isLiked, setIsLiked]=useState(checkedLike(id))


  const toogleLiked =()=>{
    let storage = JSON.parse(localStorage.getItem(EVENTS_LIKE)) || [];

    if (!storage.length) {
      storage.push(id);
      setIsLiked(!isLiked);
    } else {
      const isFind = storage.find((heart) => heart === id);
      if (isFind) {
        storage = storage.filter((heart) => heart !== isFind);
        setIsLiked(!isLiked);
      } else {
        storage.push(id);
        setIsLiked(!isLiked);
      }
    }

    localStorage.setItem(EVENTS_LIKE, JSON.stringify(storage));

  }

   
    return{
      isLiked, toogleLiked
    }
}

export default useLikedEvents;