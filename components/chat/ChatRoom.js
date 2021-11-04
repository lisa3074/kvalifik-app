import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, Image, TextInput, SafeAreaView, TouchableOpacity } from "react-native";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { newChatMessage } from "./chatStore/ChatAction";
import logo from "./../../static/images/surf.png";
import myPic from "./../../static/images/personChat.png";
import MainScreenStyling from "../../styling/MainScreenStyling";

const ChatRoom = props => {
  const dispatch = useDispatch();
  const { id } = props.route.params;
  const [value, setValue] = useState("");
  const chatMessages = useSelector(state => state.chat.chatRooms).find(room => room.chatRoomId === id).messages;
  const loggedInUser = useSelector(state => state.user.loggedInUser);
  //console.log(loggedInUser);

  const handleSend = () => {
    const random = Math.random();
    dispatch(newChatMessage(id, value, loggedInUser));
    setValue("");
  };

  return (
    <View style={styles.container}>
      <View style={styles.messages}>
        <FlatList
          style={styles.chatContainer}
          data={chatMessages}
          renderItem={itemData => <ChatMessage chatmessage={itemData.item} image={logo}></ChatMessage>}
          keyExtractor={item => item.messageId}></FlatList>
      </View>

      <View style={styles.flexRow}>
        <Image style={styles.profileImage} source={myPic} />

        <SafeAreaView style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            onChangeText={text => setValue(text)}
            value={value}
            placeholder="Write message"
          />
        </SafeAreaView>

        <TouchableOpacity style={[MainScreenStyling.button, styles.button]} onPress={handleSend}>
          <Text style={[MainScreenStyling.darkBtnTxt]}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  flexRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
    paddingTop: 14,
    paddingBottom: 14,
    shadowColor: "#ccc",
    shadowOffset: {
      width: 0,
      height: -5,
    },
    shadowOpacity: 0.15,
    shadowRadius: 10.22,
    elevation: 3,
  },
  inputContainer: {
    flex: 1,
  },
  profileImage: {
    width: 36,
    height: 36,
    borderRadius: 100,
    marginRight: 8,
    marginLeft: 16,
  },
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  messages: {
    flex: 1,
  },
  textInput: {
    flex: 1,
    height: 44,
    backgroundColor: "#EEEEEE",
    marginLeft: 10,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
  },
  inputView: {
    flexDirection: "row",
    marginTop: 20,
    marginLeft: 5,
  },

  chatContainer: {
    padding: 16,
    paddingBottom: 100,
    flexDirection: "column",
    flex: 1,
    backgroundColor: "white",
  },
  button: {
    marginRight: 16,
    marginLeft: 8,
  },
});

export default ChatRoom;
