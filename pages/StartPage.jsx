import React, { useState } from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Text,
  TextInput,
  Button,
} from "react-native";
import backgroundImage from "../assets/startpage.jpg";
import { useDispatch } from "react-redux";
import { useLoginUserMutation } from "../store/apiSlice";
import { setUser } from "../store/userSlice";

const StartPage = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginUser, { data, error, isLoading }] = useLoginUserMutation();
  const dispatch = useDispatch();

  const handleLogin = async () => {
    try {
      const user = await loginUser({ username, password }).unwrap();
      dispatch(setUser(user));
      navigation.navigate("Home");
    } catch (err) {
      console.error("Failed to login", err);
    }
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text style={styles.welcomeText}>Welcome</Text>
        <Text style={styles.subtitleText}>on board</Text>

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

        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={handleLogin} style={styles.button}>
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
          {error && <Text>Error: {error.message}</Text>}

          <TouchableOpacity
            onPress={() => navigation.navigate("Register")}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
        </View>
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
  welcomeText: {
    color: "#fff",
    fontSize: 45,
  },
  subtitleText: {
    fontSize: 25,
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
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    marginTop: 30,
  },
  button: {
    backgroundColor: "#0B3B07",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default StartPage;
