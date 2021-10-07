import React, { useEffect, useState, useRef } from "react";
import { View, Text, StyleSheet, SafeAreaView, TextInput, Image, ScrollView, Button } from "react-native";
import jsonMessages from "../../dummyData/messages.json";
import surf from "../../static/images/surf.png";
import me from "../../static/images/personChat.png";
import { TouchableOpacity } from "react-native-gesture-handler";
import MainScreenStyling from "../../styling/MainScreenStyling";
// ChatMessageScreen
const chat1 = props => {
  const [messages, setMessages] = useState(jsonMessages);
  const [value, setValue] = useState("");

  const handleSend = () => {
    // dispatch(newChatMessage(id, value));
    console.log("value " + value);
  };

  return (
    <View style={styles.chatContainer}>
      <ScrollView style={styles.scroll}>
        {messages.map(message => {
          console.log(message.message);
          return (
            <View style={[styles.message, messageStyle(message.name)]} key={message.id}>
              <Image style={[styles.profileImage, styles.messageImage, none(message.name)]} source={surf} />
              <View>
                <View style={[styles.messageBg, backgroundColor(message.name)]}>
                  <Text style={backgroundColor(message.name)}>{message.message}</Text>
                </View>
                <Text style={[styles.from, alignName(message.name)]}>
                  <Text style={none(message.name)}>From {message.name}</Text> <Text> {message.time}</Text>
                </Text>
              </View>
            </View>
          );
        })}
      </ScrollView>

      {/* Input for writing message */}

      <View style={styles.flexRow}>
        <Image style={styles.profileImage} source={me} />
        <SafeAreaView style={styles.inputContainer}>
          <TextInput
            placeholder="Write message"
            style={styles.textarea}
            onChangeText={text => setValue(text)}
            value={value}
          />
        </SafeAreaView>
        <TouchableOpacity style={[MainScreenStyling.button, styles.button]} onPress={handleSend}>
          <Text>Send</Text>
        </TouchableOpacity>
      </View>
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
  button: {
    flex: 1,
    marginLeft: 8,
  },
  chatContainer: {
    padding: 16,
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
  message: {
    marginBottom: 16,
  },
  scroll: {
    overflow: "scroll",
  },
});

const messageStyle = person => {
  if (person === "Me") {
    return {
      alignItems: "flex-end",
    };
  } else {
    return {
      flexDirection: "row",
      alignItems: "flex-start",
    };
  }
};
const none = person => {
  if (person === "Me") {
    return {
      display: "none",
    };
  }
};
const backgroundColor = person => {
  if (person === "Me") {
    return {
      backgroundColor: "#5050A5",
      borderBottomRightRadius: 4,
      color: "#ffffff",
    };
  } else {
    return {
      backgroundColor: "#EEEEEE",
      borderBottomLeftRadius: 4,
      color: "#333333",
    };
  }
};

const alignName = person => {
  if (person === "Me") {
    return {
      textAlign: "right",
    };
  }
};

export default chat1;
