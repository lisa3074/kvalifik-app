import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import MainScreenStyling from "../../styling/MainScreenStyling";
import placeholder from "../../static/images/placeholder.png";

const ProfileImage = props => {

  const handleUpload = () => {
    console.log("handleUpload");
  };


  return (
    <View style={MainScreenStyling.flex}>
      <View>
        <Text style={MainScreenStyling.labelStyle}>PROFILE PICTURE</Text>
        <TouchableOpacity style={MainScreenStyling.button} onPress={handleUpload}>
          <Text style={MainScreenStyling.darkBtnTxt}>Upload</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={handleUpload}>
        <Image style={MainScreenStyling.profilePicture} source={placeholder} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ProfileImage;
