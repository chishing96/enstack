import React, { useContext, useState } from "react";
import {
  View,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";
import { CartContext } from "../contexts/CartContext";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const CartScreen = () => {
  const navigation = useNavigation();
  const {
    cartItems,
    removeFromCart,
    incrementQuantity,
    decrementQuantity,
    getTotalPrice,
  } = useContext(CartContext);
  const [discountCode, setDiscountCode] = useState("");

  const totalPrice = getTotalPrice();

  const handleCheckout = () => {
    // Perform any necessary actions for the checkout process
    // Navigate to the success screen or perform other operations
    // ...
    console.log("Checkout button pressed");
    navigation.navigate("OrderSuccess");
  };

  if (cartItems.length === 0) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>No items as of the moment</Text>
      </View>
    );
  }

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
      <View style={styles.totalPriceContainer}>
        <Text style={styles.totalPriceText}>
          Total Price: ${totalPrice.toFixed(2)}
        </Text>
      </View>
      <View style={styles.discountCodeContainer}>
        <TextInput
          style={styles.discountCodeInput}
          value={discountCode}
          onChangeText={setDiscountCode}
          placeholder="Enter your promo code"
        />
        <TouchableOpacity
          style={styles.applyButton}
          // onPress={}
        >
          <Text style={styles.applyButtonText}>Apply</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.checkoutButton} onPress={handleCheckout}>
        <Text style={styles.checkoutButtonText}>Checkout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  image: {
    width: 80,
    height: 80,
    marginRight: 16,
  },
  itemDetailsContainer: {
    flex: 1,
  },
  itemName: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  itemPrice: {
    fontSize: 14,
    marginBottom: 4,
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  quantityText: {
    fontSize: 16,
    marginHorizontal: 8,
  },
  removeButton: {
    marginLeft: "auto",
  },
  removeButtonText: {
    fontSize: 14,
    color: "red",
  },
  totalPriceContainer: {
    marginTop: 16,
    alignItems: "center",
  },
  totalPriceText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  discountCodeContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  discountCodeInput: {
    flex: 1,
    marginRight: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    paddingHorizontal: 8,
    fontSize: 16,
  },
  applyButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: "blue",
    borderRadius: 4,
  },
  applyButtonText: {
    color: "white",
    fontSize: 16,
  },
  checkoutButton: {
    marginTop: 16,
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "green",
    borderRadius: 4,
    alignItems: "center",
  },
  checkoutButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default CartScreen;
