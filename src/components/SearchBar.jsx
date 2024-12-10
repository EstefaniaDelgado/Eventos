import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react';

const SearchBar = forwardRef(({ onSearchEvent }, ref) => {
  const [search, setSearch] = useState('');

  useImperativeHandle(ref, ()=>({
    search,
    setSearch
  }))
  

  // const handleInputChange = (e) => {
  //   setSearch(e.target.value);
  // };

  const handleSearchBtn = (e) => {
    const searchTerm = e.target.value;
    setSearch(searchTerm);
    // // if (e.key === 'Enter') {
    // //   onSearchEvent(search);
    // //   setSearch('');
    // // } 
   onSearchEvent(searchTerm);
    // setSearch('');
  };


  return (
    <div ref={ref} className='relative mt-10 pt-7 lg:pt-14 xl:pt-20'>
       <h2 className="absolute top-0 right-1/2 transform translate-x-1/2  text-6xl font-extrabold text-gray-900 md:text-6xl lg:text-8xl xl:text-9xl">
         EVENTS
        </h2>
     <div className='relative z-50'>
     <input
        type="text"
        placeholder="[ Busca tu evento..]"
         className="font-title text-xl block mx-auto bg-transparent border-b-2 border-subtitlePrimary focus:outline-none focus:border-white caret-subtitlePrimary placeholder-gray-500"
        onChange={handleSearchBtn}
        value={search}
        // onKeyDown={handleSearchBtn}
      />
     </div>
    </div>
  );
});

// Navbar.displayName="Navbar"

export default SearchBar;
