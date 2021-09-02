import React from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import MainScreenStyling from "../../styling/MainScreenStyling";

const DiscoverScreen = ({ navigation }) => {
  return (
    <View style={MainScreenStyling.center}>
      <Text>Discover</Text>
      {/*  <Button title="Go to Discover" onPress={() => navigation.navigate("Discover")} /> */}
      {/*    <TouchableOpacity style={MainScreenStyling.button} onPress={() => navigation.navigate("Home")}>
        <Text style={MainScreenStyling.text}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={MainScreenStyling.button} onPress={() => navigation.navigate("Chat")}>
        <Text style={MainScreenStyling.text}>Chat</Text>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({});

export default DiscoverScreen;
