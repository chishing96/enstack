import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import useAuth from "../hooks/useAuth";

const LoginScreen = ({ navigation }) => {
  const auth = useAuth();

  return (
    <View>
      <Text>Hello Login</Text>
      <Button title="Login" onPress={auth.login} />
      {/* <Button title="Signup" onPress={() => navigation.navigate("Signup")} /> */}
    </View>
  );
};

const styles = StyleSheet.create({});

export default LoginScreen;
