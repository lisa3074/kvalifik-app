import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import Login from "../components/User/Login";
import { useNavigation } from "@react-navigation/core";
import * as SecureStore from "expo-secure-store";
import { refreshToken, restoreUser } from "./User/userStore/UserAction";
import { useDispatch } from "react-redux";

const SignUpScreen = props => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  let storedUserToken, storedUser, expiration, refreshTokenString;
  useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    console.log("useEffectt");
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

        console.log(storedUserToken);
        console.log(storedUser);
      } catch (e) {
        // Restoring token failed
        console.log("restore token failed, probably because of log out");
        console.log(e);
      }

      dispatch(restoreUser(storedUser, storedUserToken));
    };

    bootstrapAsync();
  }, []);
  return (
    <View>
      <Login storedUser={storedUser} />

      <Text
        onPress={() => {
          navigation.navigate("Signup");
        }}>
        Don't have an account? Sign up
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SignUpScreen;
