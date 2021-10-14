import React from "react";
import TabBarBottom from "./components/TabBarBottom";
import { useSelector } from "react-redux";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SignUpScreen from "./components/SignUpScreen";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

const StartNav = () => {
  //MyNav.js

  const isSignedIn = useSelector(state => state.user.loggedInUser);

  return isSignedIn ? (
    <TabBarBottom />
  ) : (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Signup">
          {/*  to pass props through stack navigator, use this syntax */}
          {props => <SignUpScreen {...props} isSignedIn={isSignedIn} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default StartNav;
