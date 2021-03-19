import React, {Component} from 'react';
import {View, TextInput, StyleSheet,Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon1 from 'react-native-vector-icons/MaterialIcons';

class Input extends Component {
 
  render() {
    const {input, ic} = styles;
   // const err = this.props.emailerror ? null : this.props.emailerror    

    if (this.props.icon === 'person') {
      return (
        <View style={styles.section}>
          <Icon1 name={this.props.icon} style={ic}>
          </Icon1>
          <TextInput
            style={input}
            placeholder={this.props.placeholder}
            underlineColorAndroid="transparent"
            onChangeText={this.props.onChangeText}
            //onEndEditing={this.props.onEndEditing}
            value={this.props.value}
            
          />
           <Text style={styles.verror}>{this.props.err}</Text>
        </View>
      );
    } else {
      return (
        <View style={styles.section}>
          <Icon name={this.props.icon} style={ic}>
          </Icon>
          <TextInput
            style={input}
            placeholder={this.props.placeholder}
            underlineColorAndroid="transparent"
            secureTextEntry={Boolean(this.props.secureText)}
            onChangeText={this.props.onChangeText}
            value={this.props.value}
            maxLength={this.props.size}
            minLength={this.props.minSize}
          />
          
          <Text style={styles.verror}>{this.props.err}</Text>

        </View>
      );
    }
  }

  




}

const styles = StyleSheet.create({
  section: {
    flexDirection: 'row',
  },
  ic: {
    position: 'absolute',
    left: 10,
    top: 25,
    fontSize: 20,
  },
  input: {
    height: 50,
    width: 300,
    paddingLeft: 40,
    justifyContent: 'space-between',
    borderColor: 'gray',
    borderBottomWidth: 1,
    marginTop: 10,
  },
  verror :{
     color : 'red',
     position: 'absolute',
     left: 10,
     top: 40,
     fontSize: 20 
  }
});

export default Input;
