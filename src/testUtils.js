import React from "react";
import AuthContext from "./AuthContext";

// mock of context for testing purposes

const demoUser = {
  username: "testuser",
  first_name: "testfirst",
  last_name: "testlast",
  email: "test@test.net",
  photo_url: null,
  jobs: ['jobone', 'jobtwo', 'jobthree']
};

const AuthProvider = ({ children, userInfo = demoUser }) => (
  <AuthContext.Provider value={{userInfo}}>
    {children}
  </AuthContext.Provider>
);

export { AuthProvider };
