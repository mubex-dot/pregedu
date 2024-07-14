import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Header from "../components/Header";

const PostpartumCare = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header toggleSidebar={() => navigation.goBack()} />
      <ScrollView style={styles.content}>
        <Text style={styles.title}>Postpartum Care</Text>
        <Text style={styles.paragraph}>
          Postpartum care is crucial for new mothers. It involves physical
          recovery, emotional support, and adjusting to life with a new baby.
        </Text>
        <Text style={styles.subTitle}>Key aspects of postpartum care:</Text>
        <Text style={styles.listItem}>• Physical recovery</Text>
        <Text style={styles.listItem}>• Emotional well-being</Text>
        <Text style={styles.listItem}>• Infant care</Text>
        <Text style={styles.listItem}>• Nutrition and rest</Text>
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
  subTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 10,
  },
  listItem: {
    fontSize: 16,
    marginLeft: 20,
    marginBottom: 5,
  },
});

export default PostpartumCare;
