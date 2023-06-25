import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Hello Home</Text>
      <Button
        title="Go to Product"
        onPress={() => navigation.navigate("Product")}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;
