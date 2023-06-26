import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const GetStartedScreen = () => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  const handleGetStarted = () => {
    navigation.navigate("Login"); // Navigate to the Login screen
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ImageBackground
          source={require("../../assets/bg.jpeg")}
          resizeMode="cover"
          style={[styles.image, { paddingTop: insets.top }]}
        >
          <View style={styles.contentContainer}>
            <Text style={styles.title}>MAKE YOUR HOME BEAUTIFUL</Text>
            <Text style={styles.subtitle}>
              The best place where you discover the most wonderful furniture and
              make your home beautiful.
            </Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.button}
                onPress={handleGetStarted}
              >
                <Text style={styles.buttonText}>Get Started</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    // flex: 1,
    position: "absolute",
    height: "110%",
    width: "100%",
    justifyContent: "center",
  },
  contentContainer: {
    paddingHorizontal: 24,
    justifyContent: "center",
    position: "absolute",
    top: 100,
    left: 0,
    right: 0,
    bottom: 0,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    bottom: 50,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "black",
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 18,
    color: "gray",
    marginBottom: 32,
  },
  button: {
    width: windowWidth - 50,
    height: 60,
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 5,
    backgroundColor: "#28282B",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "400",
    color: "white",
    alignSelf: "center",
  },
});

export default GetStartedScreen;
