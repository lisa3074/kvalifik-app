import React from "react";
import AppLoading from "expo-app-loading";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./HomeScreen";
import DiscoverScreen from "./DiscoverScreen";
import ChatStackNav from "./chat/ChatStackNav.js";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import Menu from "./profile/Menu";
import ProfileNav from "./profile/ProfileNav";

const Tab = createBottomTabNavigator();

const TabBarBottom = () => {

  return (
    <>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              let iconName;

              if (route.name === "Start") {
                iconName =  "md-home";
              } else if (route.name === "Discover") {
                iconName = "md-search";
              } else if (route.name === "Chat") {
                iconName = "md-chatbubbles";
              } else if (route.name === "Profile") {
                iconName = "md-menu";
              }

              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: "#5050A5",
            tabBarInactiveTintColor: "gray",
            tabBarLabelStyle: {
              fontSize: 16,
              fontFamily: "Teko_500Medium",
            },
            tabBarStyle: {
              height: 65,
              paddingTop: 15,
              paddingBottom: 5,
            },
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
          })}>
          <Tab.Screen name="Start" component={HomeScreen} options={{ title: "FEED" }} />
          <Tab.Screen name="Discover" component={DiscoverScreen} options={{ title: "DISCOVER" }} />
          <Tab.Screen name="Chat" component={ChatStackNav} options={{ title: "CHAT", headerShown: false }} />
          <Tab.Screen name="Profile" component={ProfileNav} options={{ title: "MENU", headerShown: false }} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

export default TabBarBottom;
