import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  Alert,
  StyleSheet,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import { useNavigation } from "@react-navigation/native";
import { TextInput } from "react-native-paper";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const SignupScreen = () => {
  const {
    handleSubmit,
    control,
    formState: { errors, isDirty },
    watch,
  } = useForm();
  const navigation = useNavigation();
  const [isPasswordSecure, setIsPasswordSecure] = useState(true);
  const [isConfirmPasswordSecure, setIsConfirmPasswordSecure] = useState(true);

  const onSubmit = (data) => {
    console.log(data);
    Alert.alert("Signup success!", `Name: ${data.name}\nEmail: ${data.email}`, [
      {
        text: "OK",
        onPress: () => {
          navigation.reset({
            index: 0,
            routes: [{ name: "Login" }],
          });
        },
      },
    ]);
  };

  const password = watch("password", ""); // Get the value of the 'password' field

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
      <Controller
        control={control}
        rules={{ required: "Name is required" }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.textInputs}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            mode="outlined"
            label={"Name"}
          />
        )}
        name="name"
        defaultValue=""
      />
      {errors.name && (
        <Text style={{ color: "red" }}>{errors.name.message}</Text>
      )}
      <Controller
        control={control}
        rules={{
          required: "Email is required",
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "Invalid email format",
          },
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.textInputs}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            mode="outlined"
            label={"Email"}
          />
        )}
        name="email"
        defaultValue=""
      />
      {errors.email && (
        <Text style={{ color: "red" }}>{errors.email.message}</Text>
      )}
      <Controller
        control={control}
        rules={{
          required: "Password is required",
          minLength: {
            value: 8,
            message: "Password must be at least 8 characters",
          },
          pattern: {
            value:
              /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
            message:
              'Password must include at least one uppercase character, one number, one special character, and cannot include "*"',
          },
          validate: (value) =>
            !value.includes("*") || 'Password cannot include "*"',
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.textInputs}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
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
        )}
        name="password"
        defaultValue=""
      />
      {errors.password && (
        <Text style={{ color: "red" }}>{errors.password.message}</Text>
      )}
      <Controller
        control={control}
        rules={{
          required: "Confirm Password is required",
          validate: (value) => value === password || "Passwords do not match",
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.textInputs}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            secureTextEntry={isConfirmPasswordSecure}
            mode="outlined"
            label={"Confirm Password"}
            right={
              <TextInput.Icon
                icon={"eye"}
                iconColor="black"
                size={20}
                onPress={() => {
                  isPasswordSecure
                    ? setIsConfirmPasswordSecure(false)
                    : setIsConfirmPasswordSecure(true);
                }}
              />
            }
          />
        )}
        name="confirmPassword"
        defaultValue=""
      />
      {errors.confirmPassword && (
        <Text style={{ color: "red" }}>{errors.confirmPassword.message}</Text>
      )}
      <TouchableOpacity
        style={styles.loginButton}
        onPress={handleSubmit(onSubmit)}
        disabled={!isDirty}
      >
        <Text style={styles.loginText}>Sign up</Text>
      </TouchableOpacity>
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
  textInputs: {
    height: 40,
    width: "80%",
    marginTop: 10,
  },
  loginButton: {
    width: "80%",
    alignSelf: "center",
    justifyContent: "center",
    backgroundColor: "#28282B",
    height: 50,
    borderRadius: 5,
    margin: 25,
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

export default SignupScreen;
