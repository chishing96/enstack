import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
  SafeAreaView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const GetStartedScreen = () => {
  const navigation = useNavigation();
  const handleGetStarted = () => {
    navigation.navigate("Login"); // Navigate to the Login screen
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/onboarding.webp")}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.contentContainer}>
          <Text style={styles.title}>Make your home beautiful</Text>
          <Text style={styles.subtitle}>
            The best place where you discover the most wonderful furniture and
            make your home beautiful.
          </Text>
          <TouchableOpacity style={styles.button} onPress={handleGetStarted}>
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  contentContainer: {
    paddingHorizontal: 24,
    alignItems: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 18,
    color: "white",
    textAlign: "center",
    marginBottom: 32,
  },
  button: {
    backgroundColor: "white",
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },
});

export default GetStartedScreen;
