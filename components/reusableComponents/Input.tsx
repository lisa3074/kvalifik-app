import React, { useState } from "react";
import { View, StyleSheet, TextInput, Text } from "react-native";

/* 
###### TO USE ######
import Input from '../reusableComponents/Input';'
const [email, setEmail] = useState("");
const [isEmailValid, setIsEmailValid] = useState(false);

       <Input
          label={"string"} // name on the label
          placeholder={"string"} // text in placeholder
          text={email} //state variable declared in parent component
          setText={setEmail} //changing function declared in parent component
          isValid={isEmailValid} //state variable declared in parent component
          setIsValid={setIsEmailValid} //changing function declared in parent component
          error={"string"} // error message
        />
*/

interface Props {
  label: string;
  placeholder: string;
  text: string;
  setText: (arg: string) => void;
  isValid: boolean;
  setIsValid: (arg: boolean) => void;
  error: string;
}

const Input = ({ text, setText, label, placeholder, error, isValid, setIsValid }: Props) => {
  const [isActive, setIsActive] = useState(false);

  const handleInput = (input: string) => {
    setIsActive(true);
    setText(input);
    input == "" ? setIsValid(false) : setIsValid(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.flex}>
        <Text style={styles.labelStyle}>{label}</Text>
        {!isValid && isActive && <Text style={styles.error}> * {error}</Text>}
      </View>
      <TextInput
        autoCapitalize={"none"}
        style={styles.input}
        onChangeText={handleInput}
        value={text}
        placeholder={placeholder}
        onBlur={() => setIsActive(true)}
      />
    </View>
  );
};
const CBS_blue = "#32305D";
const CBS_border = "#EEEEEE";
const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingTop: 8,
    paddingBottom: 8,
    backgroundColor: "white",
    borderRadius: 5,
    height: "100%",
  },

  labelStyle: {
    color: CBS_blue,
    textTransform: "uppercase",
    fontFamily: "OpenSans_700Bold",
    fontSize: 12,
    paddingBottom: 8,
  },
  input: {
    fontFamily: "OpenSans_400Regular",
    fontSize: 14,
  },
  error: {
    color: "red",
  },
  flex: {
    flexDirection: "row",
  },
});

export default Input;
