import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  AsyncStorage,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
//import Login from '../Screens/Login';
//import Home from '../Screens/Home';

class Auth extends Component {
  state = {
    email: '',
    password: '',
  };

  checkAuth = async () => {
    // debugger
    try {
      let user = await AsyncStorage.getItem('user');
      let parsed = JSON.parse(user);
      //debugger

      if (
        parsed.email === this.state.email &&
        parsed.password === this.state.password
      )
        this.props.navigation.replace('Home');
      else {
        alert('Email or password is invalid');
        this.props.navigation.navigate('Login');
      }
    } catch (error) {
      alert(error);
    }
  };

  componentDidMount() {
    const {email, password} = this.props.route.params;

    this.setState({email: email, password: password});

    let obj = {
      name: 'Sandy',
      email: 'sandy@gmail.com',
      password: 'sandy123',
    };
    /*AsyncStorage.setItem('user',user);*/
    AsyncStorage.setItem('user', JSON.stringify(obj));
    this.checkAuth();
  }

  render() {
    const {email, password} = this.props.route.params;
    console.log(email + ' ' + password);

    //const u = JSON.stringify(email)

    //const email1 = JSON.stringify(email)
    return <View></View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

export default Auth;
