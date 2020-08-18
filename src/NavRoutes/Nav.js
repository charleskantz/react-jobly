import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import AuthContext from '../AuthContext';
import styled from '@emotion/styled';

const NavBar = styled.nav`
  background-color: #fff;
  border-bottom: .0625rem solid rgba(33,37,44,.1);
  display: flex;
  justify-content: space-between;
`;

const StyledNav = styled.ul`
  padding: 0 2rem;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;

  & > a {
    display: flex;
    color: #999;
    font-size: .75rem;
    text-transform: uppercase;
    text-decoration: none;
    text-rendering: optimizelegibility;
    letter-spacing: .4px;
    height: 3.5rem;
    line-height: 3.5rem;
    padding: 0 .9375rem;
    white-space: nowrap;

    &:hover {
      background-color: #f9f9f9;
      color: grey;
    }
  }
`;



/** Nav - Top level nav
 *
 * - logout – Prop: handles user logout
 */
function Nav({ logout }) {

  const { userInfo } = useContext(AuthContext);

  /** If a user is logged in, show main links,
   *  otherwise show login.
   */
  return (
    <NavBar>
      <StyledNav>
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
          : <>
              <NavLink to="/login">Log In</NavLink>
              <NavLink to="/signup">Sign Up</NavLink>
            </>
        }
      </StyledNav>
    </NavBar>
  )
}

export default Nav;