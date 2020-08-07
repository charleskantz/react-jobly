import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "../Home/Home";
import Companies from "../Companies/Companies";
import Company from "../Company/Company";
import Jobs from "../Jobs/Jobs";
import Login from "../Account/Login";
import Profile from "../Account/Profile";
import SecureRoute from './SecureRoute';

// handles all routing for our app
function Routes({ userInfo }) {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route exact path="/login">
        <Login />
      </Route>

      <SecureRoute exact path="/companies">
        <Companies />
      </SecureRoute>

      <SecureRoute exact path="/jobs">
        <Jobs userInfo={userInfo} />
      </SecureRoute>

      <SecureRoute exact path="/companies/:handle">
        <Company userInfo={userInfo} />
      </SecureRoute>

      <SecureRoute exact path="/profile">
        <Profile userInfo={userInfo} />
      </SecureRoute>

      <Redirect to="/" />
    </Switch>
  );
}

export default Routes;
