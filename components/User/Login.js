import React, { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet, TextInput } from "react-native";
import { useDispatch } from "react-redux";
import SetToken from "./SetToken";
import { postUserToDb, userLogin } from "./userStore/UserAction";
import { refreshToken, restoreUser } from "./userStore/UserAction";
import * as SecureStore from "expo-secure-store";

const Login = props => {
  const { storedUser } = props;
  const [loginEmail, setLoginEmail] = useState("");
  const [LoginPassword, setLoginPassword] = useState("");
  const dispatch = useDispatch();

  const handleLogin = () => {
    //dispatch(userLogin(loginEmail, LoginPassword));
    dispatch(userLogin("hey@hey.dk", "password"));
  };

  //SetToken();

  return (
    <View>
      <View>
        <Text>Log in</Text>
      </View>

      <TextInput onChangeText={mail => setLoginEmail(mail)} value={loginEmail} placeholder="Enter your email" />
      <TextInput onChangeText={psw => setLoginPassword(psw)} value={LoginPassword} placeholder="Enter your password" />
      <Button title="Log in" onPress={handleLogin}></Button>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Login;
