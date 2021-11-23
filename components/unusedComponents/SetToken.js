//UserAction.js ?
/* import React, { useEffect } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import { userLogin } from "./userStore/UserAction";
import { refreshToken, restoreUser } from "./userStore/UserAction";
import * as SecureStore from "expo-secure-store";

const SetToken = props => {
  const dispatch = useDispatch();
  useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken, user, expiration, refreshTokenString;

      try {
        expiration = new Date(JSON.parse(await SecureStore.getItemAsync("expiration")));
        // if expiration.....
        if (expiration < new Date()) {
          // then it is expired
          console.log("refresh token");
          refreshTokenString = await SecureStore.getItemAsync("refreshToken");
          dispatch(refreshToken(refreshTokenString));
        }
        console.log("no refresh token");
        userToken = await SecureStore.getItemAsync("userToken");
        user = JSON.parse(await SecureStore.getItemAsync("user"));
      } catch (e) {
        // Restoring token failed
        console.log("restore token failed");
        console.log(e);
      }

      dispatch(restoreUser(user, userToken));
    };

    bootstrapAsync();
  }, []);
};

const styles = StyleSheet.create({});

export default SetToken;
 */
