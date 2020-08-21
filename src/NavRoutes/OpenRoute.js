import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthContext from '../AuthContext';

/** OpenRoute - HOC for better UX
 *  Checks for logged in user, if user is logged in
 *  they will be redirected to /companies.
 *  @param {exact} exact: toggles exact route matching
 *  @param {string} path: path for route
 *  @param {React.FC} child: renders child component
 */
function OpenRoute({ exact, path, children }) {

  const { userInfo } = useContext(AuthContext);

  if (userInfo) {
    return <Redirect to="/companies" />;
  }

  return (
    <Route exact={exact} path={path}>
      {children}
    </Route>
  )
}

export default OpenRoute;