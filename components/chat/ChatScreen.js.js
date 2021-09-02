import React from "react";
import { StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Screen1 from "./Screen1";
import Screen2 from "./Screen2";
import Screen3 from "./Screen3";
import ChatRoom from "./ChatRoom";

const Stack = createNativeStackNavigator();
const ChatScreen = () => {
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
      {/* Name and component props are required. Name=Home is always displayed first*/}
      <Stack.Screen
        name="Home"
        component={ChatRoom}
        options={{
          title: "CHAT",
        }}
      />
      <Stack.Screen
        name="Screen1"
        component={Screen1}
        options={{
          title: "PETER",
        }}
      />
      <Stack.Screen
        name="Screen2"
        component={Screen2}
        options={{
          title: "LASSE",
        }}
      />
      <Stack.Screen
        name="Screen3"
        component={Screen3}
        options={{
          title: "CHRISTINA",
        }}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({});

export default ChatScreen;
