import React, { useState, useRef } from "react";
import { StyleSheet, Text, View } from "react-native";
import Input from "./components/Input";
import ListItems from "./components/ListItems";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  const buttonRef = useRef(null);

  return (
    <View style={styles.container}>
      <Text style={styles.baseText}>
        Add your
        <Text style={styles.blueBoldText}> todos</Text> to the list
      </Text>
      <Input setTodos={setTodos} buttonRef={buttonRef} text={text} setText={setText} />
      <ListItems todos={todos} setTodos={setTodos} buttonRef={buttonRef} text={text} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "center",
    padding: 50,
    width: 600,
  },
  baseText: {
    fontFamily: "Arial",
  },
  blueBoldText: {
    color: "rgb(33, 150, 243)",
    fontWeight: 600,
    textTransform: "uppercase",
  },
});
