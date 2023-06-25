import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const useAuth = () => {
  const { isAuthenticated, login, logout } = useContext(AuthContext);

  return { isAuthenticated, login, logout };
};

export default useAuth;
