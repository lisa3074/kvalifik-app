import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { TouchableOpacity } from "react-native-gesture-handler";
import MainScreenStyling from "../../styling/MainScreenStyling";
import Input from "../reusableComponents/Input";
import { useSelector } from "react-redux";

const EditProfile = props => {
  const loggedInUser = useSelector(state => state.user.loggedInUser);

  const [firstName, setFirstName] = useState(loggedInUser.firstname);
  const [isFirstNameValid, setIsFirstNameValid] = useState(true);
    const [lastName, setLastName] = useState(loggedInUser.lastname);
  const [isLastNameValid, setIsLastNameValid] = useState(true);
  const [programme, setProgramme] = useState(loggedInUser.studyProgramme);
    const [isProgrammValid, setIsProgrammValid] = useState(true);
     const [isDisabled, setIsDisabled] = useState(true);
    const [isTouched, setIsTouched] = useState(false);
    
      const handleDisabled = () => {
    setIsTouched(true);
      };
    
      useEffect(
    function handleLoginBtn() {
      //if password or email is not valid, set login button to disabled
      isFirstNameValid && isLastNameValid && isProgrammValid ? setIsDisabled(false) : setIsDisabled(true);
      //if password and email is valid, reset isTouched on button
   isFirstNameValid && isLastNameValid && isProgrammValid && setIsTouched(false);
    },
    [isFirstNameValid, isLastNameValid, isProgrammValid]
  );
    
  const navigation = useNavigation();
  const HandleSave = () => {
    console.log("handleSave");
    navigation.navigate(props.action);
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.flex}>
        <View>
          <Text style={styles.labelStyle}>PROFILE PICTURE</Text>
          <TouchableOpacity style={MainScreenStyling.button}>
            <Text style={MainScreenStyling.darkBtnTxt}>Upload</Text>
          </TouchableOpacity>
        </View>
        <Image style={styles.profilePicture} /* source={} */ />
      </View>
      <View style={styles.input}>
        <Input
          label={"What is your first name?"}
          placeholder={"Type your first name"}
          text={firstName}
          setText={setFirstName}
          isValid={isFirstNameValid}
          setIsValid={setIsFirstNameValid}
          error={""}
        />
      </View>
      <View style={styles.input}>
        <Input
          label={"What is your last name?"}
          placeholder={"Type your last name"}
          text={lastName}
          setText={setLastName}
          isValid={isLastNameValid}
          setIsValid={setIsLastNameValid}
          error={""}
        />
      </View>
      <View style={[styles.input, styles.inputHigh]}>
        <Input
          label={"Study programme"}
          placeholder={"Type your study programme"}
          text={programme}
          setText={setProgramme}
          isValid={isProgrammValid}
          setIsValid={setIsProgrammValid}
          error={""}
        />
      </View>
            {isDisabled && isTouched && (!isFirstNameValid || !isLastNameValid || isProgrammValid) && (
        <Text style={styles.error}>You need to fill out all fields</Text>
      )}
      <TouchableOpacity style={[MainScreenStyling.button, styles.save, isDisabled && styles.disabled]} onPress={isDisabled ? handleDisabled : HandleSave}>
        <Text style={MainScreenStyling.darkBtnTxt}>Save changes</Text>
          </TouchableOpacity>
    </ScrollView>
  );
};

const CBS_blue = '#32305D';
const CBS_disabled = "#BABADD";
const styles = StyleSheet.create({
  container: {
    height: "100%",
        padding: 16,
    paddingTop: 0

  },
  profilePicture: {
    width: 70,
    height: 70,
    borderRadius: 100,
    marginRight: 16,
    borderColor: "black",
    borderWidth: 1,
  },
  flex: {
    flexDirection: "row",
      justifyContent: "space-between",
      height: 150,
    alignItems: 'center'
  },
  save: {
    height: 60,
    padding: 24,
    alignItems: "flex-start",
  },
  input: {
      marginBottom: 24,
      height: 70,
    borderRadius: 5,
    shadowColor: "#AAAAAA",
    shadowOpacity: 0.3,
    shadowRadius: 3,
    shadowOffset: {
      height: 0,
      width: 3,
    },
    },
    inputHigh: {
      height: 92
    },
      labelStyle: {
    color: CBS_blue,
    textTransform: 'uppercase',
    fontFamily: 'OpenSans_700Bold',
    fontSize: 12,
    },
        disabled: {
    backgroundColor: CBS_disabled,
  },
  error: {
    color: "red",
    marginTop: 8,
  },
});

export default EditProfile;
