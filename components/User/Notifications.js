import React, { useEffect } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/core";
import { useDispatch } from "react-redux";
import { userSignup } from "./userStore/UserAction";

const Notification = props => {
  const { signupEmail, signupPassword, isSignedin, firstname, lastname, imageUrl, studyProgramme } = props;
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleSignup = (notifications) => {
    dispatch(userSignup(signupEmail, signupPassword, firstname, lastname, imageUrl, studyProgramme, notifications));
  };

  //Don't navigate to start screen before making sure the user has gone through the userReducer and is logged in.
  useEffect(() => {
    isSignedin && navigation.navigate(props.action);
  }, [isSignedin]);

  return (
    <View>
      <Text>Notification</Text>
      <TouchableOpacity onPress={()=>handleSignup(true)}>
        <Text>Notification on</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>handleSignup(false)}>
        <Text>Maybe later</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Notification;
