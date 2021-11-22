import React, { useState } from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
import MainScreenStyling from "../../styling/MainScreenStyling";
import CheckBox from "../reusableComponents/Checkbox";
import Logout from "../User/Logout";
import { useNavigation } from "@react-navigation/core";

const Menu = props => {
  const loggedInUser = useSelector(state => state.user.loggedInUser);
  const imageUrl = `./static/images/${loggedInUser.imageUrl}`;

   const navigation = useNavigation();
    const HandleEdit = () => {
        console.log("handleEdit")
        navigation.navigate(props.action);
    }

  //Finding first and last name.
  const firstName = loggedInUser.firstname
  const lastName = loggedInUser.lastname;
  const firstSpace = firstName.indexOf(" ");
  const lastSpace = lastName.lastIndexOf(" ");
  const firstFirstName = firstName.substring(0, firstSpace);
  const lastLastName = lastName.substring(lastSpace, 1000);
  const newFullName = firstFirstName.trim() + " " + lastLastName.trim();

  const [isChatChecked, setIsChatChecked] = useState(loggedInUser.chatNotifications);
  const [isEventChecked, setIsEventChecked] = useState(loggedInUser.eventNotifications);


  return (
    <ScrollView>
      <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image style={styles.profilePicture} /* source={imageUrl} */ />
        <View>
          <Text style={[MainScreenStyling.heading, styles.textColor]}>{newFullName}</Text>
          <Text style={[MainScreenStyling.paragraphSmall, styles.textColor]}>{loggedInUser.email}</Text>
          <Text style={[MainScreenStyling.paragraphSmall, styles.textColor]}>{loggedInUser.studyProgramme}</Text>
        </View>
      </View>
      <TouchableOpacity style={MainScreenStyling.button} onPress={HandleEdit}>
        <Text style={MainScreenStyling.darkBtnTxt}>Edit profile</Text>
      </TouchableOpacity>
      <View style={styles.line}></View>
      <View>
        <Text style={[MainScreenStyling.header, styles.textColor]}>NOTIFICATIONS</Text>
        <View style={styles.notificationContainer}>
          <View>
          <Text style={styles.heading}>Chat</Text>
          <Text style={MainScreenStyling.paragraphSmall}>When you recieve a new message</Text>
          </View>
          <CheckBox label={""} isChecked={isChatChecked} setIsChecked={setIsChatChecked} type={"switch"} error={""} />
        </View>
        <View style={styles.notificationContainer}>
          <View>
          <Text style={styles.heading}>Event reminder</Text>
          <Text style={MainScreenStyling.paragraphSmall}>An hour before events you are ‘going to’</Text>
          </View>
          <CheckBox label={""} isChecked={isEventChecked} setIsChecked={setIsEventChecked} type={"switch"} error={""} />
        </View>
      </View>
        <View style={styles.line}></View>
        <Logout/>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  profilePicture: {
    width: 70,
    height: 70,
    borderRadius: 100,
    marginRight: 16,
  },
  profileContainer: {
    flexDirection: "row",
  },
  textColor: {
    color: "#32305D",
  },
  line: {
    borderBottomColor: "#AAAAAA",
    borderBottomWidth: 1,
    marginTop: 32,
    marginBottom: 32,
    opacity: 0.2,
  },
  notificationContainer: {
    backgroundColor: 'white',
    borderRadius: 5,
    flexDirection: 'row',
    padding: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 8,
    marginTop: 24,
    shadowColor: "#AAAAAA",
    shadowOpacity: 0.3,
    shadowRadius: 3,
    shadowOffset: {
      height: 0,
      width: 3,
    },
  },
  heading: {
    color: "#32305D",
    fontSize: 16,
    fontFamily: 'OpenSans_700Bold',
  },
});

export default Menu;
