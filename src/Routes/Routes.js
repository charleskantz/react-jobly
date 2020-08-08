import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "../Home/Home";
import Companies from "../Companies/Companies";
import Company from "../Company/Company";
import Login from "../Account/Login";
import Profile from "../Account/Profile";
import SecureRoute from './SecureRoute';
import Signup from "../Account/Signup";
import JobList from "../Jobs/JobList";

// handles all routing for our app
function Routes({ login, signup }) {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route exact path="/login">
        <Login login={login} />
      </Route>

      <Route exact path="/signup">
        <Signup signup={signup} />
      </Route>

      <SecureRoute exact path="/companies">
        <Companies />
      </SecureRoute>

      <SecureRoute exact path="/jobs">
        <JobList />
      </SecureRoute>

      <SecureRoute exact path="/companies/:handle">
        <Company />
      </SecureRoute>

      <SecureRoute exact path="/profile">
        <Profile />
      </SecureRoute>

      <Redirect to="/" />
    </Switch>
  );
}

export default Routes;
