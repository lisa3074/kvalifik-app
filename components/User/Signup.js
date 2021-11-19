import React, { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { userSignup } from "./userStore/UserAction";
import Input from "../reusableComponents/Input";
import MainScreenStyling from "../../styling/MainScreenStyling";
import Checkbox from '../reusableComponents/Checkbox';
import { useNavigation } from "@react-navigation/core";


const Signup = (props) => {
  const { signupEmail, setSignupEmail, signupPassword, setSignupPassword } = props;
  const navigation = useNavigation();
/*   const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState(""); */
  const [matchPassword, setMatchPassword] = useState("");
    const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isMatchPasswordValid, setIsMatchPasswordValid] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const [isChecked, setIsChecked] = useState(false);
  const [isTouched, setIsTouched] = useState(false);
  const dispatch = useDispatch();
  
  const handleSignup = () => {
    dispatch(userSignup(signupEmail, signupPassword));
  };

  useEffect(
    function handleSignupBtn() {
      isEmailValid && isPasswordValid && isMatchPasswordValid && isChecked ? setIsDisabled(false) : setIsDisabled(true);
      isEmailValid && isPasswordValid && isMatchPasswordValid && isChecked && setIsTouched(false);
    },
    [isEmailValid, isPasswordValid, isChecked, isMatchPasswordValid]
  );
  
  const handleSubmit = () => {
    isDisabled ? setIsTouched(true) : navigation.navigate(props.action);
  }

  const termsAndConditions = (
    <Text>"I agree to the <Text style={styles.underline}>terms & conditions"</Text></Text>
  )
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.heading}>Sign up to get access</Text>
      </View>
      <View style={styles.inputContainer}>
        <Input
          placeholder={"Choose your email"}
          label={"E-mail"}
          text={signupEmail}
          error={"You need to fill out your email"}
          isValid={isEmailValid}
          setIsValid={setIsEmailValid}
          setText={setSignupEmail}
        />
        <Input
          placeholder={"Choose your password"}
          label={"Password"}
          text={signupPassword}
          error={"You need to fill out a password"}
          isValid={isPasswordValid}
          setIsValid={setIsPasswordValid}
          setText={setSignupPassword}
        />
        <Input
          placeholder={"Repeat your password"}
          label={"Repeat password"}
          text={matchPassword}
          error={"Repeat the password"}
          isValid={isMatchPasswordValid}
          setIsValid={setIsMatchPasswordValid}
          setText={setMatchPassword}
        />
      </View>
      <Text style={styles.alignCenter}>Forgot password?</Text>
      <Checkbox
        label={termsAndConditions}
        isChecked={isChecked}
        setIsChecked={setIsChecked}
        type={'check'}
        error={"You need to agree to our terms and conditions"}
      />
      
      <TouchableOpacity
        style={[MainScreenStyling.button, styles.button, isDisabled && styles.disabled]}
        onPress={handleSubmit}>
       {/*  onPress={isDisabled ? handleDisabled : handleSignup}> */}
        <Text style={MainScreenStyling.darkBtnTxt}>Get access</Text>
      </TouchableOpacity>
         {/* Show only error text if */}
      {isDisabled && isTouched && (!isEmailValid || !isPasswordValid || !isMatchPasswordValid || !isChecked) && <Text style={styles.error}>You need to fill out all fields and agree to our terms & conditions.</Text>}
    </View>
  );
};

const CBS_blue = '#32305D';
const CBS_blue_text = '#5050A5'
const CBS_border = '#EEEEEE';
const CBS_disabled = '#BABADD';
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: '100%'
  },
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
  },
  disabled: {
    backgroundColor: CBS_disabled
  },
  underline: {
    textDecorationLine: 'underline',
  },
    error: {
    color: 'red',
    marginTop: 8,
  },
});
export default Signup;
