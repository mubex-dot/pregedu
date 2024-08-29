import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomePage from "./pages/HomePage";
import PrenatalCare from "./pages/PrenatalCare";
import NutritionalTips from "./pages/NutritionalTips";
import PostpartumCare from "./pages/PostpartumCare";
import FamilyPlanning from "./pages/FamilyPlanning";
import StartPage from "./pages/StartPage";
import RegisterPage from "./pages/RegisterPage";
import ChatPage from "./pages/ChatPage";
import { Provider, useDispatch } from "react-redux";
import { loadUserFromSecureStore } from "./store/userSlice";
import store from "./store/store";
// import Settings from "./pages/Settings";
// import Help from "./pages/Help";

const Stack = createStackNavigator();

function AppNavigator() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUserFromSecureStore());
  }, [dispatch]);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen
          name="Start"
          component={StartPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={HomePage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PrenatalCare"
          component={PrenatalCare}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="NutritionalTips"
          component={NutritionalTips}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PostpartumCare"
          component={PostpartumCare}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="FamilyPlanning"
          component={FamilyPlanning}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ChatPage"
          component={ChatPage}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}
