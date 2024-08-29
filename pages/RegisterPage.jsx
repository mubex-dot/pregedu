import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  ImageBackground,
} from "react-native";
import backgroundImage from "../assets/startpage.jpg";
import { useRegisterUserMutation } from "../store/apiSlice";

const RegisterPage = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [registerUser, { data, error, isLoading }] = useRegisterUserMutation();

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      await registerUser({ username, password, role: "user" }).unwrap();
      navigation.navigate("Start"); // Navigate to Start page after successful registration
    } catch (err) {
      console.error("Failed to register", err);
      alert("Registration failed. Please try again.");
    }
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text style={styles.title}>Register</Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="#ccc"
          value={username}
          onChangeText={setUsername}
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#ccc"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          placeholderTextColor="#ccc"
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />

        <TouchableOpacity
          onPress={handleRegister}
          style={styles.button}
          disabled={isLoading}
        >
          <Text style={styles.buttonText}>
            {isLoading ? "Registering..." : "Register"}
          </Text>
        </TouchableOpacity>

        {error && <Text style={styles.errorText}>Error: {error.message}</Text>}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 32,
    color: "#fff",
    marginBottom: 20,
  },
  input: {
    width: "80%",
    padding: 10,
    marginVertical: 10,
    borderColor: "#fff",
    borderWidth: 1,
    borderRadius: 5,
    color: "#fff",
  },
  button: {
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: "#0B3B07",
    fontSize: 16,
  },
  errorText: {
    color: "red",
    marginTop: 10,
  },
});

export default RegisterPage;
