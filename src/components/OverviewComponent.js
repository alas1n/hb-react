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
        <NavLink to="/DashboardPage/OverView/Comment">Comment</NavLink>
        <NavLink to="/DashboardPage/OverView/Decissions">Decissions</NavLink>
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
