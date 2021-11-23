import React, {useEffect} from "react";
import TabBarBottom from "./components/TabBarBottom";
import { useSelector } from "react-redux";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, StyleSheet } from "react-native"
import { NavigationContainer } from "@react-navigation/native";
import { RootState } from "./App";
import Login from "./components/User/Login";
import OnBoardingNav from "./components/User/OnBoardingNav";



const Stack = createNativeStackNavigator();

const StartNav = () => {
  //MyNav.js
  const isSignedIn = useSelector((state: RootState) => state.user.loggedInUser);

  useEffect(() => {
     console.log(isSignedIn);
}, [isSignedIn])

  return isSignedIn && isSignedIn != undefined ? (
    <TabBarBottom />
  ) : (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{
            headerShown: false
            }}>
          <Stack.Screen name="Login" options={{ title: "Log in" }}>
            {props => <Login screen={'Login'}  action={ 'Signup'}/>}
        </Stack.Screen>
          <Stack.Screen name="Signup" options={{ title: "Sign up" }}>
            {props => <OnBoardingNav isSignedIn={isSignedIn} screen={'Signup'}  action={'Login'} second_action={'VerifyEmail'}/>}
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
