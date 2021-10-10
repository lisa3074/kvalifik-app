import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ChatRoomsList from "./ChatRoomsList";
import ChatRoom from "./ChatRoom";

const Stack = createNativeStackNavigator();

//This is the stack navigator

const ChatStackNav = props => {
  const [chatRoomTitle, setChatRoomTitle] = useState("hello");
  console.log(chatRoomTitle);

  return (
    <Stack.Navigator
      setChatRoomTitle={setChatRoomTitle}
      chatRoomTitle={chatRoomTitle}
      screenOptions={{
        headerStyle: {
          backgroundColor: "#ffffff",
        },
        headerTintColor: "#5050A5",
        headerTitleStyle: {
          fontWeight: "bold",
          fontFamily: "Teko_500Medium",
          fontSize: 26,
        },
        headerBackTitleVisible: false,
        headerBackTitleStyle: {
          fontSize: 0,
        },
        headerShadowVisible: true,
      }}>
      {/* Name and component props are required. The first in the stack is always displayed first */}
      <Stack.Screen name="CHAT">
        {/*  to pass props through stack navigator, use this syntax */}
        {props => <ChatRoomsList {...props} setChatRoomTitle={setChatRoomTitle} />}
      </Stack.Screen>
      <Stack.Screen name="ChatRoom" component={ChatRoom} options={{ title: chatRoomTitle.toUpperCase() }} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({});

export default ChatStackNav;
