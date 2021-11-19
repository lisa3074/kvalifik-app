import React, { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, StyleSheet, Image } from "react-native";

import Signup from "./Signup";
import VerifyEmail from "./VerifyEmail";
import SetupProfile from "./SetupProfile";
import Notifications from "./Notifications";
import StartNav from "../../StartNav";

const Stack = createNativeStackNavigator();

const OnBoardingNav = props => {
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [imageUrl, setImageUrl] = useState("placeholder.png");
  const [studyProgramme, setStudyProgramme] = useState("");
  const { isSignedIn } = props;

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="OnBoarding" options={{ title: "OnBoarding" }}>
        {props => (
          <Signup
            signupEmail={signupEmail}
            signupPassword={signupPassword}
            setSignupEmail={setSignupEmail}
            setSignupPassword={setSignupPassword}
            action={"VerifyEmail"}
          />
        )}
      </Stack.Screen>
      <Stack.Screen name="VerifyEmail" options={{ title: "VerifyEmail" }}>
        {props => <VerifyEmail action={"SetupProfile"} />}
      </Stack.Screen>
      <Stack.Screen name="SetupProfile" options={{ title: "SetupProfile" }}>
        {props => (
          <SetupProfile
            firstname={firstname}
            setFirstname={setFirstname}
            lastname={lastname}
            setLastname={setLastname}
            imageUrl={imageUrl}
            setImageUrl={setImageUrl}
            studyProgramme={studyProgramme}
            setStudyProgramme={setStudyProgramme}
            action={"Notifications"}
          />
        )}
      </Stack.Screen>
      <Stack.Screen name="Notifications" options={{ title: "Notifications" }}>
        {props => (
          <Notifications
            isSignedIn={isSignedIn}
            signupEmail={signupEmail}
            signupPassword={signupPassword}
            firstname={firstname}
            lastname={lastname}
            imageUrl={imageUrl}
            studyProgramme={studyProgramme}
            action={"StartNav"}
          />
        )}
      </Stack.Screen>
      <Stack.Screen name="StartNav" options={{ title: "StartNav" }}>
        {props => <StartNav />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({});
export default OnBoardingNav;
