import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "../Home/Home";
import CompanyList from "../Companies/CompanyList";
import CompanyDetail from "../Companies/CompanyDetail";
import Login from "../Account/Login";
import Profile from "../Account/Profile";
import SecureRoute from './SecureRoute';
import Signup from "../Account/Signup";
import JobList from "../Jobs/JobList";

/** Routes - Handles URL routing.
 *  SecureRoute is HOC that checks for logged in user before allowing access
 * @param {login} prop: handles user login
 * @param {signup} prop: handles user signup
 */
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
        <CompanyList />
      </SecureRoute>

      <SecureRoute exact path="/jobs">
        <JobList />
      </SecureRoute>

      <SecureRoute exact path="/companies/:handle">
        <CompanyDetail />
      </SecureRoute>

      <SecureRoute exact path="/profile">
        <Profile />
      </SecureRoute>

      <Redirect to="/" />
    </Switch>
  );
}

export default Routes;
