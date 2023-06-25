import React from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { productItemsData } from "../data/items";

const HomeScreen = () => {
  const navigation = useNavigation();

  const filteredProducts = productItemsData
    .filter((item) => item.rating >= 4) // Filter by ratings >= 4
    .sort((a, b) => {
      if (a.priority !== b.priority) {
        //this sort compares the priority property first, and
        return a.priority - b.priority; // Sort by priority (lower number, higher priority)
      }
      return a.name.localeCompare(b.name); // Finally, Sort alphabetically by name
    });

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
        data={filteredProducts}
        renderItem={renderItem}
        keyExtractor={(item) => item.product_id}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
      />
    </View>
  );
};

const windowWidth = Dimensions.get("window").width;
const itemWidth = windowWidth / 2 - 5;

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
    width: itemWidth - 32,
    height: 250,
    margin: 10,
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
    marginRight: 15,
    marginBottom: 15,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    zIndex: 1,
  },
  addToCartButtonText: {
    color: "#fff",
  },
  columnWrapper: {
    justifyContent: "space-between",
  },
});

export default HomeScreen;
