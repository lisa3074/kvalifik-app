import React from "react";
import AppLoading from 'expo-app-loading';
import { NavigationContainer } from "@react-navigation/native";
import { useFonts, OpenSans_400Regular, OpenSans_700Bold, Teko_500Medium } from "@expo-google-fonts/dev";
import HomeScreen from "./HomeScreen";
import DiscoverScreen from "./DiscoverScreen";
import ChatStackNav from "./chat/ChatStackNav.js";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import Menu from "./Menu";


const Tab = createBottomTabNavigator();

const TabBarBottom = () => {
  let [fontsLoaded] = useFonts({
    OpenSans_400Regular,
    OpenSans_700Bold,
    Teko_500Medium,
  });
  if (!fontsLoaded) {
    return <AppLoading/>
  } else {
    

  return (
    <>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === "Start") {
                iconName =/*  focused ?  */"md-home"/*  : "md-home" */;
              } else if (route.name === "Discover") {
                iconName = focused ? "md-search" : "md-search";
              } else if (route.name === "Chat") {
                iconName = focused ? "md-chatbubbles" : "md-chatbubbles";
              } else if (route.name === "Menu") {
                iconName = focused ? "md-menu" : "md-menu";
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
          <Tab.Screen name="Start" component={HomeScreen} options={{ title: "HOME" }} />
          <Tab.Screen name="Discover" component={DiscoverScreen} options={{ title: "DISCOVER" }} />
          <Tab.Screen name="Chat" component={ChatStackNav} options={{ title: "CHAT", headerShown: false }} />
          <Tab.Screen name="Menu" component={Menu} options={{ title: "MENU", headerShown: false }} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
      }
};
const styles = StyleSheet.create({});
export default TabBarBottom;
