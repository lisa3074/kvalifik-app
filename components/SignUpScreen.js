import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Signup from "../components/User/Signup";
import Login from "../components/User/Login";
import Logout from "./User/Logout";

const SignUpScreen = (props, { isSignedIn }) => {
  return (
    <View>
      <Signup />
      <Text>Already have a user? Log in</Text>

      {/*    <Login /> */}
      {/*     <Logout /> */}
    </View>
  );
};

const styles = StyleSheet.create({});

export default SignUpScreen;
