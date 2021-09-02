import React from "react";
import { StatusBar } from "expo-status-bar";
import { TextInput, StyleSheet } from "react-native";
import Button from "./Button";

const Input = props => {
  const { setTodos, buttonRef, text, setText } = props;

  const handleAddTodo = () => {
    //Add the new entry to the array (new array)
    setTodos(todos => [...todos, { title: text, id: Math.random().toString() }]);
    setText("");
  };

  return (
    <>
      <TextInput style={styles.input} placeholder="Type a todo" value={text} onChangeText={setText} />
      <Button title="add" eventHandler={handleAddTodo} buttonRef={buttonRef} />
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

    //width: 300,
  },
});
