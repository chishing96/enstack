import React, { useContext } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Button,
} from "react-native";
import { FavoriteContext } from "../contexts/FavoritesContext";
import { CartContext } from "../contexts/CartContext";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";

const FavoritesScreen = () => {
  const { favoriteItems, removeFromFavorites } = useContext(FavoriteContext);
  const { addToCart, addAllToCart } = useContext(CartContext);

  const handleAddAllToCart = () => {
    addAllToCart(favoriteItems);
    Alert.alert("Added all items to the cart");
  };

  const handleAddToCart = (item) => {
    addToCart(item);
    Alert.alert(`Item ${item.name} has been added to cart.`);
  };

  if (favoriteItems.length === 0) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>No favorites as of the moment</Text>
      </View>
    );
  }

  const renderFavoriteItem = ({ item }) => (
    <View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginBottom: 16,
          justifyContent: "space-evenly",
          height: 150,
        }}
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
        </View>
        <View
          style={{
            justifyContent: "space-around",
            width: 30,
            alignItems: "center",
            height: "100%",
          }}
        >
          <TouchableOpacity
            onPress={() => removeFromFavorites(item.product_id)}
          >
            <AntDesign name="closecircleo" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.favoriteItemButton}
            onPress={() => handleAddToCart(item)}
          >
            <MaterialIcons name="shopping-bag" size={24} color="black" />
          </TouchableOpacity>
        </View>
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
      <View>
        <View>
          <TouchableOpacity
            style={{
              height: 50,
              backgroundColor: "#28282B",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 5,
            }}
            onPress={() => handleAddAllToCart()}
          >
            <Text style={{ color: "white", fontWeight: "400", fontSize: 18 }}>
              Add all to cart
            </Text>
          </TouchableOpacity>
        </View>
      </View>
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
    backgroundColor: "gray",
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    width: 30,
    borderRadius: 5,
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
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    width: "100%",
    height: 50,
  },
  removeFromFavoritesButtonText: {
    fontSize: 14,
    color: "white",
  },
});

export default FavoritesScreen;
