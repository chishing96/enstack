import React, { useContext } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { FavoriteContext } from "../contexts/FavoritesContext";
import { CartContext } from "../contexts/CartContext";

const FavoritesScreen = () => {
  const { favoriteItems, removeFromFavorites } = useContext(FavoriteContext);
  const { addToCart } = useContext(CartContext);
  const handleAddToCart = (item) => {
    addToCart(item);
    Alert.alert(`Item ${item.name} has been added to cart.`);
  };
  const renderFavoriteItem = ({ item }) => (
    <View
      style={{ flexDirection: "row", alignItems: "center", marginBottom: 16 }}
    >
      <Image
        source={item.main_image}
        style={{ width: 100, height: 100, borderRadius: 10, marginRight: 16 }}
      />
      <View>
        <Text style={{ fontSize: 16, fontWeight: "bold", marginBottom: 8 }}>
          {item.name}
        </Text>
        <Text style={{ fontSize: 14, marginBottom: 8 }}>${item.price}</Text>
        <TouchableOpacity
          style={styles.favoriteItemButton}
          onPress={() => handleAddToCart(item)}
        >
          <Text style={styles.favoriteItemButtonText}>Add to Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "red",
            paddingVertical: 8,
            paddingHorizontal: 12,
            borderRadius: 8,
          }}
          onPress={() => removeFromFavorites(item.product_id)}
        >
          <Text style={{ color: "white" }}>Remove from Favorites</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <FlatList
        data={favoriteItems}
        renderItem={renderFavoriteItem}
        keyExtractor={(item) => item.product_id.toString()}
        contentContainerStyle={{ paddingBottom: 16 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  favoriteItemContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  favoriteItemImage: {
    width: 80,
    height: 80,
    marginRight: 16,
    borderRadius: 8,
  },
  favoriteItemName: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  favoriteItemPrice: {
    fontSize: 14,
    marginBottom: 8,
  },
  favoriteItemButton: {
    backgroundColor: "green",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginRight: 8,
  },
  favoriteItemButtonText: {
    fontSize: 14,
    color: "white",
  },
  removeFromFavoritesButton: {
    backgroundColor: "red",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  removeFromFavoritesButtonText: {
    fontSize: 14,
    color: "white",
  },
});

export default FavoritesScreen;
