import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const SignupScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Hello Signup</Text>
      <Button
        title="Already have an account? Sign in"
        onPress={() => navigation.navigate("Login")}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SignupScreen;
