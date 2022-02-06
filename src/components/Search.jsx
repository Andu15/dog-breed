import React, { useState } from 'react';
import { Icon } from '@iconify/react';

import '../styles/Search.css';

const Search = ({searchText, setSearchText ,handlerSearch}) => {

  return <div className="search-container">
    <input
      type="search"
      id="search"
      name="search"
      className="input-search"
      placeholder='Busca aquí...'
      onChange={(e) => setSearchText(e.target.value)}
      value={searchText}
    />
    <button
      className="icon-search"
      onClick={handlerSearch}
    >
      <Icon
        icon="fa-solid:search"
        color="#4c8a61"
        height="20"
        rotate={1}
      />
    </button>
  </div>;
};

export default Search;
