import React, { useContext } from "react";
import { View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { CartContext } from "../contexts/CartContext";

const OrderSuccessScreen = () => {
  const navigation = useNavigation();
  const { clearCart } = useContext(CartContext);

  const handleBackToHome = () => {
    clearCart(); // Clear all items from the cart
    navigation.reset({
      index: 0,
      routes: [{ name: "Home" }],
    });
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 16 }}>
        SUCCESS!
      </Text>
      <Text style={{ fontSize: 16, textAlign: "center", marginBottom: 32 }}>
        Your order will be delivered soon. Thank you for choosing our app!
      </Text>
      <Button title="Back to Home" onPress={handleBackToHome} color="green" />
    </View>
  );
};

export default OrderSuccessScreen;
