import React from "react";
import TabBarBottom from "./components/TabBarBottom";
import { useSelector } from "react-redux";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, StyleSheet, Image } from "react-native"
import { NavigationContainer } from "@react-navigation/native";
import { RootState } from "./App";
import StartScreen from "./components/StartScreen";


const Stack = createNativeStackNavigator();

const StartNav = () => {
  //MyNav.js

  
  const signUp = (<Text>Don't have an account? <Text style={styles.bold}>Sign up</Text></Text>);
  const logIn = (<Text>Already have a user? <Text style={styles.bold}>Log in</Text></Text>);
  const verify = (<View><Text>Having trouble?</Text><Text>Resend email</Text></View>);
  
  const isSignedIn = useSelector((state: RootState) => state.user.loggedInUser);
  return isSignedIn ? (
    <TabBarBottom />
  ) : (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{
            headerShown: false
            }}>
          <Stack.Screen name="Login" options={{ title: "Log in" }}>
            {props => <StartScreen screen={'Login'} actionText={signUp} action={ 'Signup'}/>}
        </Stack.Screen>
          <Stack.Screen name="Signup" options={{ title: "Sign up" }}>
            {props => <StartScreen screen={'Signup'} actionText={logIn} action={'Login'} second_action={'VerifyEmail'}/>}
        </Stack.Screen>
          <Stack.Screen name="VerifyEmail" options={{ title: "Just one more step..." }}>
            {props => <StartScreen  screen={'VerifyEmail'} actionText={verify} action={ 'Login'}/>}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const CBS_blue_text = '#5050A5';
const styles = StyleSheet.create({
  login: {
    backgroundColor: 'white',
    height: '100%',
    justifyContent: 'center',
    padding: 16,
  },
  alignCenter: {
    textAlign: 'center',
    paddingTop: 32,
    color: CBS_blue_text,
    fontSize: 12
  },
  bold: {
    fontWeight: '600'
  },
    logo: {
    width: 100,
    height: 100,
      borderRadius: 100,
    marginBottom: 16,
      marginRight: 8,
    alignSelf: 'center'
  },
});
export default StartNav;
