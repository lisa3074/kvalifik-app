import React, { useState } from "react";
import { View, StyleSheet, TextInput, FlatList, Text } from "react-native";
import MainScreenStyling from "../../styling/MainScreenStyling";
import ChatRoomPreview from "./ChatRoomPreview";
import { useSelector, useDispatch } from "react-redux";
import { toggleHappy, newChatRoom, deleteChatRoom } from "./chatStore/ChatAction";
import { TouchableOpacity } from "react-native-gesture-handler";

//ChatScreen
//Each screen component in your app is provided with the navigation prop automatically.
function ChatRoomList({ navigation }) {
  const [text, setText] = useState("");
  const chatRooms = useSelector(state => state.chat.chatRooms);
  const dispatch = useDispatch();
  return (
    <>
      <View style={[MainScreenStyling.center, styles.container]}>
        <FlatList
          data={chatRooms}
          renderItem={itemData => <ChatRoomPreview chatroom={itemData.item}></ChatRoomPreview>}
          keyExtractor={item => item.chatRoomId}
        />
        <View style={styles.row}>
          <TextInput
            style={styles.textInput}
            onChangeText={setText}
            value={text}
            placeholder="Add / delete chat room"
          />
          <TouchableOpacity
            style={[MainScreenStyling.button, styles.button]}
            onPress={() => dispatch(newChatRoom(text))}>
            <Text style={MainScreenStyling.darkBtnTxt}>Add</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[MainScreenStyling.button, styles.button]}
            onPress={() => dispatch(deleteChatRoom(text))}>
            <Text style={MainScreenStyling.darkBtnTxt}>Delete</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flex: 10,
    justifyContent: "flex-start",
    alignItems: "stretch",
    height: 300,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#DDDDDD",
    height: 44,
    backgroundColor: "#FFFFFF",
    marginLeft: 10,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    flex: 1,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
  },
  button: {
    marginLeft: 8,
  },
});

export default ChatRoomList;
