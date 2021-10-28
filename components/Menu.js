import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Signup from "../components/User/Signup";
import Login from "../components/User/Login";
import Logout from "./User/Logout";

const Menu = props => {
  return (
    <View>
      <Text>Menu</Text>
      <Signup />
      <Login />
      <Logout />
    </View>
  );
};

const styles = StyleSheet.create({});

export default Menu;
