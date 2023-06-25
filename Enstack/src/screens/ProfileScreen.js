import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import useAuth from "../hooks/useAuth";

const ProfileScreen = () => {
  const auth = useAuth();
  return (
    <View style={styles.container}>
      <Text>Hello Profile</Text>
      <Button title="Logout" onPress={auth.logout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    alignSelf: "center",
    alignItems: "center",
    marginTop: 100,
  },
});

export default ProfileScreen;
