import React, { createContext, useState } from "react";

export const FavoriteContext = createContext();

export const FavoriteProvider = ({ children }) => {
  const [favoriteItems, setFavoriteItems] = useState([]);

  const addToFavorites = (item) => {
    setFavoriteItems([...favoriteItems, item]);
  };

  const removeFromFavorites = (itemId) => {
    const updatedFavorites = favoriteItems.filter(
      (item) => item.product_id !== itemId
    );
    setFavoriteItems(updatedFavorites);
  };

  return (
    <FavoriteContext.Provider
      value={{ favoriteItems, addToFavorites, removeFromFavorites }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};
