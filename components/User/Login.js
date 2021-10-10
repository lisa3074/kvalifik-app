import React, { useState } from "react";
import { View, Text, Button, StyleSheet, TextInput } from "react-native";
import { useDispatch } from "react-redux";
import { login } from "./userStore/userAction";

const Login = props => {
  const [loginEmail, setLoginEmail] = useState("");
  const [LoginPassword, setLoginPassword] = useState("");
  const dispatch = useDispatch();

  const handleLogin = () => {
    console.log(loginEmail, LoginPassword);
    dispatch(login(loginEmail, LoginPassword));
  };

  return (
    <View>
      <View>
        <Text>Log in</Text>
      </View>

      <TextInput onChangeText={mail => setLoginEmail(mail)} value={loginEmail} placeholder="Enter your email" />
      <TextInput onChangeText={psw => setLoginPassword(psw)} value={LoginPassword} placeholder="Enter your password" />
      <Button title="sign in" onPress={handleLogin}></Button>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Login;
