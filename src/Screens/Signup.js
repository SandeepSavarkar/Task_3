import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
  Picker,
  ScrollView,
} from 'react-native';
import Header from '../components/Header';
import Input from '../components/Input';
import Touchable from '../components/Touchable';
import Pickr from '../components/CountryPicker';
import signup from '../assest/logo5.png'

// export class MyForm extends Component {
//     render({navigation}) {
class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: '',
      lname: '',
      email: '',
      emailerr: '',
      moblie: '',
      mobileErr: '',
      password: '',
      passErr: '',
      cpassword: '',
      cpasserr: '',
    };
  }

  setData(type, value) {
    switch (type) {
      case 'fname':
        this.setState({fname: value});
        break;
      case 'lname':
        this.setState({lname: value});
        break;
    }
  }

  // setFirstName = (text) => {
  //     this.setState({fname: text});
  // };
  // setLastName = (text) => {
  //     this.setState({lname: text});
  // };

  validateFirstName = (text) => {
    console.log(text);
    const reg = /^[a-zA-Z]$/;
    if (reg.test(text) === false) {
      console.log('email is Not Correct');
      this.setState({fname: text});
      return false;
    } else {
      this.setState({fname: text});
    }
  };

  validateLastName = (text) => {
    console.log(text);
    const reg = /^[a-zA-Z]$/;
    if (reg.test(text) === false) {
      console.log('email is Not Correct');
      this.setState({lname: text});
      return false;
    } else {
      this.setState({lname: text});
    }
  };

  validateEmail = (text) => {
    console.log(text);
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(text) === false) {
      console.log('email is Not Correct');
      this.setState({email: text, emailerr: 'email is invalid'});
      return false;
    } else {
      this.setState({email: text, emailerr: 'email is Correct'});
      //console.log(this.state.email);
    }
  };

  validateMobile = (text) => {
    console.log();
    const reg = /^[0]?[789]\d{9}$/;
    if (reg.test(text) === false) {
      console.log('Email is No');
      this.setState({mobile: text, mobileErr: 'Mobile number is not valid'});
      return false;
    } else {
      this.setState({mobile: text, mobileErr: 'Mobile number is valid'});
      console.log('Email is Correct');
    }
  };

  validatePass = (text) => {
    console.log();
    const reg = /^[0]?[789]\d{9}$/;
    if (text.length < 8) {
      console.log('Password is not of valid size');
      this.setState({password: text, passErr: 'Password is not of valid size'});
      return false;
    } else {
      this.setState({password: text, passErr: ''});
      //console.log('pass is correct');
    }
  };

  validateConfirmPass = (text) => {
    console.log();
    //const reg = /^[0]?[789]\d{9}$/;
    if (this.state.password != text) {
      console.log('Password is not matching');
      this.setState({cpassword: text, cpassErr: 'Password is not matching'});
      return false;
    } else {
      this.setState({cpassword: text, cpassErr: 'Matching'});
      console.log('cpass is not matching');
    }
  };

  validate = () => {
    let fname = this.state.fname;
    let lname = this.state.lname;
    let email = this.state.email;
    let mobile = this.state.mobile;
    let password = this.state.password;
    let cpassword = this.state.cpassword;
    let isValidate=true

    if (fname == '' || fname.trim() === "" ) 
    {
      alert('Name cannot be empty')
      return false; 
    }
    else if (lname == '' || lname.trim() === "") 
    {
      alert('Name cannot be empty')
      return false; 
    }
    else if (email == '' || email.trim() === "" ) {
      alert('Email cannot be empty')
      return false; 
    }
    else if (mobile == ''|| mobile.trim() === "") {
      alert('Mobile cannot be empty')
      return false; 
    }
    else if (password == '' || password.trim() === "") {
      alert('Password cannot be empty')
      return false; 
    }
    else if (cpassword == '' || cpassword.trim() === "" ) {
      alert('Confirm Password cannot be empty')
      return false; 
    }
  };

  render() {
    const {container, btn} = style;
    //console.log("value"+this.state.email  )
    //console.log('Value of First Name is  :');
    //console.log(this.state.lname);
    return (
      <SafeAreaView style={container}>
        <ScrollView>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'android' ? 'padding' : 'height'}>
            <Header image={signup} />
            <View>
              <Input
                placeholder="First Name"
                icon="person"
                onChangeText={(text) => this.setData('fname', text)}
                value={this.state.fname}
                // err={this.state.fnameErr}
              />
              <Input
                placeholder="Last Name"
                icon="person"
                onChangeText={(text) => this.setData('lname', text)}
                value={this.state.lname}
                //err={this.state.lnameErr}
              />
              <Input
                placeholder="Email"
                icon="email"
                onChangeText={(text) => this.validateEmail(text)}
                value={this.state.email}
                err={this.state.emailerr}
              />
              <Input
                placeholder="Mobile"
                icon="phone"
                onChangeText={(text) => this.validateMobile(text)}
                value={this.state.mobile}
                err={this.state.mobileErr}
                size={10}
              />
              <Pickr icon="flag-checkered" />
              <Input
                placeholder="Password"
                icon="lock"
                type="pass"
                secureText="true"
                onChangeText={(text) => this.validatePass(text)}
                value={this.state.password}
                err={this.state.passErr}
                minSize={8}
              />
              <Input
                placeholder="Confirm Password"
                icon="lock"
                secureText="true"
                onChangeText={(text) => this.validateConfirmPass(text)}
                value={this.state.cpassword}
                err={this.state.cpassErr}
              />
              <Touchable
                style={btn}
                label="Sign Up"
                // onPress={() => this.props.navigation.navigate('Login')}
                onPress={this.validate}
                //onPress={this.onClick.bind(this)}
              />
            </View>
          </KeyboardAvoidingView>
        </ScrollView>
      </SafeAreaView>
    );
  }
  // validate =()=>{

  // }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor :"#ffffff"
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
});

export default Signup;
