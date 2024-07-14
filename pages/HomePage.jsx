import React, { useState, useRef } from "react";
import {
  View,
  StyleSheet,
  Animated,
  TouchableWithoutFeedback,
  Dimensions,
  StatusBar,
  ScrollView,
} from "react-native";
import Header from "../components/Header";
import Content from "../components/Content";
import Sidebar from "../components/SideBar";
import { useNavigation } from "@react-navigation/native";

const { width } = Dimensions.get("window");
const SIDEBAR_WIDTH = 220;

const HomePage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sidebarAnimation = useRef(new Animated.Value(-SIDEBAR_WIDTH)).current;
  const navigate = useNavigation();

  const toggleSidebar = () => {
    const toValue = sidebarOpen ? -SIDEBAR_WIDTH : 0;
    Animated.timing(sidebarAnimation, {
      toValue: toValue,
      duration: 300,
      useNativeDriver: true,
    }).start();
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    if (sidebarOpen) {
      Animated.timing(sidebarAnimation, {
        toValue: -SIDEBAR_WIDTH,
        duration: 300,
        useNativeDriver: true,
      }).start();
      setSidebarOpen(false);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#006400" />
      <Header toggleSidebar={toggleSidebar} />
      <TouchableWithoutFeedback onPress={closeSidebar}>
        <View style={styles.content}>
          <Content />
        </View>
      </TouchableWithoutFeedback>
      <Animated.View
        style={[
          styles.sidebarContainer,
          { transform: [{ translateX: sidebarAnimation }] },
        ]}
      >
        <Sidebar closeSidebar={closeSidebar} />
      </Animated.View>
      {sidebarOpen && (
        <TouchableWithoutFeedback onPress={closeSidebar}>
          <View style={styles.overlay} />
        </TouchableWithoutFeedback>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F0F0",
  },
  content: {
    flex: 1,
  },
  sidebarContainer: {
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    width: SIDEBAR_WIDTH,
    zIndex: 2,
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    zIndex: 1,
  },
});

export default HomePage;
