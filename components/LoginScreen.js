import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Login from "../components/User/Login";
import { useNavigation } from "@react-navigation/core";
import * as SecureStore from "expo-secure-store";
import { refreshToken, restoreUser } from "./User/userStore/UserAction";
import { useDispatch } from "react-redux";
import { useFonts, OpenSans_400Regular, OpenSans_700Bold } from "@expo-google-fonts/open-sans";
import { Teko_500Medium } from "@expo-google-fonts/teko";
import  logo from '../static/images/CBS_logo.png';

const SignUpScreen = props => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

   useFonts({
    OpenSans_400Regular,
    OpenSans_700Bold,
    Teko_500Medium,
   });
  
  let storedUserToken, storedUser, expiration, refreshTokenString;
  useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      try {
        expiration = new Date(JSON.parse(await SecureStore.getItemAsync("expiration")));
        // if expiration.....
        console.log(expiration + " " + new Date());
        if (expiration < new Date()) {
          // then it is expired
          refreshTokenString = await SecureStore.getItemAsync("refreshToken");
          console.log("refreshTokenString " + refreshTokenString);
          dispatch(refreshToken(refreshTokenString));
        }
        console.log("no need for refresh token");
        storedUserToken = await SecureStore.getItemAsync("userToken");
        storedUser = JSON.parse(await SecureStore.getItemAsync("user"));
      } catch (err) {
        // Restoring token failed
        console.log("restore token failed, probably because of log out");
        console.log(err);
      }

      dispatch(restoreUser(storedUser, storedUserToken));
    };

    bootstrapAsync();
  }, []);
  return (
    <View style={styles.login}>
      <Image source={logo} style={styles.logo}/>
      <Login storedUser={storedUser} />

      <Text
        onPress={() => {
          navigation.navigate("Signup");
        }} style={styles.alignCenter}>
        Don't have an account? <Text style={styles.bold}>Sign up</Text>
      </Text>
    </View>
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

export default SignUpScreen;
