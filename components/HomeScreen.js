import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import MainScreenStyling from "../styling/MainScreenStyling";
import ghost from "../static/images/ghost.png"

function HomeScreen() {
  //Rootnavigation => make sure that there are checks to see if the user has provided name/study programme, is data loaded, considered notifications, email verified,
  //react-query => library to store as in redux and mimic a real-time db
  //npm trends => see librarys that trend
  //firebase-functions => triggers cloud functions
  return (
    <View  style={styles.center}>
  
      <ImageBackground style={styles.post } source={ghost}>

        <View style={styles.textContainer}>
          <Text style={styles.heading}>CBS Film presents: Ghost World</Text>
          <Text style={styles.organization}>CBS Film</Text>
          <Text style={[MainScreenStyling.lightText, styles.date]}>Mon, 1. Apr · 15.00 - 18.00</Text>
          <Text style={styles.location}>Husets Biograf, Rådhusstræde 13, 2 th, 1466 Co…</Text>
</View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({

  post: {
    width: '100%',
    height: 180,
    
  },
  center: {
    padding: 16,
    justifyContent: 'center',
  },
  textContainer: {
    padding: 16,
    justifyContent: 'flex-end',
    height: '100%',
    backgroundColor: '#0000004d',
  },
  heading: {
    fontFamily: "Teko_500Medium",
    fontSize: 26,
    color: 'white'
  },
  date: {
    fontSize: 12,
    fontFamily: "OpenSans_700Bold"
  },
  organization: {
    color: 'white',
    fontFamily: "OpenSans_700Bold",
    fontSize: 12,
  },
  location: {
    color: 'white',
    fontSize: 12
  }
});

export default HomeScreen;
