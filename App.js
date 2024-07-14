// import React from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";

// import HomePage from "./pages/HomePage";
// import PrenatalCare from "./pages/PrenatalCare";
// import NutritionalTips from "./pages/NutritionalTips";
// import PostpartumCare from "./pages/PostpartumCare";
// import FamilyPlanning from "./pages/FamilyPlanning";
// import StartPage from "./pages/StartPage";
// // import Settings from "./pages/Settings";
// // import Help from "./pages/Help";

// const Stack = createStackNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Start">
//         <Stack.Screen
//           name="Start"
//           component={StartPage}
//           options={{ headerShown: false }}
//         />
//       </Stack.Navigator>
//       <Stack.Screen screenOptions={{ headerShown: false }}>
//         <Stack.Screen name="Home" component={HomePage} />
//         <Stack.Screen name="PrenatalCare" component={PrenatalCare} />
//         <Stack.Screen name="NutritionalTips" component={NutritionalTips} />
//         <Stack.Screen name="PostpartumCare" component={PostpartumCare} />
//         <Stack.Screen name="FamilyPlanning" component={FamilyPlanning} />
//         {/* <Stack.Screen name="Settings" component={Settings} /> */}
//         {/* <Stack.Screen name="Help" component={Help} /> */}
//       </Stack.Screen>
//     </NavigationContainer>
//   );
// }

// export default App;

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomePage from "./pages/HomePage";
import PrenatalCare from "./pages/PrenatalCare";
import NutritionalTips from "./pages/NutritionalTips";
import PostpartumCare from "./pages/PostpartumCare";
import FamilyPlanning from "./pages/FamilyPlanning";
import StartPage from "./pages/StartPage";
// import Settings from "./pages/Settings";
// import Help from "./pages/Help";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen
          name="Start"
          component={StartPage}
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
        {/* <Stack.Screen name="Settings" component={Settings} options={{ headerShown: false }} /> */}
        {/* <Stack.Screen name="Help" component={Help} options={{ headerShown: false }} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
