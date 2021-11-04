import React from "react";
import User from "../../../classModels/User";
import { API } from "../../../apiKeys/apiKey";
import * as SecureStore from "expo-secure-store";

export const SIGNUP = "SIGNUP";
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGUT";
export const REFRESH_TOKEN = "REFRESH_TOKEN";

const endpointUsers = "https://kvalifik-bf2c3-default-rtdb.europe-west1.firebasedatabase.app/users.json?auth=";

export const restoreUser = (loggedInUser, token) => {
  return { type: LOGIN, payload: { loggedInUser, token } };
};

export const userSignup = (email, password) => {
  // console.log(email, password);
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

    const data = await response.json();

    if (!response.ok) {
      console.error("ERROR in response (userSignup)");
    } else {
      PostUserToDb(data);
      const signedUpUser = new User(data.localId, "", "", undefined, data.email);
      dispatch({ type: SIGNUP, payload: { signedUpUser, token: data.idToken } });
      setSecureStore(data, signedUpUser);
    }
  };
};

const PostUserToDb = data => {
  return async getState => {
    const token = getState().user.token;
    console.log(`${endpointUsers}${token}`);
    const response = await fetch(`${endpointUsers}${token}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: data.localId,
        firstname: "",
        lastname: "",
        imageUrl: undefined,
        email: data.email,
        studyProgramme: "",
      }),
    });
    const data2 = await response.json();
    if (!response.ok) {
      console.error("ERROR in response (PostUserToDb)");
    }
  };
};

export const userLogin = (email, password) => {
  //console.log(email, password);
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

    const data = await response.json();
    if (!response.ok) {
      console.error("ERROR in response");
    } else {
      const loggedInUser = new User(data.localId, "", "", undefined, data.email);
      setSecureStore(data, loggedInUser);
      dispatch({ type: LOGIN, payload: { loggedInUser, token: data.idToken } });
    }
  };
};

export const refreshToken = refreshToken => {
  return async dispatch => {
    console.log("refreshToken");
    console.log("DATA refresh " + refreshToken);
    const response = await fetch(`https://securetoken.googleapis.com/v1/token?key=${API}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        refresh_token: refreshToken,
        grant_type: "refresh_token",
      }),
    });

    const data = await response.json();
    console.log("Data after refresh token");

    if (!response.ok) {
      console.error("error: " + response);
    } else {
      dispatch({ type: REFRESH_TOKEN, payload: data.id_token });
    }
  };
};

const setSecureStore = (data, user) => {
  SecureStore.setItemAsync("userToken", data.idToken);
  SecureStore.setItemAsync("user", JSON.stringify(user));
  let expiration = new Date();
  expiration = expiration.setSeconds(expiration.getSeconds() + parseInt(data.expiresIn));
  SecureStore.setItemAsync("expiration", JSON.stringify(expiration));
  SecureStore.setItemAsync("refreshToken", data.refreshToken);
};

export const userLogout = () => {
  SecureStore.deleteItemAsync("refreshToken");
  SecureStore.deleteItemAsync("expiration");
  SecureStore.deleteItemAsync("user");
  SecureStore.deleteItemAsync("userToken");
  return { type: LOGOUT, payload: undefined };
};
