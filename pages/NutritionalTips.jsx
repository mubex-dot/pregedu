import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import Header from "../components/Header";

const NutritionalTips = ({ navigation }) => {
  const tips = [
    { id: "1", tip: "Eat a variety of fruits and vegetables" },
    { id: "2", tip: "Include protein-rich foods in your diet" },
    { id: "3", tip: "Stay hydrated by drinking plenty of water" },
    // Add more tips here
  ];

  const renderTip = ({ item }) => (
    <View style={styles.tipItem}>
      <Text style={styles.tipText}>{item.tip}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Header toggleSidebar={() => navigation.goBack()} />
      <View style={styles.content}>
        <Text style={styles.title}>Nutritional Tips</Text>
        <FlatList
          data={tips}
          renderItem={renderTip}
          keyExtractor={(item) => item.id}
        />
      </View>
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
  tipItem: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  tipText: {
    fontSize: 16,
  },
});

export default NutritionalTips;
