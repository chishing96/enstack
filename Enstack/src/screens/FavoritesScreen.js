import React, { useContext } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { FavoriteContext } from "../contexts/FavoritesContext";

const FavoritesScreen = () => {
  const { favoriteItems, removeFromFavorites } = useContext(FavoriteContext);

  const removeItem = (itemId) => {
    removeFromFavorites(itemId);
  };

  const addAllToCart = () => {
    // Call addToCart function from CartContext for each favorite item
  };

  return (
    <View>
      {/* List of favorite items */}
      {favoriteItems.map((item) => (
        <View key={item.id}>
          {/* Display item image, name, and price */}
          <TouchableOpacity onPress={() => removeItem(item.id)}>
            {/* Remove button/icon */}
          </TouchableOpacity>
        </View>
      ))}
      <TouchableOpacity onPress={addAllToCart}>
        {/* "Add all favorites to my cart" button */}
      </TouchableOpacity>
    </View>
  );
};

export default FavoritesScreen;
