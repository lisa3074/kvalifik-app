import React, { useState } from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { userSignup, postUserToDb } from "./userStore/UserAction";
import Input from "../reusableComponents/Input";
import MainScreenStyling from "../../styling/MainScreenStyling";

const Signup = props => {
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const dispatch = useDispatch();

  const handleSignup = () => {
    dispatch(userSignup(signupEmail, signupPassword));
  };

  return (
    <View>
      <View>
        <Text style={styles.heading}>Sign up to get access</Text>
      </View>
      <View style={styles.inputContainer}>
        <Input
          placeholder={"Choose your email"}
          label={"E-mail"}
          text={signupEmail}
          error={"You need to fill out your email"}
          valid={false}
          setText={setSignupEmail}
        />
        <Input
          placeholder={"Choose your password"}
          label={"Password"}
          text={signupPassword}
          error={"You need to fill out a password"}
          valid={false}
          setText={setSignupPassword}
        />
      </View>
      <Text style={styles.alignCenter}>Forgot password?</Text>
      <TouchableOpacity style={[MainScreenStyling.button, styles.button]} onPress={handleSignup}>
        <Text style={MainScreenStyling.darkBtnTxt}>Get access</Text>
      </TouchableOpacity>
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
export default Signup;
