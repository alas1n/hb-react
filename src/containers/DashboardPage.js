import React, { Component } from 'react';

// ICONS :

// COMPONENTS:
import LogoComponent from './../components/LogoComponent';
import SearchBarComponent from './../components/SearchBarComponent';
import ProfileComponent_header from '../components/ProfileComponent_header';
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
            <NavigationListComponent />
          </nav>
          <section className="dashboard-sec">Dashboard</section>
        </div>
      </>
    );
  }
}

export default DashboardPage;
