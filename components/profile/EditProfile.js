import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/core";
import MainScreenStyling from "../../styling/MainScreenStyling";
import Input from "../reusableComponents/Input";
import { useSelector, useDispatch } from "react-redux";
import { editUser, deleteUser } from "../User/userStore/UserAction";
import ProfileImage from "../reusableComponents/ProfileImage";

const EditProfile = props => {
  const loggedInUser = useSelector(state => state.user.loggedInUser);
  const token = useSelector(state => state.user.token);
  const dispatch = useDispatch();

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
  const handleDelete = () => {
    console.log("handleDelete");
    dispatch(deleteUser(token, loggedInUser.id));
  };

  useEffect(
    function handleEditBtn() {
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
    dispatch(editUser(firstName, lastName, programme, loggedInUser.id, token));
    navigation.navigate(props.action);
  };

  return (
    <ScrollView style={styles.container}>
      <ProfileImage />
      <View style={MainScreenStyling.input}>
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
      <View style={MainScreenStyling.input}>
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
      <View style={[MainScreenStyling.input, styles.inputHigh]}>
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
        <Text style={MainScreenStyling.error}>You need to fill out all fields</Text>
      )}
      <TouchableOpacity
        style={[MainScreenStyling.button, styles.save, isDisabled && MainScreenStyling.disabled]}
        onPress={isDisabled ? handleDisabled : HandleSave}>
        <Text style={MainScreenStyling.darkBtnTxt}>Save changes</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[MainScreenStyling.button, styles.delete]} onPress={handleDelete}>
        <Text style={[MainScreenStyling.lightBtnTxt, styles.deleteText]}>Delete profile</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    padding: 16,
    paddingTop: 0,
  },
  save: {
    height: 60,
    padding: 24,
    alignItems: "flex-start",
  },
  inputHigh: {
    height: 92,
    marginBottom: 16,
  },
  delete: {
    backgroundColor: "white",
    height: 60,
    padding: 24,
    alignItems: "flex-start",
    marginTop: 24,
    marginBottom: 24,
  },
  deleteText: {
    color: "#B10024",
  },
});

export default EditProfile;
