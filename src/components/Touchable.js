import React from 'react';
import {TouchableOpacity, StyleSheet, Text, Keyboard} from 'react-native';

const Touchable = (props ,{navigation}) => {
  const {sgbtn, sgtext} = styles;
  return (
    <TouchableOpacity style={sgbtn} onPress={props.onPress}>
      <Text style={sgtext}>{props.label}</Text>
    </TouchableOpacity>
  );
};

// const Touchable= (props) => {
//     const { sgbtn,sgtext } = styles ;

//     return (
//         <TouchableOpacity style={sgbtn}  onPress={props.onPress

//           } >
//             <Text style={sgtext}>Sign Up</Text>
//         </TouchableOpacity>

//     )
// }

const styles = StyleSheet.create({
  sgbtn: {
    marginTop: 30,
    height: 50,
    width: 200,
    backgroundColor: 'black',
    borderRadius: 25,
    alignSelf: 'center',
  },
  sgtext: {
    justifyContent: 'center',
    alignSelf: 'center',
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 5,
  },
});
export default Touchable;
