import React, { useContext, useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { CartContext } from "../contexts/CartContext";
import { Ionicons, EvilIcons } from "@expo/vector-icons";

const ProductDetailScreen = ({ route }) => {
  const { addToCart } = useContext(CartContext);
  const { product } = route.params;
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    addToCart({
      ...product,
      quantity: quantity,
    });
  };

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Image
          source={product.main_image}
          style={{
            width: "50%",
            aspectRatio: 1,
            borderRadius: 20,
            marginBottom: 16,
          }}
        />
        <View style={{ flex: 1, marginLeft: 16 }}>
          <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 8 }}>
            {product.name}
          </Text>
          <Text style={{ fontSize: 16, marginBottom: 8 }}>
            ${product.price}
          </Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TouchableOpacity onPress={handleDecrement}>
              <Ionicons name="remove-circle" size={24} color="black" />
            </TouchableOpacity>
            <Text style={{ fontSize: 16, marginHorizontal: 8 }}>
              {quantity}
            </Text>
            <TouchableOpacity onPress={handleIncrement}>
              <Ionicons name="add-circle" size={24} color="black" />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignContent: "center",
              marginTop: 5,
            }}
          >
            <EvilIcons name="star" size={24} color="black" />
            <Text style={{ fontSize: 16, marginBottom: 8 }}>
              {product.rating}
            </Text>
          </View>
          <Text style={{ fontSize: 16, marginBottom: 8 }}>
            {product.description}
          </Text>
        </View>
      </View>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity
          style={{
            width: 150,
            backgroundColor: "gold",
            padding: 8,
            borderRadius: 8,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Ionicons name="ribbon" size={24} color="black" />
          <Text style={{ fontSize: 16, marginLeft: 8 }}>Favorites</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "green",
            padding: 12,
            alignItems: "center",
            borderRadius: 8,
            marginTop: 16,
          }}
          onPress={handleAddToCart}
        >
          <Text style={{ fontSize: 16, color: "white" }}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductDetailScreen;
