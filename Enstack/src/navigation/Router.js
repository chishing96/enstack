import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import Loading from "../components/Loading";
import useAuth from "../hooks/useAuth";

import AppStack from "./AppStack";
import AuthStack from "./AuthStack";

export const Router = () => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return <Loading />;
  }
  return (
    <NavigationContainer>
      {isAuthenticated ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};
