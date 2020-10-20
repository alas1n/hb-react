import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// ICONS :

// COMPONENTS:
import LogoComponent from './../components/LogoComponent';
import SearchBarComponent from './../components/SearchBarComponent';
import ProfileComponent_header from '../components/ProfileComponent_header';
import NavigationListComponent from '../components/NavigationListComponent';

const OverView = () => {
  return <p>OverView</p>;
};

const Import_Article = () => {
  return <p>Import Article</p>;
};

class DashboardPage extends Component {
  render() {
    return (
      <>
        <Router>
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
            <section className="dashboard-sec">
              Dashboard
              <div>
                <Switch>
                  <Route path="/DashboardPage/OverView">
                    <OverView />
                  </Route>
                  <Route path="/DashboardPage/Import_Article">
                    <Import_Article />
                  </Route>
                </Switch>
              </div>
            </section>
          </div>
        </Router>
      </>
    );
  }
}

export default DashboardPage;
