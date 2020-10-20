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
      <NavLink
        to="/DashboardPage/Title_Screening"
        className="nvigation-wrapper_overview"
      >
        <AiOutlinePicLeft className="nvigation-wrapper_icon" />
        Title Screening
      </NavLink>
      <NavLink
        to="/DashboardPage/Full_Text_Screening"
        className="nvigation-wrapper_overview"
      >
        <GrTextAlignFull className="nvigation-wrapper_icon" />
        Full Text Screening
      </NavLink>
      <NavLink
        to="/DashboardPage/Data_Entry"
        className="nvigation-wrapper_overview"
      >
        <HiOutlineDocumentDownload className="nvigation-wrapper_icon" />
        Data Entry
      </NavLink>
      <NavLink
        to="/DashboardPage/Analysis"
        className="nvigation-wrapper_overview"
      >
        <RiBarChartBoxLine className="nvigation-wrapper_icon" />
        Analysis
      </NavLink>
      <hr className="nvigation-wrapper_divider" />
      <NavLink
        to="/DashboardPage/Setting"
        className="nvigation-wrapper_overview"
      >
        <RiSettings5Line className="nvigation-wrapper_icon" />
        Setting
      </NavLink>

      <button
        className="nvigation-wrapper_last-item buttom"
        onClick={() => {
          console.log('clicked');
          props.SidebarController();
          console.log(props.state);
          // console.log('props.state');
          // console.log(props.state);
          // console.log('props.func/');
          // console.log(props.func);
        }}
        // href="#"
        // to="/DashboardPage/Collaps_Sidebar"
      >
        <FaAngleDoubleLeft className="nvigation-wrapper_icon " />
        Collaps Sidebar
      </button>
    </div>
  );
};

export default NavigationListComponent;
