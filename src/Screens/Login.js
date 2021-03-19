import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
  Picker,
  Text,
  Button,
} from 'react-native';
import Header from '../components/Header';
import Input from '../components/Input';
import Touchable from '../components/Touchable';
import login_logo from '../assest/LoginLogo.png';

//const login_logo ="require('../src/assest/login_logo.png')"
// export class LoginForm extends Component {
//     render() {
// class Login extends Component {
//     render() {
//         return (
//             <SafeAreaView  style={container}>
//                 <KeyboardAvoidingView behavior={Platform.OS === "android" ? "padding" : "height"} >
//                     <Header />
//                     <View  >
//                         <Input placeholder="Email" icon='email' />
//                         <Input placeholder="Password" icon='lock' type='pass' secureText='true' />
//                         <Touchable  style={btn} label='Login'  onPress={()=>navigation.navigate('Signup', { name: 'Jane' })} />
//                     </View>
//                 </KeyboardAvoidingView>
//             </SafeAreaView>
//         )
//     }
// }

// export default Login

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      emailerr: '',
      password: '',
      passErr: '',
    };
  }

  validateEmail = (text) => {
    console.log(text);
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(text) === false) {
      console.log('Email is Not Correct');
      this.setState({email: text, emailerr: 'Email is Not Correct'});
      return false;
    } else {
      this.setState({email: text, emailerr: 'Email is Correct'});
      console.log('Email is Correct');
    }
  };

  validatePass = (text) => {
//    console.log(text);

    if (text === false) {
      //console.log('Password should not be null');
      this.setState({password: text, emailerr: 'Password should not be null'});
      return false;
    } else {
      this.setState({password: text, emailerr: 'Password should not be null'});
      //console.log('');
    }
  };
  render() {
    const {container, regcontainer, regbtn, btn, text} = style;

    return (
      <SafeAreaView style={container}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'android' ? 'padding' : 'height'}>
          <Header image={login_logo} />
          <View>
            <Input
              placeholder="Email"
              icon="email"
              onChangeText={(text) => this.validateEmail(text)}
              value={this.state.email}
              emailerror={this.state.emailerr}
            />
            <Input
              placeholder="Password"
              icon="lock"
              type="pass"
              onChangeText={(text) => this.validatePass(text)}
              secureText="true"
            />
            <Touchable
              style={btn}
              label="Login"
              onPress={() =>
                this.props.navigation.navigate('Auth', {
                  email: this.state.email,
                  password : this.state.password 
                })
              }
            />
          </View>
          <View style={regcontainer}>
            <Text style={text}>Not Registered Yet!!</Text>
            <Button
              title="Click Here"
              style={regbtn}
              onPress={() =>
                this.props.navigation.navigate('Signup', {name: 'Jane'})
              }
            />
          </View>
          {/* <View style={regcontainer}>
            <Text style={text}>Go to storage page!!</Text>
            <Button
              title="Storage"
              style={regbtn}
              onPress={() =>
                this.props.navigation.navigate('Auth', {
                  email: 'sandy@gmail.com'
                })
              }
            />
          </View> */}
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }

}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  form: {
    height: 400,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 50,
  },
  btn: {
    marginLeft: 100,
  },
  regcontainer: {
    flexDirection: 'row',
    marginTop: 25,
  },
  text: {
    fontSize: 20,
    fontWeight: '300',
    color: 'black',
    marginRight: 20,
  },
  regbtn: {
    height: 20,
    width: 70,
    borderRadius: 50,
  },
});

export default Login;
