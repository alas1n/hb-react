import React, { Component, setState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// ICONS :

// COMPONENTS:
import LogoComponent from './../components/LogoComponent';
import SearchBarComponent from './../components/SearchBarComponent';
import ProfileComponent_header from '../components/ProfileComponent_header';
import NavigationListComponent from '../components/NavigationListComponent';

// CONTAINERS:
import DashboardContainer from './DashboardContainer';

class DashboardPage extends Component {
  constructor(props) {
    super(props);
    this.SidebarController = this.SidebarController.bind(this);
    this.state = { hideSidebar: true };
  }

  SidebarController() {
    this.setState({ hideSidebar: !this.state.hideSidebar });
    // console.log(this.state);
  }
  render() {
    return (
      <>
        <header className="dashboard-header">
          <div className="dashboard-header_logo">
            <LogoComponent />
          </div>
          <div className="dashboard-header_search-component">
            <SearchBarComponent />
          </div>
          <ProfileComponent_header />
        </header>
        <div className="page-containter">
          <nav className="dashboard-navigation">
            <NavigationListComponent
              // props={(fnc:this.SidebarController, this.state)}
              state={this.state}
              SidebarController={this.SidebarController}
            />
          </nav>
          <section className="dashboard-sec">
            <hr className="dashboard-sec_divider" />
            <DashboardContainer />
          </section>
        </div>
      </>
    );
  }
}

export default DashboardPage;
