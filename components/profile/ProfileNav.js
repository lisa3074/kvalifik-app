import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {StyleSheet } from "react-native";

import Menu from "./Menu";
import EditProfile from "./EditProfile";

const Stack = createNativeStackNavigator();

const ProfileNav = props => {
  return (
    <Stack.Navigator
      screenOptions={{
            tabBarActiveTintColor: "#5050A5",
              tabBarInactiveTintColor: "gray",
            tabBarLabelStyle: {
              fontSize: 16,
                fontFamily: "Teko_500Medium",
            },
            tabBarStyle: {
              height: 65,
              paddingTop: 15,
                paddingBottom: 5,
            },
            headerStyle: {
                backgroundColor: "#ffffff",
            },
            headerTintColor: "#5050A5",
            headerTitleStyle: {
              fontWeight: "bold",
              fontFamily: "Teko_500Medium",
                fontSize: 26,
            },
            headerBackTitleVisible: false,
            headerBackTitleStyle: {
              fontSize: 0,
            },
            headerShadowVisible: true,
      }}>
      <Stack.Screen name="Menu" options={{ title: "MENU", headerShown: true  }}>
        {props => <Menu action={"EditProfile"} />}
      </Stack.Screen>
      <Stack.Screen name="EditProfile" options={{ title: "EDIT PROFILE", headerShown: true }}>
        {props => <EditProfile action={"Menu"} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({});
export default ProfileNav;
