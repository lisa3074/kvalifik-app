import React from 'react';
import { View, Text, Button, StyleSheet,  } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from "@react-navigation/core";

const SetupProfile = props => {
     const navigation = useNavigation();
    const handleSubmit = () => {
        console.log("handleSubmit")
        navigation.navigate(props.action);
    }
    return (
     <View>
            
            <Text>Setup profile</Text>
            <TouchableOpacity  onPress={handleSubmit}><Text>Setup profile</Text></TouchableOpacity>
     </View>
 );
}

const styles = StyleSheet.create({
 
});

export default SetupProfile;