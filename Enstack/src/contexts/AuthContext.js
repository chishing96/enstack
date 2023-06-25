import React, { createContext, useState } from "react";

// Create the AuthContext
const AuthContext = createContext();

// Create the AuthProvider component
const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Function to handle login
  const login = (username, password) => {
    // Simulating login with mock credentials
    // if (username === 'user' && password === 'password') {
    //   setIsAuthenticated(true);
    // } else {
    //   setIsAuthenticated(false);
    // }
    setIsAuthenticated(true);
  };

  // Function to handle logout
  const logout = () => {
    setIsAuthenticated(false);
  };

  // Value object to be provided through context
  const authContextValue = {
    isAuthenticated,
    login,
    logout,
  };

  // Provide the auth context value to its children
  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
