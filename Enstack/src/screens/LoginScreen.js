import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  StyleSheet,
  Linking,
  ImageBackground,
  Dimensions,
} from "react-native";
import useAuth from "../hooks/useAuth";
import { useNavigation } from "@react-navigation/native";
import { TextInput } from "react-native-paper";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const LoginScreen = () => {
  const { login } = useAuth();
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isPasswordSecure, setIsPasswordSecure] = useState(true);
  const [attempts, setAttempts] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");
  const [invalidCredentialsMessage, setInvalidCredentialMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [disableLogin, setDisableLogin] = useState(false);
  const [countdown, setCountdown] = useState(60);

  useEffect(() => {
    let interval;

    if (attempts >= 3) {
      setDisableLogin(true);
      setCountdown(60);

      interval = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [attempts]);

  useEffect(() => {
    if (countdown === 0) {
      setDisableLogin(false);
      setAttempts(0);
      setInvalidCredentialMessage("");
      setErrorMessage("");
    }
  }, [countdown]);

  const validateEmail = () => {
    // Email validation regex pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const handleLogin = () => {
    setIsLoading(true);

    // Simulating API call for authentication
    setTimeout(() => {
      if (validateEmail() && password === "Testpassw0rd!") {
        // if (email === "1" && password === "1") {
        login();
      } else {
        setInvalidCredentialMessage("Invalid email or password.");
        // Incorrect login attempt
        setAttempts(attempts + 1);
        setIsLoading(false);

        if (attempts >= 2) {
          setErrorMessage("Too many incorrect attempts.");
          setInvalidCredentialMessage("");
        }
      }
    }, 2000); // Simulated delay for API call
  };

  const handleForgotPassword = () => {
    // Open a popup window or navigate to the password recovery page
    // In this example, we will open google.com in a new tab/window
    Linking.openURL("https://google.com");
  };

  const handleSignup = () => {
    navigation.navigate("Signup");
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <ImageBackground
          source={require("../../assets/headerLogin.png")}
          style={styles.headerImage}
        />
        <View style={styles.headerTextView}>
          <Text style={styles.textHello}>Hello!</Text>
          <Text style={styles.textWelcome}>WELCOME BACK</Text>
        </View>
      </View>

      <View
        style={styles.formView}
        shadowOffset={{ height: 10 }}
        shadowColor="black"
        shadowOpacity={0.1}
      >
        <TextInput
          style={styles.emailTextInput}
          value={email}
          onChangeText={(text) => setEmail(text)}
          keyboardType="email-address"
          mode="outlined"
          label={"Email"}
        />
        <TextInput
          style={styles.passwordTextInput}
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={isPasswordSecure}
          mode="outlined"
          label={"Password"}
          right={
            <TextInput.Icon
              icon={"eye"}
              iconColor="black"
              size={20}
              onPress={() => {
                isPasswordSecure
                  ? setIsPasswordSecure(false)
                  : setIsPasswordSecure(true);
              }}
            />
          }
        />
        <TouchableOpacity style={{ margin: 15 }} onPress={handleForgotPassword}>
          <Text>Forgot password?</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleLogin}
          disabled={disableLogin || isLoading}
          style={styles.loginButton}
        >
          <Text style={styles.loginText}>Log in</Text>
        </TouchableOpacity>
        {attempts > 0 ? (
          <Text style={{ color: "red" }}>{invalidCredentialsMessage}</Text>
        ) : (
          <></>
        )}

        {disableLogin && (
          <View>
            {countdown > 0 ? (
              <View style={{ alignItems: "center" }}>
                <Text style={{ color: "red" }}>{errorMessage}</Text>
                <Text>{`Try again in ${countdown} seconds`}</Text>
              </View>
            ) : (
              <></>
            )}
          </View>
        )}

        <Button title="Sign up" onPress={handleSignup} color={"black"} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  headerContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 300,
  },
  headerImage: { width: "100%", height: 100 },
  headerTextView: { justifyContent: "center", alignItems: "center" },
  textHello: { fontSize: 42, fontWeight: "bold" },
  textWelcome: { fontSize: 38, fontWeight: "bold" },
  formView: {
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    width: windowWidth - 40,
    height: 300,
  },
  loginForm: {
    alignItems: "center",
  },
  emailTextInput: {
    height: 40,
    width: 200,
    margin: 5,
    width: "80%",
  },
  passwordTextInput: {
    margin: 5,
    height: 40,
    width: "80%",
  },
  loginButton: {
    width: "80%",
    alignSelf: "center",
    justifyContent: "center",
    backgroundColor: "#28282B",
    height: 50,
    borderRadius: 5,
  },
  loginText: {
    fontSize: 20,
    fontWeight: "400",
    color: "white",
    alignSelf: "center",
  },
  headerLogin: {
    alignItems: "center",
  },
});

export default LoginScreen;
