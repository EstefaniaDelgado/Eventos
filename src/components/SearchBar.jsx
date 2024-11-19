import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react';

const SearchBar = forwardRef(({ onSearchEvent }, ref) => {
  const [search, setSearch] = useState('');
 
  useImperativeHandle(ref, ()=>({
    search,
    setSearch
  }))
  

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSearchBtn = (e) => {
    if (e.key === 'Enter') {
      onSearchEvent(search);
      setSearch('');
    }
  };


  return (
    <div ref={ref} className='mt-8 relative  py-10'>
       <h2 className="absolute top-0 right-1/2 transform translate-x-1/2  text-5xl font-extrabold text-gray-900 md:text-6xl lg:text-8xl xl:text-9xl">
         EVENTS
        </h2>
     <div className='relative z-50'>
     <input
        type="text"
        placeholder="Busca tu evento..."
        className="block mx-auto bg-transparent border-b-2 border-slate-900"
        onChange={handleInputChange}
        value={search}
        onKeyDown={handleSearchBtn}
      />
     </div>
    </div>
  );
});

// Navbar.displayName="Navbar"

export default SearchBar;
