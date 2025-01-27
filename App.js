
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';
// import BottomTabNavigator from './src/Navigators/BottomTabNavigator'; 
import MainAppStack from './MainAppStack';
import ForgotPasswordScreen from './src/screens/ForgotPasswordScreen';
import { ToastProvider } from 'react-native-toast-message';


const Stack = createStackNavigator();

const App = () => {
  return (
    

    <NavigationContainer>
      <Stack.Navigator initialRouteName="LOGIN" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="LOGIN" component={LoginScreen} />
        <Stack.Screen name="FORGOT" component={ForgotPasswordScreen}/>
        <Stack.Screen name="SIGNUP" component={SignupScreen} />
        <Stack.Screen name="MainApp" component={MainAppStack} />
      </Stack.Navigator>
    </NavigationContainer>
 
  );
};

export default App;
