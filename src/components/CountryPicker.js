import React, { useState } from "react";
import { View, Picker, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const CountryPicker = (props) => {
  const [selectedValue, setSelectedValue] = useState("java");
  const {container,ic,pickr} = styles;


  return (
    <View style={container}>
      <Icon name={props.icon}  style={ic}> </Icon>
      <Picker
        selectedValue={selectedValue}
        style={pickr}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Select country"  />
        <Picker.Item label="UK" value="UK" />
        <Picker.Item label="US" value="US" />
        <Picker.Item label="India" value="india" />
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 50 ,
    width : 300,
    borderBottomWidth:1,
    paddingTop:0,
    alignItems: "center"
  },
  pickr :{
    height: 50,
     width: 250 
     
  },
  ic :{
    position:'absolute',
    left:10,
    top:15,
    fontSize:20
  }
});

export default CountryPicker;