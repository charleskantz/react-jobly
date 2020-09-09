import React, { useState, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import AuthContext from '../AuthContext';
import styled from '@emotion/styled';
import { faMicroblog } from '@fortawesome/free-brands-svg-icons';
import { faUserCircle, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import IconSpan from '../Common/IconSpan';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavBar = styled.nav`
  background-color: #fff;
  border-bottom: .0625rem solid rgba(33,37,44,.1);

`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  position: relative;
  height: 56px;
  & > a {
    display: flex;
    text-decoration: none;
  }

  @media (min-width: 768px) {
    width: 734px;
  }
`;

const StyledNavItems = styled.ul`
  position: absolute;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: flex-end;
  z-index: 100;
  background: white;
  border: ${props => props.menu
    ? '.0625rem solid rgba(33,37,44,.1)' : 'none'};
  text-align: right;
  top: 0;
  right: 0;

  & > li {
    width: 100%;
    text-align: right;
    display: ${props => props.menu
    ? 'block' : 'none'};

  }

  @media (min-width: 768px) {
    flex-direction: row;
    border: none;
    & > li {
      display: block;
    }
  }

  & > li > a {
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

const BurgerMenu = styled.span`
  display: flex;
  font-size: .75rem;
  color: #999;
  height: 3.5rem;
  line-height: 3.5rem;
  padding: 0 .9375rem;
  white-space: nowrap;
  align-items: center;

  &:hover {
    background-color: #f9f9f9;
    color: grey;
    cursor: pointer;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

const ModalOverlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0,0,0,.2);
  z-index: 50;
  cursor: pointer;
`;

/** Nav - Top level nav
 *
 * - logout – Prop: handles user logout
 */
function Nav({ logout }) {

  const { userInfo } = useContext(AuthContext);
  const [menu, setMenu] = useState(false);

  const handleMenu = target => {
    // only toggle menu from links when menu is already active
    if (target === 'li' && menu) { setMenu(menu => !menu); }

    // toggle menu if burger or modal are visible
    if (target === 'menu') {
      setMenu(menu => !menu);
    }
  }

  /** If a user is logged in, show main links,
   *  otherwise show login.
   */
  return (
    <>
      {menu && <ModalOverlay onClick={() => handleMenu('menu')}></ModalOverlay>}
      <NavBar>
        <FlexContainer>
          <NavLink exact to="/">
            <IconSpan padding="0 0.9375rem" iconSize="2x" text="Jobly" color="blue" image={faMicroblog} />
          </NavLink>
          <StyledNavItems menu={menu}>
            <BurgerMenu onClick={() => handleMenu('menu')} >
              <FontAwesomeIcon icon={menu ? faTimes : faBars} size="2x" />
            </BurgerMenu>
            {userInfo
              ? <>
                <li onClick={() => handleMenu('li')} >
                  <NavLink to="/companies">Companies</NavLink>
                </li>
                <li onClick={() => handleMenu('li')} >
                  <NavLink to="/jobs">Jobs</NavLink>
                </li>
                <li onClick={() => handleMenu('li')} >
                  <NavLink to="/profile">Profile</NavLink>
                </li>
                <li onClick={() => handleMenu('li')} >
                  <Link className="nav-link" to="/" onClick={logout}>
                    <IconSpan image={userInfo.photo_url || faUserCircle} iconSize="2x" size="36" text="Log Out" />
                  </Link>
                </li>
              </>
              : <>
                <li onClick={() => handleMenu('li')} >
                  <NavLink to="/login">Log In</NavLink>
                </li>
                <li onClick={() => handleMenu('li')} >
                  <NavLink to="/signup">Sign Up</NavLink>
                </li>
              </>
            }
          </StyledNavItems>
        </FlexContainer>
      </NavBar>
    </>
  )
}

export default Nav;


/*

        <StyledNavItems>
          {userInfo
            ? <>

              <NavLink to="/companies">Companies</NavLink>
              <NavLink to="/jobs">Jobs</NavLink>
              <NavLink to="/profile">Profile</NavLink>
              <Link className="nav-link" to="/" onClick={logout}>
                <IconSpan image={userInfo.photo_url || faUserCircle} iconSize="2x" size="36" text="Log Out" />
              </Link>
            </>
            : <>
              <NavLink to="/login">Log In</NavLink>
              <NavLink to="/signup">Sign Up</NavLink>
            </>
          }
        </StyledNavItems>

*/