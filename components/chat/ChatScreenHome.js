import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from "react-native";
import MainScreenStyling from "../../styling/MainScreenStyling";

//ChatScreen
//Each screen component in your app is provided with the navigation prop automatically.
function ChatScreenHome({ navigation }) {
  // const chatRooms = useSelector(state => state.chat.chatRooms);
  return (
    <>
      <View style={[MainScreenStyling.center, styles.container]}>
        <TouchableOpacity
          style={[styles.chatThread, styles.firstChatThread]}
          onPress={() => navigation.navigate("chat1")}>
          <View style={styles.flexRow}>
            <Image style={styles.profileImage} source={require("../../static/images/surf.png")} />
            <View style={styles.chatPreview}>
              <View style={styles.flexRowSpaceBetween}>
                <Text style={styles.text}>CBS Surf</Text>
                <View style={styles.circle}></View>
              </View>
              <View style={styles.flexRowSpaceBetween}>
                <Text style={styles.text}>This is a preview</Text>
                <Text style={styles.text}>12:12</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.chatThread} onPress={() => navigation.navigate("chat2")}>
          <View style={styles.flexRow}>
            <Image style={styles.profileImage} source={require("../../static/images/feminist.png")} />
            <View style={styles.chatPreview}>
              <View style={styles.flexRowSpaceBetween}>
                <Text style={styles.text}>CBS Feminist Society</Text>
                <View style={styles.circle}></View>
              </View>
              <View style={styles.flexRowSpaceBetween}>
                <Text style={styles.text}>This is a preview</Text>
                <Text style={styles.text}>10 May</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.chatThread} onPress={() => navigation.navigate("chat3")}>
          <View style={styles.flexRow}>
            <Image style={styles.profileImage} source={require("../../static/images/students.png")} />
            <View style={styles.chatPreview}>
              <View style={styles.flexRowSpaceBetween}>
                <Text style={styles.text}>CBS Students</Text>
                <View style={styles.circle}></View>
              </View>
              <View style={styles.flexRowSpaceBetween}>
                <Text style={styles.text}>This is a preview</Text>
                <Text style={styles.text}>9 May</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.chatThread} onPress={() => navigation.navigate("chat4")}>
          <View style={styles.flexRow}>
            <Image style={styles.profileImage} source={require("../../static/images/golf.png")} />
            <View style={styles.chatPreview}>
              <View style={styles.flexRowSpaceBetween}>
                <Text style={styles.text}>CBS Golf</Text>
                <View style={styles.circle}></View>
              </View>
              <View style={styles.flexRowSpaceBetween}>
                <Text style={styles.text}>This is a preview</Text>
                <Text style={styles.text}>7 May</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
}

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
});

export default ChatScreenHome;
