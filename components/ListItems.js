import React from "react";
import { StyleSheet, Text, View, SafeAreaView, FlatList } from "react-native";

import Button from "./Button";

const ListItems = props => {
  const { todos, setTodos, buttonRef } = props;

  const renderItem = ({ item }) => <Item id={item.id} title={item.title} />;

  const Item = ({ title, id }) => (
    <View style={styles.todo}>
      <Text>{title}</Text>
      <View style={styles.container}>
        <Button title="delete" eventHandler={handleDelete} id={id} buttonRef={buttonRef} />
      </View>
    </View>
  );

  const handleDelete = id => {
    console.log(id);
    setTodos(todos.filter(todo => todo.id !== id));
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
