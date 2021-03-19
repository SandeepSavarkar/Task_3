import React from 'react'
import {Text,Image, View,StyleSheet} from 'react-native';
import mainlogo from '../assest/main_logo.jpg';

const SplashScreen = ({navigation}) => {
  setTimeout(() => {
    navigation.replace('Login');
  }, 3000);
  return (
    <View style={styles.container}>
      <Image source={mainlogo} style={styles.logo} />
      <Text style={styles.shopName}>Cutify</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container :{
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
      },
  logo : {
    height: 150,
    width : 150,
    borderRadius :25
  },
  shopName:{
    fontSize:30,
    color : "black" ,
    fontWeight : "500"
  }
})


export default SplashScreen
