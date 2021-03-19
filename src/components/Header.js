import React, { Component } from 'react'
import { Image ,StyleSheet,View } from 'react-native'

const Header =(props) => {
        return (
            <View>
                <Image
                style={styles.stretch}
                source={props.image}
                />
          </View>
        )
    }


const styles = StyleSheet.create({
    stretch: {
      width: 200,
      height: 120,
      resizeMode: 'stretch',
      marginLeft:50,
      marginTop:20
    }
  });



export default Header