import React, { Component } from 'react';

// COMPONENTS:
import LogoComponent from './../components/LogoComponent';
import SearchBarComponent from './../components/SearchBarComponent';
import SearchButtonComponent from './../components/SearchButtonComponent';
import ProfileComponent from './../components/ProfileComponent';

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
          <SearchButtonComponent />
          <ProfileComponent />
        </header>
        <div className="page-containter">
          <nav className="dashboard-navigation">nav</nav>
          <section className="dashboard-sec">Dashboard</section>
        </div>
      </>
    );
  }
}

export default DashboardPage;
