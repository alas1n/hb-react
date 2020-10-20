import React from 'react';
import { NavLink } from 'react-router-dom';
// COMPONENTS :
import ProfileComponent_navigation from './../components/ProfileComponent_navigation';

// PHOTOS:
// ICONS:
import { RiLayoutGridLine } from 'react-icons/ri';
import { RiBook2Line } from 'react-icons/ri';
import { AiOutlinePicLeft } from 'react-icons/ai';
import { GrTextAlignFull } from 'react-icons/gr';
import { HiOutlineDocumentDownload } from 'react-icons/hi';
import { RiBarChartBoxLine } from 'react-icons/ri';
import { RiSettings5Line } from 'react-icons/ri';
import { FaAngleDoubleLeft } from 'react-icons/fa';

const NavigationListComponent = ({ ...props }) => {
  return (
    <div className="nvigation-wrapper" style={props.style}>
      <ProfileComponent_navigation />
      <NavLink
        to="/DashboardPage/OverView"
        className="nvigation-wrapper_overview"
      >
        <RiLayoutGridLine className="nvigation-wrapper_icon" />
        Overview
      </NavLink>
      <NavLink
        to="/DashboardPage/Import_Article"
        className="nvigation-wrapper_overview"
      >
        <RiBook2Line className="nvigation-wrapper_icon" />
        Import Article
      </NavLink>
      <a className="nvigation-wrapper_title-screening" href="#title-screening">
        <AiOutlinePicLeft className="nvigation-wrapper_icon" />
        Title Screening
      </a>
      <a
        className="nvigation-wrapper_full-text-screening"
        href="#full-text-screening"
      >
        <GrTextAlignFull className="nvigation-wrapper_icon" />
        Full Text Screening
      </a>
      <a className="nvigation-wrapper_data-entry" href="#data-entry">
        <HiOutlineDocumentDownload className="nvigation-wrapper_icon" />
        Data Entry
      </a>
      <a className="nvigation-wrapper_analysis" href="#analysis">
        <RiBarChartBoxLine className="nvigation-wrapper_icon" />
        Analysis
      </a>
      <hr className="nvigation-wrapper_divider" />
      <a className="nvigation-wrapper_setting" href="#setting">
        <RiSettings5Line className="nvigation-wrapper_icon" />
        Setting
      </a>
      <a
        className="nvigation-wrapper_last-item buttom"
        href="#close-navigation"
      >
        <FaAngleDoubleLeft className="nvigation-wrapper_icon " />
        Collaps Sidebar
      </a>
    </div>
  );
};

export default NavigationListComponent;
