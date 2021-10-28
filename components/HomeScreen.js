import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MainScreenStyling from "../styling/MainScreenStyling";
import Logout from "./User/Logout";

function HomeScreen() {
  //Rootnavigation => make sure that there are checks to see if the user has provided name/study programme, is data loaded, considered notifications, email verified,
  //react-query => library to store as in redux and mimic a real-time db
  //npm trends => see librarys that trend
  //firebase-functions => triggers cloud functions
  return (
    <View style={MainScreenStyling.center}>
      <Text>Home</Text>
      <Logout />
    </View>
  );
}

const styles = StyleSheet.create({});

export default HomeScreen;
