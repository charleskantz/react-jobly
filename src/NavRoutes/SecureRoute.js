import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthContext from '../AuthContext';

/** SecureRoute - HOC for protecting routes.
 *  Checks for logged in user, if no user is logged in
 *  they will be redirected to home.
 *  @param {exact} exact: toggles exact route matching
 *  @param {string} path: path for route
 *  @param {React.FC} child: renders child component
 */
function SecureRoute({ exact, path, children }) {

  const { userInfo } = useContext(AuthContext);

  if (!userInfo) {
    return <Redirect to="/login" />;
  }

  return (
    <Route exact={exact} path={path}>
      {children}
    </Route>
  )
}

export default SecureRoute;