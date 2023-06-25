import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

const GetStartedScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Make your home beautiful</Text>
      <Button
        title="Get Started"
        onPress={() => navigation.navigate("Login")}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default GetStartedScreen;
