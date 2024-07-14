import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Header from "../components/Header";

const PrenatalCare = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header toggleSidebar={() => navigation.goBack()} />
      <ScrollView style={styles.content}>
        <Text style={styles.title}>Prenatal Care</Text>
        <Text style={styles.paragraph}>
          Prenatal care is an important part of maintaining a healthy pregnancy.
          Regular check-ups and a healthy lifestyle can help ensure the
          well-being of both mother and baby.
        </Text>
        {/* Add more content here */}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F0F0",
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 20,
  },
});

export default PrenatalCare;
