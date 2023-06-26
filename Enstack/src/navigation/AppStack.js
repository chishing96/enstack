import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import BellScreen from "../screens/BellScreen";
import ProductDetailScreen from "../screens/ProductDetailScreen";
import CartScreen from "../screens/CartScreen";
import OrderSuccessScreen from "../screens/OrderSuccessScreen";
import { SafeAreaView } from "react-native";

const Tab = createMaterialBottomTabNavigator();
const HomeStack = createStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen name="Product" component={ProductDetailScreen} />
      <HomeStack.Screen name="Cart" component={CartScreen} />
      <HomeStack.Screen name="OrderSuccess" component={OrderSuccessScreen} />
    </HomeStack.Navigator>
  );
};

const AppStack = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Tab.Navigator
        initialRouteName="Home"
        activeColor="black"
        inactiveColor="gray"
        barStyle={{ backgroundColor: "white" }}
      >
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Favorites" component={FavoritesScreen} />
        <Tab.Screen name="Bell" component={BellScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

export default AppStack;
