import React from "react";
import User from "../../../classModels/User";
import { API } from "../../../apiKeys/apiKey";

export const SIGNUP = "SIGNUP";
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGUT";

export const userSignup = (email, password) => {
  console.log(email, password);
  return async dispatch => {
    const response = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        //javascript to json
        //key value pairs of data you want to send to server
        // ...
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
        //javascript to json
        //key value pairs of data you want to send to server
        // ...
        email: email,
        password: password,
        returnSecureToken: true,
      }),
    });

    const data = await response.json(); // json to javascript
    //console.log(data);

    if (!response.ok) {
      //There was a problem..
      console.error("ERROR in response");
    } else {
      const loggedInUser = new User(data.localId, "", "", undefined, data.email);
      dispatch({ type: LOGIN, payload: loggedInUser });
    }
  };
};

export const userLogout = () => {
  return { type: LOGOUT, payload: undefined };
};
