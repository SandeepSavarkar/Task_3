import React, { Component } from 'react';
import { AppRegistry, View, Image, StyleSheet, Text,AsyncStorage } from 'react-native';



class Home extends Component {
  // display = async ()=>{
  //   var user = await AsyncStorage.getItem('user');
  //   var parsed = JSON.parse(user);
  //   alert(parsed.name)
  // }
  render() {
    // this.display()    

    return (
      <View >
          <Text>Home Screen </Text>
      </View>
    );
  }
}

export default Home;
