import React from "react";
import { Router } from "./src/navigation/Router";
import { AuthProvider } from "./src/contexts/AuthContext";
import { CartProvider } from "./src/contexts/CartContext";
import { FavoriteProvider } from "./src/contexts/FavoritesContext";

export default function App() {
  return (
    <AuthProvider>
      <FavoriteProvider>
        <CartProvider>
          <Router />
        </CartProvider>
      </FavoriteProvider>
    </AuthProvider>
  );
}
