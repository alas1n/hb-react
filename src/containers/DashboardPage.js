import React, { Component } from 'react';

// ICONS :
import { FaAngleDoubleLeft } from 'react-icons/fa';

// COMPONENTS:
import LogoComponent from './../components/LogoComponent';
import SearchBarComponent from './../components/SearchBarComponent';
import SearchButtonComponent from './../components/SearchButtonComponent';
import ProfileComponent_header from '../components/ProfileComponent_header';
import ProfileComponent_navigation from '../components/ProfileComponent_navigation';
import NavigationListComponent from '../components/NavigationListComponent';

class DashboardPage extends Component {
  render() {
    return (
      <>
        <header className="dashboard-header">
          <LogoComponent
            className="dashboard-header_logo"
            style={{ 'margin-left': '6.5rem', display: 'inline-block' }}
          />
          <SearchBarComponent style={{}} />
          <ProfileComponent_header />
        </header>
        <div className="page-containter">
          <nav className="dashboard-navigation">
            <ProfileComponent_navigation />
            <NavigationListComponent />
            <a
              className="dashboard-navigation_last-item"
              href="#close-navigation"
            >
              <FaAngleDoubleLeft className="dashboard-navigation_icon " />
              Collaps Sidebar
            </a>
          </nav>
          <section className="dashboard-sec">Dashboard</section>
        </div>
      </>
    );
  }
}

export default DashboardPage;
