import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Signup from "../components/User/Signup";

import { useNavigation } from "@react-navigation/core";

const SignUpScreen = props => {
  const navigation = useNavigation();
  return (
    <View>
      <Signup />
      <Text
        onPress={() => {
          navigation.navigate("Login");
        }}>
        Already have a user? Log in
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SignUpScreen;
