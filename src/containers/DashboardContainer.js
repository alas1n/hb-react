import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// COMPONENTS:
import OverViewComponent from './../components/OverviewComponent';
// const OverView = () => {
//   return <p>OverView</p>;
// };

const Import_Article = () => {
  return <p>Import Article</p>;
};

class DashboardContainer extends Component {
  render() {
    return (
      <div className="dashboard-container">
        <Switch>
          <Route path="/DashboardPage/OverView">
            <OverViewComponent />
          </Route>
          <Route path="/DashboardPage/Import_Article">
            <Import_Article />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default DashboardContainer;
