import React, { useEffect } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import MainScreenStyling from "../../styling/MainScreenStyling";
import ChatRoomPreview from "./ChatRoomPreview";
import { useSelector } from "react-redux";
import AddChatRoom from "./AddChatRoom";
import { getChatRooms } from "./chatStore/ChatAction";
import { useDispatch } from "react-redux";

//ChatScreen
//Each screen component in your app is provided with the navigation prop automatically.
const ChatRoomList = props => {
  const chatRooms = useSelector(state => state.chat.chatRooms);
  const dispatch = useDispatch();
  console.log(chatRooms);

  useEffect(() => {
    dispatch(getChatRooms());
  }, []);

  return (
    <>
      <View style={[MainScreenStyling.center, styles.container]}>
        <FlatList
          data={chatRooms}
          renderItem={itemData => (
            <ChatRoomPreview chatroom={itemData.item} setChatRoomTitle={props.setChatRoomTitle}></ChatRoomPreview>
          )}
          keyExtractor={item => item.chatRoomId}
        />
        <AddChatRoom />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flex: 10,
    justifyContent: "flex-start",
    alignItems: "stretch",
    height: 300,
  },
});

export default ChatRoomList;
