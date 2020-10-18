import React from 'react';
import hubmeta_logo from './../assets/logo.png';

function LogoComponent({ ...props }) {
  return (
    <div className="logo-container" style={props.style}>
      <img className="logo-container_image" src={hubmeta_logo}></img>
      <p className="logo-container_name">HubMeta</p>
    </div>
  );
}

export default LogoComponent;
