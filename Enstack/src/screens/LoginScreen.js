import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  StyleSheet,
  Linking,
} from "react-native";
import useAuth from "../hooks/useAuth";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const { login } = useAuth();
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Email:</Text>
      <TextInput
        style={{ height: 40, width: 200, borderColor: "gray", borderWidth: 1 }}
        value={email}
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
      />
      <Text>Password:</Text>
      <TextInput
        style={{ height: 40, width: 200, borderColor: "gray", borderWidth: 1 }}
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />
      <Button
        title="Login"
        onPress={handleLogin}
        disabled={disableLogin || isLoading}
      />
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
      <TouchableOpacity onPress={handleForgotPassword}>
        <Text>Forgot password?</Text>
      </TouchableOpacity>
      <Button title="Sign up" onPress={handleSignup} />
    </View>
  );
};

const styles = StyleSheet.create({
  loginForm: {
    alignItems: "center",
  },
  headerLogin: {
    alignItems: "center",
  },
});

export default LoginScreen;
