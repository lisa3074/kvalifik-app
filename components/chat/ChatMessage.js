import React, { useEffect, useState, useRef } from "react";
import { View, Text, StyleSheet, SafeAreaView, TextInput, Image, ScrollView, Button } from "react-native";
import { useSelector } from "react-redux";
import jsonMessages from "../../dummyData/messages.json";
import { Messages } from "../../dummyData/Dummydata";
import surf from "../../static/images/surf.png";
import me from "../../static/images/personChat.png";
import { TouchableOpacity } from "react-native-gesture-handler";
import MainScreenStyling from "../../styling/MainScreenStyling";
// ChatMessageScreen
const ChatMessage = props => {
  const { chatmessage } = props;
  console.log(chatmessage);
  const hardCodedUserId = "1";
  const loggedInUser = useSelector(state => state.user.loggedInUser);
  let me = false;
  console.log(loggedInUser);
  if (loggedInUser.id === chatmessage.user.id) {
    me = true;
  }
  let hours = chatmessage.messageTimestamp.getHours();
  let minutes = chatmessage.messageTimestamp.getMinutes();

  return (
    <View style={styles.chatContainer}>
      <ScrollView style={styles.scroll}>
        <View style={me ? styles.meMessageStyle : styles.youMessageStyle} key={chatmessage.messageId}>
          <Image style={[me ? styles.hide : "", styles.profileImage, styles.messageImage]} source={surf} />
          <View>
            <View style={[styles.messageBg, me ? styles.meBgColor : styles.youBgColor]}>
              <Text style={[me ? styles.meBgColor : styles.youBgColor]}>{chatmessage.messageText}</Text>
            </View>
            <Text style={[styles.from, me ? styles.meAlignName : ""]}>
              {!me ? (
                <Text>
                  From {chatmessage.user.firstname} {chatmessage.user.lastname}{" "}
                </Text>
              ) : (
                ""
              )}
              <Text>
                {hours === 9 ? "0" + hours : hours}:{minutes <= 9 ? 0 + minutes : minutes}
              </Text>
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  flexRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    paddingTop: 16,
    shadowColor: "#ccc",
    shadowOffset: {
      width: 0,
      height: -5,
    },
    shadowOpacity: 0.15,
    shadowRadius: 10.22,
    elevation: 3,
  },
  hide: {
    display: "none",
  },

  button: {
    flex: 1,
    marginLeft: 8,
  },
  chatContainer: {
    paddingTop: 16,
    flexDirection: "column",
    flex: 1,
    backgroundColor: "white",
  },
  inputContainer: {
    paddingLeft: 16,
    flex: 1,
  },
  profileImage: {
    width: 36,
    height: 36,
    borderRadius: 100,
    marginRight: 8,
  },
  messageImage: {
    marginRight: 8,
  },

  textarea: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: "#EEEEEE",
    borderRadius: 5,
    height: 44,
    flex: 3,
  },
  messageBg: {
    padding: 8,
    borderRadius: 12,
  },
  from: {
    color: "#707070",
    fontSize: 12,
    padding: 5,
  },

  scroll: {
    overflow: "scroll",
  },

  meMessageStyle: {
    alignItems: "flex-end",
    marginLeft: 46,
  },
  meBgColor: {
    backgroundColor: "#5050A5",
    borderBottomRightRadius: 2,
    color: "#ffffff",
  },
  meAlignName: {
    textAlign: "right",
  },
  youMessageStyle: {
    flexDirection: "row",
    alignItems: "flex-start",
    flex: 1,
    marginRight: 42,
  },
  youBgColor: {
    backgroundColor: "#EEEEEE",
    borderBottomLeftRadius: 2,
    color: "#333333",
  },
});

export default ChatMessage;
