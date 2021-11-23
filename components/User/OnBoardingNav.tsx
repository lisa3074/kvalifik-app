import React, { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, StyleSheet, Image } from "react-native";

import Signup from "./Signup";
import VerifyEmail from "./VerifyEmail";
import SetupProfile from "./SetupProfile";
import Notifications from "./Notifications";
import TabBarBottom from "../TabBarBottom";
import { useSelector } from "react-redux";

const Stack = createNativeStackNavigator();
interface Props{
  isSignedIn: boolean;
  action: string;
  second_action: string;
  screen: string;
}


const OnBoardingNav = ({ isSignedIn, action, second_action, screen }: Props) => {
  
  interface States {
    signupEmail: string;
    setSignupEmail: (arg: boolean) => void;
    signupPassword: string;
    setSignupPassword: (arg: boolean) => void;
    firstname: string;
    setFirstname: (arg: boolean) => void;
    lastname: string;
    setLastname: (arg: boolean) => void;
    imageUrl: string;
    setImageUrl: (arg: boolean) => void;
    studyProgramme: string;
    setStudyProgramme: (arg: boolean) => void;
  }

  let [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [imageUrl, setImageUrl] = useState("placeholder.png");
  const [studyProgramme, setStudyProgramme] = useState("");
  
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
            actionLogin={action}
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
            action={"TabBarBottom"}
          />
        )}
      </Stack.Screen>
  
      <Stack.Screen name="TabBarBottom" options={{ title: "TabBarBottom" }}>
        {props => <TabBarBottom />}
        </Stack.Screen>

    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({});
export default OnBoardingNav;
