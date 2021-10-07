import { StyleSheet } from "react-native";
//import { useFonts, OpenSans_400Regular, OpenSans_700Bold, Teko_500Medium } from "@expo-google-fonts/dev";

const MainScreenStyling = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    maxWidth: 250,
    backgroundColor: "rgb(33, 150, 243)",
    padding: 15,
    paddingBottom: 5,
    paddingTop: 5,
    marginTop: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    shadowColor: "#999999",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 3,
      width: 3,
    },
  },
  lightText: {
    color: "white",
    fontWeight: "500",
    textTransform: "uppercase",
  },
  darkText: {
    color: "#333333",
    fontWeight: "500",
    textTransform: "uppercase",
  },
  header: {
    fontFamily: "Teko_500Medium",
    fontSize: 26,
    color: "#5050A5",
    textTransform: "uppercase",
  },
  heading: {
    fontFamily: "Teko_500Medium",
    fontSize: 26,
    color: "#333333",
  },
  paragraph: {
    fontFamily: "OpenSans_400Regular",
    fontSize: 14,
    color: "#333333",
  },
  darkBtnTxt: {
    fontFamily: "OpenSans_700Bold",
    fontSize: 11,
    color: "#FFFFFF",
  },
  lightBtnTxt: {
    fontFamily: "OpenSans_700Bold",
    fontSize: 11,
    color: "#5050A5",
  },
});

export default MainScreenStyling;
