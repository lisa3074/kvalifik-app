import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
const Button = props => {
  const { title, eventHandler, id, buttonRef } = props;

  return (
    <TouchableOpacity
      ref={buttonRef}
      style={[styles.button, title === "delete" ? styles.deleteBtn : title === "add" ? styles.addBtn : ""]}
      onPress={eventHandler.bind(this, id, buttonRef)}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};
export default Button;

const styles = StyleSheet.create({
  button: {
    width: 80,
    backgroundColor: "rgb(33, 150, 243)",
    height: 35,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    boxShadow: "3px 3px 6px #999999",
    alignSelf: "flex-end",
  },
  deleteBtn: {
    marginTop: 10,
  },
  addBtn: {
    alignSelf: "flex-start",
  },
  text: {
    color: "white",
    fontWeight: 500,
    textTransform: "uppercase",
  },
});
