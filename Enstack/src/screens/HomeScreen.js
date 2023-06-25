import React from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { productItemsData } from "../data/items";

const HomeScreen = () => {
  const navigation = useNavigation();
  const renderItem = ({ item }) => (
    <View>
      <TouchableOpacity
        style={styles.itemContainer}
        onPress={() => navigation.navigate("Product", { product: item })}
      >
        <Image
          source={item.main_image}
          style={styles.itemImage}
          resizeMode="cover"
        />
        <TouchableOpacity style={styles.addToCartButton}>
          <Text style={styles.addToCartButtonText}>C</Text>
        </TouchableOpacity>
      </TouchableOpacity>
      <View>
        <View styles={styles.productDetailsView}>
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.itemPrice}>${item.price}</Text>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={productItemsData}
        renderItem={renderItem}
        keyExtractor={(item) => item.product_id}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  itemContainer: {
    marginTop: 10,
    flexDirection: "column",
    alignItems: "center",
  },
  itemImage: {
    width: 170,
    height: 260,
    margin: 5,
    borderRadius: 10,
  },
  productDetailsView: {
    flexDirection: "row",
  },
  itemName: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
    maxWidth: 150,
  },
  itemPrice: {
    fontSize: 14,
    color: "#888",
    marginBottom: 8,
  },
  addToCartButton: {
    position: "absolute",
    right: 0,
    bottom: 0,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginRight: 10,
    marginBottom: 10,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    zIndex: 1,
  },
  addToCartButtonText: {
    color: "#fff",
  },
});

export default HomeScreen;
