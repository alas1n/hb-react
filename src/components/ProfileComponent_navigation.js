import React from 'react';

// PHOTOS:
import ProfileImage from './../assets/Profile-image.jpg';
// ICONS:

const ProfileComponent_navigation = ({ ...props }) => {
  return (
    <div className="profile-wrapper-navigation" style={props.style}>
      <img className="profile-wrapper-navigation_pic" src={ProfileImage}></img>
      <div className="profile-wrapper-navigation_name-email">
        <p className="profile-wrapper-navigation_name-email-name">
          Mohammad Reza
        </p>
        <p className="profile-wrapper-navigation_name-email-mail">
          @mohamadreza
        </p>
      </div>
    </div>
  );
};

export default ProfileComponent_navigation;
