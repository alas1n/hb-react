import React from 'react';

// PHOTOS:
import ProfileImage from './../assets/Profile-image.jpg';
// ICONS:
import { MdKeyboardArrowDown } from 'react-icons/md';
import { IoIosNotifications } from 'react-icons/io';

const ProfileComponent = ({ ...props }) => {
  return (
    <div className="profile-wrapper" style={props.style}>
      <IoIosNotifications className="profile-wrapper_notif-icon" />
      <img className="profile-wrapper_pic" src={ProfileImage}></img>
      <div className="profile-wrapper_name-email">
        <p className="profile-wrapper_name-email-name">Mohammad Reza</p>
        <p className="profile-wrapper_name-email-mail">@mohamadreza</p>
      </div>
      <MdKeyboardArrowDown className="profile-wrapper_icon" />
    </div>
  );
};

export default ProfileComponent;
