import React, { useContext, useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
  ScrollView,
} from "react-native";
import { CartContext } from "../contexts/CartContext";
import { Ionicons, EvilIcons } from "@expo/vector-icons";
import { FavoriteContext } from "../contexts/FavoritesContext";

const ProductDetailScreen = ({ route }) => {
  const { addToCart } = useContext(CartContext);
  const { product } = route.params;
  const [quantity, setQuantity] = useState(1);
  const { addToFavorites, removeFromFavorites, favoriteItems } =
    useContext(FavoriteContext);
  const [isFavorite, setIsFavorite] = useState(
    favoriteItems.some(
      (favoriteItem) => favoriteItem.product_id === product.product_id
    )
  );

  const toggleFavorite = () => {
    if (isFavorite) {
      removeFromFavorites(product.product_id);
      setIsFavorite(false);
      Alert.alert("Removed from favorites");
    } else {
      addToFavorites(product);
      setIsFavorite(true);
      Alert.alert(`Added to favorites`);
    }
  };

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
    Alert.alert(`Added ${quantity} item/s to cart.`);
  };

  return (
    <ScrollView style={{ flex: 1, padding: 16 }}>
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
            flex: 1,
            width: "80%",
            height: 400,
            borderBottomLeftRadius: 20,
            marginBottom: 16,
          }}
        />
      </View>
      <View style={{ flex: 1, marginLeft: 16 }}>
        <Text style={{ fontSize: 28, fontWeight: "400", marginBottom: 8 }}>
          {product.name}
        </Text>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ fontSize: 32, marginBottom: 8, fontWeight: "800" }}>
            $ {product.price}
          </Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TouchableOpacity onPress={handleIncrement}>
              <Ionicons name="add-circle" size={24} color="black" />
            </TouchableOpacity>
            <Text style={{ fontSize: 16, marginHorizontal: 8 }}>
              {quantity}
            </Text>
            <TouchableOpacity onPress={handleDecrement}>
              <Ionicons name="remove-circle" size={24} color="black" />
            </TouchableOpacity>
          </View>
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
        <Text style={{ fontSize: 16, marginBottom: 8, color: "gray" }}>
          {product.description}
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignSelf: "center",
          alignItems: "center",
          marginBottom: 50,
        }}
      >
        <TouchableOpacity
          onPress={toggleFavorite}
          style={{
            backgroundColor: isFavorite ? "red" : "gold",
            padding: 8,
            borderRadius: 8,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            height: 50,
            width: 50,
          }}
        >
          <Ionicons name="ribbon" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "green",
            padding: 12,
            alignItems: "center",
            borderRadius: 8,
            margin: 5,
            width: "80%",
            height: 50,
            justifyContent: "center",
            backgroundColor: "#28282B",
          }}
          onPress={handleAddToCart}
        >
          <Text style={{ fontSize: 16, color: "white" }}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default ProductDetailScreen;
