import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "../screens/Login";
import Profile from "../screens/Profile";
import Registration from "../screens/Registration";

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator
    screenOptions={{
        headerStyle: {
          backgroundColor: "#9AC4F8",
        },
        headerTintColor: "white",
        headerBackTitle: "Back",
        headerTitleAlign:"center"
      }}
    >
      <Stack.Screen name="Login" component={Login}  options={{headerShown: false}}/>
      <Stack.Screen name="Registration" component={Registration} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
}

export { MainStackNavigator };