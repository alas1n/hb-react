import React from 'react';

function LoginOptionsButton({ icon }) {
  return (
    <button className="login-options-button">
      <img className="login-options-button_icon" src={icon}></img>
    </button>
  );
}

export default LoginOptionsButton;
