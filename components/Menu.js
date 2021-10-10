import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import Signup from "../components/User/Signup";
import Login from "../components/User/Login";

const Menu = props => {
  return (
    <View>
      <Text>Menu</Text>
      <Signup />
      <Login />
    </View>
  );
};

const styles = StyleSheet.create({});

export default Menu;
