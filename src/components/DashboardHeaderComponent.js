import React from 'react';
// ICONS:
import { AiOutlineRight } from 'react-icons/ai';

const DashboardHeaderComponent = ({ rootname3 }) => {
  return (
    <div className="dashboard-header-component">
      <p className="dashboard-header-component_root1">Project Name</p>
      <AiOutlineRight className="dashboard-header-component_arrow" />
      <p className="dashboard-header-component_root2">Overveiw</p>
      <AiOutlineRight className="dashboard-header-component_arrow" />
      <p className="dashboard-header-component_root3"> {rootname3} </p>
    </div>
  );
};

export default DashboardHeaderComponent;
