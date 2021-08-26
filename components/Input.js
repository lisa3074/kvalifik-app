import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { TextInput, StyleSheet, TouchableOpacity, Text } from "react-native";
import Button from "./Button";

const Input = props => {
  const { setTodos, buttonRef, text, setText } = props;
  //const [text, setText] = useState("");

  const handleAddTodo = () => {
    //Add the new entry to the array (new array)
    setTodos(todos => [...todos, { title: text, id: Math.random().toString() }]);
    setText("");
  };

  return (
    <>
      <TextInput style={styles.input} placeholder="Type a todo" value={text} onChangeText={setText} />
      <Button title="add" eventHandler={handleAddTodo} buttonRef={buttonRef} />
      {/*      <TouchableOpacity style={styles.button} onPress={handleAddTodo}>
        <Text style={styles.text}>Add</Text>
      </TouchableOpacity> */}

      <StatusBar style="auto" />
    </>
  );
};
export default Input;

const styles = StyleSheet.create({
  input: {
    borderColor: "black",
    borderWidth: 1,
    padding: 8,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 5,
    width: 500,
  },
  /*   button: {
    width: 80,
    backgroundColor: "rgb(33, 150, 243)",
    height: 35,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    boxShadow: "3px 3px 6px #999999",
    marginBottom: 10,
  },
  text: {
    color: "white",
    fontWeight: 500,
    textTransform: "uppercase",
  }, */
});
