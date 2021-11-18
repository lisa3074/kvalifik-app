import React, { useState } from "react";
import { View, StyleSheet, TextInput, Text } from "react-native";
import { useFonts, OpenSans_400Regular, OpenSans_700Bold } from "@expo-google-fonts/open-sans";
import { Teko_500Medium } from "@expo-google-fonts/teko";


interface Props{
  label: string,
  placeholder: string,
  text: string,
  error: string,
  isValid: boolean,
  setText: (arg: string) => void
  setIsValid: (arg: boolean) => void
}

const Input = ({ text, setText, label, placeholder, error, isValid, setIsValid }: Props) => {
  const [isActive, setIsActive] = useState(false);
 /*  const [isValid, setIsValid] = useState(valid); */

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
      <View style={styles.flex}>
      <Text style={styles.labelStyle}>{label}</Text>
      {!isValid && isActive && <Text style={styles.error}> * {error}</Text>}
      </View>
      <TextInput style={ styles.input} onChangeText={handleInput} value={text} placeholder={placeholder} onBlur={()=>setIsActive(true)}/>
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
  error: { color: 'red' },
  flex: {
    flexDirection: 'row'
  }
  
});

export default Input;
