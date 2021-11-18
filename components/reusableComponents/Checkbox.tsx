import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { useFonts, OpenSans_400Regular, OpenSans_700Bold } from "@expo-google-fonts/open-sans";
import { Teko_500Medium } from "@expo-google-fonts/teko";
import { TouchableOpacity } from "react-native-gesture-handler";

interface Props {
  label: string;
  isChecked: boolean;
  error: string;
  setIsChecked: (arg: boolean) => void;
}

const Input = ({ label, isChecked, setIsChecked, error }: Props) => {
  const [isTouched, setIsTouched] = useState(false);

  useFonts({
    OpenSans_400Regular,
    OpenSans_700Bold,
    Teko_500Medium,
  });

  const toggleCheckbox = (checked: boolean) => {
    setIsChecked(checked);
    setIsTouched(true);
  };

    return (
      <View>
        <View style={styles.container}>
          <TouchableOpacity
            style={[styles.checkContainer, isChecked ? styles.checked : styles.checkContainer]}
            onPress={() => toggleCheckbox(!isChecked)}>
            <Text style={styles.v}>✓</Text>
          </TouchableOpacity>
          <Text style={styles.labelStyle}>{label}</Text>
        </View>
        {!isChecked && isTouched && <Text style={styles.error}>{error}</Text>}
      </View>
    );
};
const CBS_blue = "#32305D";
const CBS_border = "#EEEEEE";
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
  checkContainer: {
    width: 25,
    height: 25,
    borderRadius: 5,
    borderColor: CBS_blue,
    borderWidth: 1,
    justifyContent: "center",
      alignContent: "center",
      marginRight: 8,
  },
  checked: {
    backgroundColor: CBS_blue,
  },
  v: {
    color: "white",
    textAlign: "center",
    fontWeight: "600",
  },

  labelStyle: {
    color: CBS_blue,
    fontFamily: "OpenSans_400Regular",
    fontSize: 10,

  },

  error: {
    color: "red",
      fontSize: 13,
    marginTop: 8,
  },
});

export default Input;
