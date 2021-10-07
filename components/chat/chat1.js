import React, { useEffect, useState, useRef } from "react";
import { View, Text, StyleSheet, SafeAreaView, TextInput, Image, ScrollView, FlatList } from "react-native";
import jsonMessages from "../../dummyData/messages.json";
// ChatMessageScreen
const chat1 = props => {
  const [messages, setMessages] = useState(jsonMessages);
  /*   const container = useRef(null);
  const scrollList = useRef(null);
  useEffect(() => {
    messages
      ? setTimeout(() => {
          scrollList.current.scrollTo({ top: container.current.scrollHeight, left: 0, behavior: "smooth" }); //////scroll to bottom (for desktop)
        }, 400)
      : console.log();
  }, [messages]); */

  return (
    <View style={styles.chatContainer} /* ref={scrollList} */>
      <ScrollView style={styles.scroll} /* ref={container} */>
        {messages.map(message => {
          console.log(message.message);
          return (
            <View style={[styles.message, messageStyle(message.name)]} key={message.id}>
              <Image
                style={[styles.profileImage, styles.messageImage, none(message.name)]}
                source={require("../../static/images/surf.png")}
              />
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
      <View style={styles.flexRow}>
        <Image style={styles.profileImage} source={require("../../static/images/personChat.png")} />
        <SafeAreaView style={styles.inputContainer}>
          <TextInput placeholder="Write message" style={styles.textarea} />
        </SafeAreaView>
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
  },
  messageImage: {
    marginRight: 8,
  },

  textarea: {
    padding: 16,
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
