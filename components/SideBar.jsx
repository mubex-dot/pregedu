import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Sidebar = () => {
  const menuItems = [
    { icon: "home", title: "Home Page" },
    { icon: "medical", title: "Prenatal Care" },
    { icon: "nutrition", title: "Nutritional Tips" },
    { icon: "woman", title: "Postpartum Care" },
    { icon: "people", title: "Family Planning" },
    { icon: "settings", title: "Setting" },
    { icon: "help-circle", title: "Help" },
  ];

  return (
    <View style={styles.sidebar}>
      <Text style={styles.welcomeText}>Welcome</Text>
      {menuItems.map((item, index) => (
        <TouchableOpacity key={index} style={styles.menuItem}>
          <Ionicons name={item.icon} size={24} color="white" />
          <Text style={styles.menuText}>{item.title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  sidebar: {
    flex: 1,
    backgroundColor: "#000080",
    padding: 20,
  },
  welcomeText: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  menuText: {
    color: "white",
    marginLeft: 10,
    fontSize: 16,
  },
});

export default Sidebar;
