import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, SafeAreaView, FlatList, TouchableOpacity, TextInput } from "react-native";

import Button from "./Button";

const ListItems = props => {
  const { todos, setTodos, buttonRef, text } = props;
  const [editText, setEditText] = useState("");
  const [isEdited, setIsEdited] = useState(false);

  useEffect(() => {
    console.log(editText);
  }, [editText]);
  useEffect(() => {
    console.log(isEdited);
  }, [isEdited]);

  const renderItem = ({ item }) => <Item id={item.id} title={item.title} />;

  const Item = ({ title, id }) => (
    <View style={styles.todo}>
      <Text /* style={isEdited ? styles.hide : ""} */>{title}</Text>
      <TextInput
        /* style={!isEdited ? styles.hide : styles.textArea} value={editText} */ style={styles.textArea}
        onChangeText={setEditText}
      />
      <View style={styles.container}>
        <Button
          title={isEdited ? "save" : "edit"}
          eventHandler={isEdited ? handleSave : handleEdit}
          id={id}
          buttonRef={buttonRef}
        />

        <Button title="delete" eventHandler={handleDelete} id={id} buttonRef={buttonRef} />
      </View>
    </View>
  );

  const handleDelete = id => {
    console.log(id);
    setTodos(todos.filter(todo => todo.id !== id));
  };
  const handleEdit = (id, buttonRef) => {
    setIsEdited(true);
  };

  const handleSave = id => {
    console.log(
      id,
      todos.filter(todo => todo.id !== id),
      editText
    );
    setTodos(todos.filter(todo => todo.id !== id));
    setTodos(todos => [...todos, { title: editText, id: id }]);
    console.log(todos);
    /*    setEditText("");
    setIsEdited(false); */
  };

  return (
    <>
      <SafeAreaView style={styles.list}>
        <FlatList data={todos} renderItem={renderItem} keyExtractor={item => item.id} />
      </SafeAreaView>
    </>
  );
};

export default ListItems;

const styles = StyleSheet.create({
  list: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 10,
    display: "flex",
    alignItems: "stretch",
    width: 505,
  },
  todo: {
    marginBottom: 20,
    padding: 10,
    marginRight: 5,
    boxShadow: "3px 3px 6px #d8d8d8",
    borderRadius: 5,
    backgroundColor: "#2196f330",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  container: {
    paddingLeft: 10,
    borderLeftColor: "black",
    borderLeftWidth: 1,
    marginLeft: 16,
    display: "flex",
    justifyContent: "flex-end",
  },
  textArea: {
    border: "1px solid black",
    display: "flex",
  },
  hide: {
    display: "none",
  },
});
