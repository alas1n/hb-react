import React from 'react';

// COMPONENTS:
import SearchButtonComponent from './SearchButtonComponent';

// ICONS:
import { FiSearch } from 'react-icons/fi';

const SearchBarComponent = ({ ...props }) => {
  return (
    <div className="searchbar-wrapper" style={props.style}>
      <FiSearch className="searchbar-wrapper_icon" />
      <input
        className="searchbar-wrapper_input"
        type="text"
        placeholder="Search"
      ></input>
      <SearchButtonComponent />
    </div>
  );
};

export default SearchBarComponent;
