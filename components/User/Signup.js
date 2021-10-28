import React, { useState } from "react";
import { View, Text, Button, StyleSheet, TextInput } from "react-native";
import { useDispatch } from "react-redux";
import { userSignup } from "./userStore/UserAction";

const Signup = props => {
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const dispatch = useDispatch();

  const handleSignup = () => {
    console.log(signupEmail, signupPassword);
    dispatch(userSignup(signupEmail, signupPassword));
  };

  return (
    <View>
      <View>
        <Text>Sign up</Text>
      </View>
      <TextInput onChangeText={mail => setSignupEmail(mail)} value={signupEmail} placeholder="Enter your email" />
      <TextInput
        onChangeText={psw => setSignupPassword(psw)}
        value={signupPassword}
        placeholder="Enter your password"
      />
      <Button title="Get access" onPress={handleSignup}></Button>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Signup;
