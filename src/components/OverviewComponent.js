import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';

// ICONS:
import { AiOutlineRight } from 'react-icons/ai';
// COMPONENTS:
import DashboardHeaderComponent from './DashboardHeaderComponent';
const Comment = () => {
  return <p>Comment</p>;
};

const Decissions = () => {
  return <p>Decissions</p>;
};

class OverViewComponent extends Component {
  render() {
    return (
      <div>
        <DashboardHeaderComponent rootname3={'Activity'} />
        <header className="overview-component-header">
          <h1 className="overview-component-header_h1">Activity</h1>
          <hr className="overview-component-header_hr" />
          <div className="overview-component-header_navigator-wrapper">
            <NavLink
              to="/DashboardPage/OverView/Comment"
              className="navigator-wrapper_link"
              activeClassName="navigator-wrapper_link--active"
            >
              Comment
            </NavLink>
            <NavLink
              to="/DashboardPage/OverView/Decissions"
              className="navigator-wrapper_link"
              activeClassName="navigator-wrapper_link--active"
            >
              Decissions
            </NavLink>
            <NavLink
              to="/DashboardPage/OverView/Correlations"
              className="navigator-wrapper_link"
              activeClassName="navigator-wrapper_link--active"
            >
              Correlations
            </NavLink>
            <NavLink
              to="/DashboardPage/OverView/Papers"
              className="navigator-wrapper_link"
              activeClassName="navigator-wrapper_link--active"
            >
              Papers
            </NavLink>
            <NavLink
              to="/DashboardPage/OverView/Deduplication"
              className="navigator-wrapper_link"
              activeClassName="navigator-wrapper_link--active"
            >
              Deduplication
            </NavLink>
            <NavLink
              to="/DashboardPage/OverView/Team"
              className="navigator-wrapper_link"
              activeClassName="navigator-wrapper_link--active"
            >
              Team
            </NavLink>
          </div>
        </header>
        <Switch>
          <Route path="/DashboardPage/OverView/Comment">
            <Comment />
          </Route>
          <Route path="/DashboardPage/OverView/Decissions">
            <Decissions />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default OverViewComponent;
