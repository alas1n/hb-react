import React from 'react';

// PHOTOS:
import ProfileImage from './../assets/Profile-image.jpg';
// ICONS:
import { MdKeyboardArrowDown } from 'react-icons/md';
import { IoIosNotifications } from 'react-icons/io';

const ProfileComponent_header = ({ ...props }) => {
  return (
    <div className="profile-wrapper-header" style={props.style}>
      <IoIosNotifications className="profile-wrapper-header_notif-icon" />
      <img className="profile-wrapper-header_pic" src={ProfileImage}></img>
      <div className="profile-wrapper-header_name-email">
        <p className="profile-wrapper-header_name-email-name">Mohammad Reza</p>
        <p className="profile-wrapper-header_name-email-mail">@mohamadreza</p>
      </div>
      <MdKeyboardArrowDown className="profile-wrapper-header_icon" />
    </div>
  );
};

export default ProfileComponent_header;
