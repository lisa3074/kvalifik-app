import React, { useState } from "react";
import { View, StyleSheet, TextInput, Text } from "react-native";
import { useFonts, OpenSans_400Regular, OpenSans_700Bold } from "@expo-google-fonts/open-sans";
import { Teko_500Medium } from "@expo-google-fonts/teko";


interface Props{
  label: string,
  placeholder: string,
  text: string,
  error: string,
  valid: boolean,
  setText: (arg: string) => void
}

const Input = ({ text, setText, label, placeholder, error, valid }: Props) => {
  const [isActive, setIsActive] = useState(false);
  const [isValid, setIsValid] = useState(valid);

    useFonts({
    OpenSans_400Regular,
    OpenSans_700Bold,
    Teko_500Medium,
   });

  const handleInput = (input:string) => {
    setIsActive(true);
    setText(input)
    input == '' ? setIsValid(false) : setIsValid(true);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.labelStyle}>{label}</Text>
      <TextInput style={ styles.input} onChangeText={handleInput} value={text} placeholder={placeholder} onBlur={()=>setIsActive(true)}/>
      {!isValid && isActive && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};
const CBS_blue = '#32305D';
const CBS_border = '#EEEEEE';
const styles = StyleSheet.create({
  container: {
    borderBottomColor: CBS_border,
    borderBottomWidth: 1,
    padding: 16,
    paddingTop: 8,
    paddingBottom: 8
},
  labelStyle: {
    color: CBS_blue,
    textTransform: 'uppercase',
    fontFamily: 'OpenSans_700Bold',
    fontSize: 12,
    paddingBottom: 8
  },
  input: {
    fontFamily: 'OpenSans_400Regular',
    fontSize: 14
  },
  error: {color: 'red'}
  
});

export default Input;
