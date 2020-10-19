import React, { Component } from 'react';

// COMPONENTS:
import LogoComponent from './../components/LogoComponent';
import SearchBarComponent from './../components/SearchBarComponent';
import SearchButtonComponent from './../components/SearchButtonComponent';
import ProfileComponent_header from '../components/ProfileComponent_header';
import ProfileComponent_navigation from '../components/ProfileComponent_navigation';

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
          </nav>
          <section className="dashboard-sec">Dashboard</section>
        </div>
      </>
    );
  }
}

export default DashboardPage;
