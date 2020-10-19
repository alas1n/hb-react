import React from 'react';

// PHOTOS:
// ICONS:
import { RiLayoutGridLine } from 'react-icons/ri';
import { RiBook2Line } from 'react-icons/ri';
import { AiOutlinePicLeft } from 'react-icons/ai';
import { GrTextAlignFull } from 'react-icons/gr';
import { HiOutlineDocumentDownload } from 'react-icons/hi';
import { RiBarChartBoxLine } from 'react-icons/ri';
import { RiSettings5Line } from 'react-icons/ri';

const NavigationListComponent = ({ ...props }) => {
  return (
    <div className="nvigation-wrapper" style={props.style}>
      <a className="nvigation-wrapper_overview" href="#Overview">
        <RiLayoutGridLine className="nvigation-wrapper_icon" />
        Overview
      </a>
      <a className="nvigation-wrapper_import-acticles" href="#import-acticles">
        <RiBook2Line className="nvigation-wrapper_icon" />
        Import Article
      </a>
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
    </div>
  );
};

export default NavigationListComponent;
