import React from "react";
import { SafeAreaView } from "react-native";
import { Router } from "./src/navigation/Router";
import { AuthProvider } from "./src/contexts/AuthContext";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <AuthProvider>
        <Router />
      </AuthProvider>
    </SafeAreaView>
  );
}
