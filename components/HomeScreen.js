import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MainScreenStyling from "../styling/MainScreenStyling";
import Logout from "./User/Logout";

function HomeScreen() {
  return (
    <View style={MainScreenStyling.center}>
      <Text>Home</Text>
      <Logout />
    </View>
  );
}

const styles = StyleSheet.create({});

export default HomeScreen;
