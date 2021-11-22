import React, { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/core";
import Input from "../reusableComponents/Input";
import MainScreenStyling from "../../styling/MainScreenStyling";

const SetupProfile = props => {
  const { firstname, setFirstname, lastname, setLastname, imageUrl, setImageUrl, studyProgramme, setStudyProgramme } =
    props;
  const navigation = useNavigation();
  const [isFirstnameValid, setIsFirstNameValid] = useState(false);
  const [isLastnameValid, setIsLastNameValid] = useState(false);
  const [isStudyProgrammeValid, setIsStudyProgrammeValid] = useState(false);
  const [isImageUrlValid, setIsImageUrlValid] = useState(true);
  const [isDisabled, setIsDisabled] = useState(true);
  const [isTouched, setIsTouched] = useState(false);

  const handleSubmit = () => {
    console.log("handleSubmit");
    isDisabled ? setIsTouched(true) : navigation.navigate(props.action);
  };

  useEffect(
    function handleSignupBtn() {
      isFirstnameValid && isLastnameValid && isStudyProgrammeValid && isImageUrlValid
        ? setIsDisabled(false)
        : setIsDisabled(true);
      isFirstnameValid && isLastnameValid && isStudyProgrammeValid && isImageUrlValid && setIsTouched(false);
    },
    [isFirstnameValid, isLastnameValid, isStudyProgrammeValid, isImageUrlValid]
  );
  return (
    <View>
      <Text>Before we start...</Text>
      <View style={styles.input}>
        <Input
          placeholder={"First name"}
          label={"What is your first name?"}
          text={firstname}
          error={"You need to fill out your first name"}
          isValid={isFirstnameValid}
          setIsValid={setIsFirstNameValid}
          setText={setFirstname}
        />
      </View>
      <View style={styles.input}>
        <Input
          placeholder={"Last name"}
          label={"What is your last name?"}
          text={lastname}
          error={"You need to fill out your first name"}
          isValid={isLastnameValid}
          setIsValid={setIsLastNameValid}
          setText={setLastname}
        />
      </View>
      <View style={styles.input}>
        <Input
          placeholder={"Study programme"}
          label={"What do you study?"}
          text={studyProgramme}
          error={"You need to fill out your study programme"}
          isValid={isStudyProgrammeValid}
          setIsValid={setIsStudyProgrammeValid}
          setText={setStudyProgramme}
        />
      </View>

      <TouchableOpacity
        style={[MainScreenStyling.button, styles.button, isDisabled && styles.disabled]}
        onPress={handleSubmit}>
        <Text style={MainScreenStyling.darkBtnTxt}>Next</Text>
      </TouchableOpacity>
      {/* Show only error text if */}
      {isDisabled &&
        isTouched &&
        (!isFirstnameValid || !isLastnameValid || !isStudyProgrammeValid || !isImageUrlValid) && (
          <Text style={styles.error}>You need to fill out all fields to proceed.</Text>
        )}
    </View>
  );
};

const CBS_disabled = "#BABADD";
const styles = StyleSheet.create({
  button: {
    paddingTop: 16,
    paddingBottom: 16,
    alignItems: "flex-start",
  },
  input: {
    height: 60,
  },
  disabled: {
    backgroundColor: CBS_disabled,
  },
  error: {
    color: "red",
    marginTop: 8,
  },
});

export default SetupProfile;
