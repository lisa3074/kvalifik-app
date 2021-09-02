import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import MainScreenStyling from "../../styling/MainScreenStyling";

function ChatRoom({ navigation }) {
  return (
    <>
      <View style={MainScreenStyling.center}>
        <Text>Choose conversation</Text>
      </View>
      <View style={MainScreenStyling.center}>
        <TouchableOpacity style={MainScreenStyling.button} onPress={() => navigation.navigate("Screen1")}>
          <Text style={MainScreenStyling.text}>Chat with Peter</Text>
        </TouchableOpacity>
        <TouchableOpacity style={MainScreenStyling.button} onPress={() => navigation.navigate("Screen2")}>
          <Text style={MainScreenStyling.text}>Chat with Lasse</Text>
        </TouchableOpacity>
        <TouchableOpacity style={MainScreenStyling.button} onPress={() => navigation.navigate("Screen3")}>
          <Text style={MainScreenStyling.text}>Chat with Christina</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({});

export default ChatRoom;
