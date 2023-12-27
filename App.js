import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider } from "./src/context/BlogContext";
import MainScreen from "./src/screens/MainScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Provider>
        <Stack.Navigator screenOptions={{ headerTitle: "Blogs" }}>
          <Stack.Screen name="Main" component={MainScreen} />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
};
