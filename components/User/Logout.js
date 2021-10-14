import React from "react";
import { View, Text, Button, StyleSheet, TextInput } from "react-native";
import { useDispatch } from "react-redux";
import { userLogout } from "./userStore/UserAction";

const Logout = props => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(userLogout());
    localStorage.clear();
  };

  return (
    <View>
      <View>
        <Text>Log out</Text>
      </View>
      <Button title="Log out" onPress={handleLogout}></Button>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Logout;
