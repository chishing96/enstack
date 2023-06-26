import React, { useState, useContext } from "react";
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
import {
  Ionicons,
  MaterialIcons,
  FontAwesome5,
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { CartContext } from "../contexts/CartContext";

const filterData = [
  { label: "Popular" },
  { label: "Chair" },
  { label: "Table" },
  { label: "Lamp" },
  { label: "Bed" },
];

const HomeScreen = () => {
  const navigation = useNavigation();
  const [activeFilter, setActiveFilter] = useState("");
  const { cartItems } = useContext(CartContext);
  const { addToCart } = useContext(CartContext);
  const cartItemCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const applyFilter = (filter) => {
    setActiveFilter(filter);
  };

  const filteredProducts = productItemsData
    .filter((item) => {
      if (activeFilter === "") {
        return true;
      }
      if (activeFilter === "Popular") {
        return item.rating >= 4;
      }
      return item.type === activeFilter;
    })
    .sort((a, b) => {
      if (activeFilter === "Popular") {
        return b.ratings - a.ratings;
      }
      return a.name.localeCompare(b.name);
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
        <TouchableOpacity
          onPress={() => addToCart(item)}
          style={styles.addToCartButton}
        >
          <FontAwesome name="shopping-bag" size={16} color="black" />
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

  const renderFilterItem = ({ item }) => {
    let icon = null;
    switch (item.label) {
      case "Popular":
        icon = <MaterialIcons name="star" size={24} color="black" />;
        break;
      case "Chair":
        icon = <FontAwesome5 name="chair" size={24} color="black" />;
        break;
      case "Table":
        icon = (
          <MaterialCommunityIcons
            name="table-furniture"
            size={24}
            color="black"
          />
        );
        break;
      case "Lamp":
        icon = (
          <MaterialCommunityIcons name="floor-lamp" size={24} color="black" />
        );
        break;
      case "Bed":
        icon = <Ionicons name="bed-outline" size={24} color="black" />;
        break;
      default:
        break;
    }

    const onPressCartScreen = ({ cartItems }) => {
      console.log(cartItems);
    };

    return (
      <View style={{ alignSelf: "center" }}>
        <TouchableOpacity
          style={[
            styles.filterItem,
            activeFilter === item.label && styles.activeFilterItem,
          ]}
          onPress={() => applyFilter(item.label)}
        >
          {icon}
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => console.log("Search icon pressed")}>
          <Ionicons name="search" size={24} color="black" />
        </TouchableOpacity>
        <View style={{ flexDirection: "column", alignItems: "center" }}>
          <Text style={styles.headerText}>MAKE HOME</Text>
          <Text style={styles.headerText}>BEAUTIFUL</Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            console.log(cartItems);
            navigation.navigate("Cart", { cartItems });
          }}
        >
          <Ionicons name="cart" size={24} color="black" />
          {cartItemCount > 0 && (
            <View style={styles.cartCountContainer}>
              <Text style={styles.cartCountText}>{cartItemCount}</Text>
            </View>
          )}
        </TouchableOpacity>
      </View>
      <View style={styles.filterView}>
        <FlatList
          data={filterData}
          renderItem={renderFilterItem}
          keyExtractor={(item) => item.label}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View style={styles.productItemsView}>
        <FlatList
          data={filteredProducts}
          renderItem={renderItem}
          keyExtractor={(item) => item.product_id}
          numColumns={2}
          columnWrapperStyle={styles.columnWrapper}
        />
      </View>
    </View>
  );
};

const windowWidth = Dimensions.get("window").width;
const itemWidth = windowWidth / 2 - 5;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
  },
  filterView: {
    height: 80,
  },
  productItemsView: {
    flex: 1,
  },
  itemContainer: {
    marginTop: 10,
    flexDirection: "column",
    alignItems: "center",
  },
  itemImage: {
    width: itemWidth - 32,
    height: 200,
    margin: 10,
    borderRadius: 10,
  },
  productDetailsView: {
    flexDirection: "row",
  },
  itemName: {
    fontSize: 14,
    fontWeight: "500",
    marginBottom: 8,
    maxWidth: 150,
    color: "#888",
  },
  itemPrice: {
    fontSize: 14,
    fontWeight: "bold",
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
    backgroundColor: "rgba(238,238,228,0.5)",
    borderRadius: 7,
    zIndex: 1,
  },
  addToCartButtonText: {
    color: "#fff",
  },
  columnWrapper: {
    justifyContent: "space-between",
  },
  filterItem: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    maxHeight: 45,
    minHeight: 45,
    margin: 5,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  activeFilterItem: {
    backgroundColor: "#ccc",
  },
  filterItemText: {
    fontSize: 14,
    color: "#333",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignContent: "space-around",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 10,
    width: windowWidth,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  cartCountContainer: {
    position: "absolute",
    top: -10,
    right: -10,
    backgroundColor: "red",
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  cartCountText: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },
});

export default HomeScreen;
