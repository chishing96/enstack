import React from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { useNavigation } from "@react-navigation/native";

const SignupScreen = () => {
  const {
    handleSubmit,
    control,
    formState: { errors, isDirty },
    watch,
  } = useForm();
  const navigation = useNavigation();

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
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Name:</Text>
      <Controller
        control={control}
        rules={{ required: "Name is required" }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={{
              height: 40,
              width: 200,
              borderColor: "gray",
              borderWidth: 1,
            }}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="name"
        defaultValue=""
      />
      {errors.name && <Text>{errors.name.message}</Text>}

      <Text>Email:</Text>
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
            style={{
              height: 40,
              width: 200,
              borderColor: "gray",
              borderWidth: 1,
            }}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="email"
        defaultValue=""
      />
      {errors.email && <Text>{errors.email.message}</Text>}

      <Text>Password:</Text>
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
            style={{
              height: 40,
              width: 200,
              borderColor: "gray",
              borderWidth: 1,
            }}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            secureTextEntry
          />
        )}
        name="password"
        defaultValue=""
      />
      {errors.password && <Text>{errors.password.message}</Text>}

      <Text>Confirm Password:</Text>
      <Controller
        control={control}
        rules={{
          required: "Confirm Password is required",
          validate: (value) => value === password || "Passwords do not match",
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={{
              height: 40,
              width: 200,
              borderColor: "gray",
              borderWidth: 1,
            }}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            secureTextEntry
          />
        )}
        name="confirmPassword"
        defaultValue=""
      />
      {errors.confirmPassword && <Text>{errors.confirmPassword.message}</Text>}

      <Button
        title="Signup"
        onPress={handleSubmit(onSubmit)}
        disabled={!isDirty}
      />
    </View>
  );
};

export default SignupScreen;
