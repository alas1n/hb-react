import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import LoginPage from './../containers/LoginPage';
import TestPage from './../containers/TestPage';
import DashboardPage from './../containers/DashboardPage';

export default function AppRouter() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/LoginPage">
            <LoginPage />
          </Route>
          <Route path="/TestPage">
            <TestPage />
          </Route>
          <Route path="/DashboardPage">
            <DashboardPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
