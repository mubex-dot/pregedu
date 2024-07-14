import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Header from "../components/Header";

const FamilyPlanning = ({ navigation }) => {
  const methods = [
    { id: 1, name: "Birth Control Pills" },
    { id: 2, name: "IUD" },
    { id: 3, name: "Condoms" },
    { id: 4, name: "Natural Family Planning" },
    // Add more methods here
  ];

  return (
    <View style={styles.container}>
      <Header toggleSidebar={() => navigation.goBack()} />
      <ScrollView style={styles.content}>
        <Text style={styles.title}>Family Planning</Text>
        <Text style={styles.paragraph}>
          Family planning allows individuals and couples to anticipate and
          attain their desired number of children and the spacing and timing of
          their births.
        </Text>
        <Text style={styles.subTitle}>Common Family Planning Methods:</Text>
        {methods.map((method) => (
          <TouchableOpacity key={method.id} style={styles.methodItem}>
            <Text style={styles.methodText}>{method.name}</Text>
          </TouchableOpacity>
        ))}
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
  methodItem: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  methodText: {
    fontSize: 16,
  },
});

export default FamilyPlanning;
