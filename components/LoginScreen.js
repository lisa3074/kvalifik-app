import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Login from "../components/User/Login";
import { useNavigation } from "@react-navigation/core";

const SignUpScreen = props => {
  const navigation = useNavigation();
  return (
    <View>
      <Login />

      <Text
        onPress={() => {
          navigation.navigate("Signup");
        }}>
        Don't have an account? Sign up
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SignUpScreen;
