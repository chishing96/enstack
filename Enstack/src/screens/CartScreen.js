import React, { useContext } from "react";
import {
  View,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { CartContext } from "../contexts/CartContext";
import { Ionicons } from "@expo/vector-icons";

const CartScreen = () => {
  const { cartItems, removeFromCart, incrementQuantity, decrementQuantity } =
    useContext(CartContext);

  const renderItem = ({ item }) => {
    return (
      <View style={styles.itemContainer}>
        <Image
          source={item.main_image}
          style={styles.image}
          resizeMode="cover"
        />
        <View style={styles.itemDetailsContainer}>
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.itemPrice}>{item.price}</Text>
          <View style={styles.quantityContainer}>
            <TouchableOpacity
              onPress={() => decrementQuantity(item.product_id)}
            >
              <Ionicons name="remove-circle" size={24} color="black" />
            </TouchableOpacity>
            <Text style={styles.quantityText}>{item.quantity}</Text>
            <TouchableOpacity
              onPress={() => incrementQuantity(item.product_id)}
            >
              <Ionicons name="add-circle" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          style={styles.removeButton}
          onPress={() => removeFromCart(item.product_id)}
        >
          <Text style={styles.removeButtonText}>Remove</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={cartItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.product_id.toString()}
        contentContainerStyle={styles.flatlistContentContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#EAEAEA",
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  itemDetailsContainer: {
    flex: 1,
    marginLeft: 16,
  },
  itemName: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  itemPrice: {
    fontSize: 14,
    color: "#888888",
    marginBottom: 8,
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  quantityText: {
    marginHorizontal: 8,
  },
  removeButton: {
    marginLeft: 16,
  },
  removeButtonText: {
    color: "red",
  },
  flatlistContentContainer: {
    paddingBottom: 16,
  },
});

export default CartScreen;
