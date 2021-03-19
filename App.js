import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from './src/Screens/SplashScreen'
import Login from './src/Screens/Login';
import Signup from './src/Screens/Signup';
import Auth  from './src/Authentication/Auth'
import Home from './src/Screens/Home'
// import {Image, View} from 'react-native';
// import mainlogo from './src/assest/main_logo.jpg';

const Stack = createStackNavigator();

// const SplashScreen = ({navigation}) => {
//   setTimeout(() => {
//     navigation.replace('Login');
//   }, 3000);
//   return (
//     <View>
//       <Image source={mainlogo} />
//     </View>
//   );
// };

class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='SplashScreen' headerMode='none'>
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{title: 'Login Page'}}
          />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="Auth" component={Auth}></Stack.Screen>
          <Stack.Screen name="Home" component={Home}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
