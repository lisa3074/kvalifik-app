import React from "react";
import TabBarBottom from "./components/TabBarBottom";
import { useSelector } from "react-redux";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SignUpScreen from "./components/SignUpScreen";
import LoginScreen from "./components/LoginScreen";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

const StartNav = () => {
  //MyNav.js

  const isSignedIn = useSelector(state => state.user.loggedInUser);

  return isSignedIn ? (
    <TabBarBottom />
  ) : (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} options={{ title: "Log in" }} />
        <Stack.Screen name="Signup" component={SignUpScreen} options={{ title: "Sign up" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default StartNav;
