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
    <div ref={ref}>
      <input
        type="text"
        placeholder="Busca tu evento..."
        onChange={handleInputChange}
        value={search}
        onKeyDown={handleSearchBtn}
      />
    </div>
  );
});

Navbar.displayName="Navbar"

export default Navbar;
