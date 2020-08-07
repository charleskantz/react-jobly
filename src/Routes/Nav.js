import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import AuthContext from '../AuthContext';

// navigation at top of page
function Nav({ logout }) {
  const { userInfo } = useContext(AuthContext);

  /** If a user is logged in, show main links,
   *  otherwise show login.
   */

  return (
    <nav>
      {userInfo
        ? <>
            <NavLink exact to="/">Home</NavLink>
            <NavLink to="/companies">Companies</NavLink>
            <NavLink to="/jobs">Jobs</NavLink>
            <NavLink to="/profile">Profile</NavLink>
            <Link className="nav-link" to="/" onClick={logout}>
              Log out {userInfo.first_name || userInfo.username}
            </Link>
          </>
        : <NavLink to="/login">LogIn</NavLink>}
    </nav>
  )
}

export default Nav;