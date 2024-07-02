import React from "react";
import {
  View,
  Button,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Text,
} from "react-native";
import backgroundImage from "../assets/startpage.jpg";

const StartPage = ({ navigation }) => {
  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text style={{ color: "#0B3B07", fontSize: 45 }}>Welcome</Text>
        <Text style={{ fontSize: 25, color: "#fff" }}>on board</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("Home")}
          // onPress={() => navigation.goBack()}
          style={{ marginLeft: 10 }}
        >
          <Text
            style={{
              fontSize: 16,
              color: "#fff",
              marginTop: 50,
              marginLeft: 200,
            }}
          >
            Continue
          </Text>
        </TouchableOpacity>
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
    marginTop: 550,
  },
});

export default StartPage;
