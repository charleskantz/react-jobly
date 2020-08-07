import React, { useEffect, useState } from 'react';
import Nav from "./Routes/Nav";
import Routes from "./Routes/Routes";
import { BrowserRouter } from 'react-router-dom';
import AuthContext from './AuthContext';
import useLocalStorage from './hooks/useLocalStorage'
import { decode } from 'jsonwebtoken';
import JoblyApi from './api/JoblyApi';
import './App.css';

// token keyname for localStorage
export const TOKEN_STORAGE_ID = 'token';

/** Jobly
 *
 * - userInfo: user obj from API, primary way to see if user is logged in.
 *   Passed with Context throughout app.
 *
 * - token: for logged in users. Required for most API calls.
 *   Received from localStorage if present, and synced w/useLocalStorage hook
 */
const App = () => {

  const [token, setToken] = useLocalStorage(TOKEN_STORAGE_ID);
  const [userInfo, setUserInfo] = useState(null);

  // check if local storage already has token, update state with token
  useEffect(() => {
    async function getLoggedInUser() {
      if (token) {
        try {
          const { username } = decode(token);
          let currentUser = await JoblyApi.getUser(username);
          setUserInfo(currentUser);
        } catch (err) {
          setUserInfo(null);
        }
      }
    }
    getLoggedInUser();
  }, [token]);

  return (
    <div className="App">
      <BrowserRouter>
        <AuthContext.Provider value={{ userInfo, setUserInfo }}>
          <Nav />
          <Routes />
        </AuthContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
