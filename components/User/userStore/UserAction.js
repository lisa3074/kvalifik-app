import React from "react";
import User from "../../../classModels/User";
import { API } from "../../../apiKeys/apiKey";

export const SIGNUP = "SIGNUP";
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGUT";
export const REFRESH_TOKEN = "REFRESH_TOKEN";

import * as SecureStore from "expo-secure-store";

export const restoreUser = (user, token) => {
  return { type: LOGIN, payload: { user, token } };
};

export const userSignup = (email, password) => {
  console.log(email, password);
  return async dispatch => {
    const response = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
        returnSecureToken: true,
      }),
    });

    const data = await response.json(); // json to javascript
    // console.log(data);

    if (!response.ok) {
      //There was a problem..
      console.error("ERROR in response");
    } else {
      const signedUpUser = new User(data.localId, "", "", undefined, data.email);
      dispatch({ type: SIGNUP, payload: { signedUpUser, token: data.idToken } });
    }
  };
};

export const userLogin = (email, password) => {
  console.log(email, password);
  return async dispatch => {
    const response = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
        returnSecureToken: true,
      }),
    });

    const data = await response.json(); // json to javascript
    console.log(data);
    //console.log(data);
    if (!response.ok) {
      //There was a problem..
      console.error("ERROR in response");
    } else {
      const loggedInUser = new User(data.localId, "", "", undefined, data.email);

      SecureStore.setItemAsync("userToken", data.idToken);
      SecureStore.setItemAsync("user", JSON.stringify(loggedInUser));
      let expiration = new Date();
      expiration.setSeconds(expiration.getSeconds() + parseInt(data.expiresIn));
      SecureStore.setItemAsync("expiration", JSON.stringify(expiration));
      SecureStore.setItemAsync("refreshToken", data.refreshToken);
      console.log(SecureStore.getItemAsync("refreshToken"));

      dispatch({ type: LOGIN, payload: { loggedInUser, token: data.idToken } });
    }
  };
};

export const refreshToken = refreshToken => {
  return async dispatch => {
    // redux thunk
    console.log("refreshToken");
    console.log(refreshToken);
    const response = await fetch(`https://securetoken.googleapis.com/v1/token?key=${API}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        //javascript to json
        //key value pairs of data you want to send to server
        // ...

        refresh_token: refreshToken,
        grant_type: "refresh_token",
      }),
    });

    const data = await response.json(); // json to javascript
    console.log("Data after refresh token");
    console.log(data);
    if (!response.ok) {
      //There was a problem..
    } else {
      dispatch({ type: REFRESH_TOKEN, payload: data.id_token });
    }
  };
};

export const userLogout = () => {
  SecureStore.setItemAsync("userToken", "");
  SecureStore.setItemAsync("user", "");
  SecureStore.setItemAsync("expiration", "");
  SecureStore.setItemAsync("refreshToken", "");
  return { type: LOGOUT, payload: undefined };
};
