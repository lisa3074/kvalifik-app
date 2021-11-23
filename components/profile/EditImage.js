import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import MainScreenStyling from "../../styling/MainScreenStyling";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";

const EditImage = props => {
  //IMAGE
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [transferred, setTransferred] = useState(0);

  const handleUpload = () => {
    console.log("handleUpload");
    /* 
    launchImageLibrary({ maxWidth: 2000, maxHeight: 2000 }, response => {
      if (response.didCancel) {
        console.log("User cancelled image picker");
      } else {
        const source = { uri: response.uri };
        console.log(source);
        setImage(source);
      }
    }); */
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
        <Image style={MainScreenStyling.profilePicture} /* source={} */ />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({});

export default EditImage;
