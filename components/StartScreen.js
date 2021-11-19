import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import logo from '../static/images/CBS_logo.png'
import { useNavigation } from "@react-navigation/core";
import Login from "./User/Login";
import Signup from "./User/Signup";
import OnBoardingNav from "./User/OnBoardingNav";

const StartScreen = props => {
  const navigation = useNavigation();
  return (
        <View style={styles.login}>
      <Image source={logo} style={styles.logo}/>
      {props.screen === "Login" ? <Login /> : <OnBoardingNav isSignedIn={props.isSignedIn}/>}
          <Text onPress={() => {
          navigation.navigate(props.action);
          }} style={styles.alignCenter}>    
            {props.actionText }
        </Text>
    </View>
  );
};

const CBS_blue_text = '#5050A5';
const styles = StyleSheet.create({
  login: {
    backgroundColor: 'white',
    height: '100%',
    padding: 16,
    paddingTop: 50
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

export default StartScreen;
