import React from "react";
import { SafeAreaView } from "react-native";
import { Router } from "./src/navigation/Router";
import { AuthProvider } from "./src/contexts/AuthContext";
import { CartProvider } from "./src/contexts/CartContext";
import { FavoriteProvider } from "./src/contexts/FavoritesContext";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <AuthProvider>
        <CartProvider>
          <FavoriteProvider>
            <Router />
          </FavoriteProvider>
        </CartProvider>
      </AuthProvider>
    </SafeAreaView>
  );
}
