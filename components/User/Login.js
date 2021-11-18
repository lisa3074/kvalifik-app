import React, { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";

import SetToken from "./SetToken";
import { postUserToDb, userLogin } from "./userStore/UserAction";
import { refreshToken, restoreUser } from "./userStore/UserAction";
import * as SecureStore from "expo-secure-store";
import Input from "../reusableComponents/Input";
import MainScreenStyling from "../../styling/MainScreenStyling";

const Login = props => {
  const { storedUser } = props;
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const dispatch = useDispatch();

  console.log(storedUser)
  const handleLogin = () => {
    //dispatch(userLogin(loginEmail, loginPassword));
    dispatch(userLogin("hey@hey.dk", "password"));
  };


  //SetToken();

  return (
    <View>
      <View>
        <Text style={styles.heading}>Log in</Text>
      </View>
      <View style={styles.inputContainer}>

      <Input
        placeholder={'Write your email'}
        label={'E-mail'}
        text={loginEmail}
        error={'You need to fill out your email'}
        valid={false}
        setText={setLoginEmail}
        />
      <Input
        placeholder={'Write your password'}
        label={'Password'}
        text={loginPassword}
        error={'You need to fill out a password'}
        valid={false}
        setText={setLoginPassword}
        />
        </View>
      <Text style={styles.alignCenter}>Forgot password?</Text>
      <TouchableOpacity style={[MainScreenStyling.button, styles.button]} onPress={handleLogin}><Text style={MainScreenStyling.darkBtnTxt}>Log in</Text></TouchableOpacity>
    </View>
  );
};
const CBS_blue = '#32305D';
const CBS_blue_text = '#5050A5'
const CBS_border = '#EEEEEE';
const styles = StyleSheet.create({
  inputContainer: {
    borderColor: CBS_border,
    marginBottom: 16,
    borderWidth: 1,
    borderRadius: 5,
      shadowColor: CBS_border,
    shadowRadius: 5,
    shadowOffset: {
      height: 1,
      width: 0,
    },
  },
  alignCenter: {
    textAlign: 'center',
    marginBottom: 46,
    color: CBS_blue_text,
    fontWeight: '600',
    fontSize: 12
  },
 heading: {
      fontFamily: "Teko_500Medium",
    fontSize: 26,
   color: CBS_blue,
    paddingBottom: 16
  },
  button: {
    paddingTop: 16,
    paddingBottom: 16,
   alignItems: "flex-start",
 }
});

export default Login;
