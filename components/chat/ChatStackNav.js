import React from "react";
import { StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import chat1 from "./chat1";
import chat2 from "./chat2";
import chat3 from "./chat3";
import chat4 from "./chat4";
import ChatScreenHome from "./ChatScreenHome";

const Stack = createNativeStackNavigator();

//This is the stack navigator

const ChatStackNav = () => {
  return (
    <Stack.Navigator
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
      {/* Name and component props are required. The first in the stackis always displayed first */}
      <Stack.Screen
        name="Home"
        component={ChatScreenHome}
        options={{
          title: "CHAT",
        }}
      />
      <Stack.Screen
        name="chat1"
        component={chat1}
        options={{
          title: "CBS Surf",
        }}
      />
      <Stack.Screen
        name="chat2"
        component={chat2}
        options={{
          title: "CBS Feminist Society",
        }}
      />
      <Stack.Screen
        name="chat3"
        component={chat3}
        options={{
          title: "CBS Students",
        }}
      />
      <Stack.Screen
        name="chat4"
        component={chat4}
        options={{
          title: "CBS Golf",
        }}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({});

export default ChatStackNav;
