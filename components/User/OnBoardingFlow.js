import React from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MainScreenStyling from "../../styling/MainScreenStyling";
import VerifyEmail from "./VerifyEmail";
import Signup from "./Signup";

const Tab = createBottomTabNavigator();

const OnBoardingFlow = () => {

  return (
    <>
        <Tab.Navigator
          screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {

              // You can return any component that you like here!
              return   <TouchableOpacity
        style={[MainScreenStyling.button, styles.button]}>
        <Text style={MainScreenStyling.darkBtnTxt}>Get access</Text>
      </TouchableOpacity>
            },
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
           headerShown: false
          })}>
        <Tab.Screen name="Signup" component={Signup} options={{ title: "Signup" }} /> 
          <Tab.Screen name="Verify" component={VerifyEmail} options={{ title: "Just one more step..." }} />
        </Tab.Navigator>
    </>
  );
};
const styles = StyleSheet.create({

  button: {
    paddingTop: 16,
    paddingBottom: 16,
   alignItems: "flex-start",
  },

});
export default OnBoardingFlow;
