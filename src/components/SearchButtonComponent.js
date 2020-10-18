import React from 'react';

// ICONS:
import { MdKeyboardArrowDown } from 'react-icons/md';
import { AiOutlinePlusSquare } from 'react-icons/ai';

const SearchButtonComponent = ({ ...props }) => {
  return (
    <div className="searchbar-button-wrapper" style={props.style}>
      <button className="searchbar-button-wrapper_button">
        <AiOutlinePlusSquare className="searchbar-button-wrapper_icon-plus" />
        New
        <MdKeyboardArrowDown className="searchbar-button-wrapper_icon-down" />
      </button>
    </div>
  );
};

export default SearchButtonComponent;
