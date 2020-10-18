import React from 'react';

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
    </div>
  );
};

export default SearchBarComponent;
