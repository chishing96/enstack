import React from "react";
import { Router } from "./src/navigation/Router";
import { AuthProvider } from "./src/contexts/AuthContext";

export default function App() {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
}
