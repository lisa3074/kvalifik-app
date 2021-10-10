import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Button, StyleSheet, Image, TouchableOpacity } from "react-native";
import MainScreenStyling from "../../styling/MainScreenStyling";

const ChatRoomPreview = props => {
  const navigation = useNavigation();

  const lastPos = props.chatroom.messages.length - 1;
  let lastMessageText,
    displayTime = "";
  if (lastPos > -1) {
    lastMessageText = props.chatroom.messages[lastPos].messageText;
    const lastTime = props.chatroom.messages[lastPos].messageTimestamp;

    // Should only do this if on the same date as today...
    displayTime = lastTime.getHours() + ":" + lastTime.getMinutes();
  }

  return (
    <TouchableOpacity
      style={[styles.chatThread, styles.firstChatThread]}
      onPress={() => {
        navigation.navigate("ChatRoom", { id: props.chatroom.chatRoomId });
        props.setChatRoomTitle(props.chatroom.chatRoomName);
      }}>
      <View style={styles.flexRow}>
        <Image style={styles.profileImage} source={props.chatroom.imageUrl} />
        <View style={styles.chatPreview}>
          <View style={styles.flexRowSpaceBetween}>
            <Text style={styles.text}>{props.chatroom.chatRoomName}</Text>
            <View style={props.chatroom.read ? "" : styles.circle}></View>
          </View>
          <View style={styles.flexRowSpaceBetween}>
            <Text
              style={[props.chatroom.read ? styles.paragraph : styles.text, styles.message]}
              ellipsizeMode="tail"
              numberOfLines={1}>
              {lastMessageText}
            </Text>
            <Text style={[props.chatroom.read ? styles.paragraph : styles.text, styles.time]}>{displayTime}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    fontWeight: "800",
    fontFamily: "OpenSans_700Bold",
    lineHeight: 25,
  },
  chatThread: {
    height: 85,
    justifyContent: "center",
    padding: 16,
  },
  chatPreview: {
    paddingLeft: 16,
    flex: 1,
  },
  container: {
    flexDirection: "column",
    flex: 10,
    justifyContent: "flex-start",
    alignItems: "stretch",
    height: 300,
  },
  flexRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  flexRowSpaceBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "stretch",
    alignContent: "stretch",
  },
  circle: {
    backgroundColor: "blue",
    width: 10,
    height: 10,
    borderRadius: 100,
    alignSelf: "center",
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 100,
  },

  spacious: {
    flex: 10,
  },
  message: {
    flex: 20,
  },
  time: {
    flex: 5,
    textAlign: "right",
  },
});
export default ChatRoomPreview;
