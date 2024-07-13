

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/screens/HomeScreen';
import BottomTabNavigator from './src/Navigators/BottomTabNavigator'; // Assuming this is where your BottomTabNavigator is defined

const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();

const MainAppStack = () => {
  return (
    <Stack.Navigator initialRouteName="MainTabs" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MainTabs" component={BottomTabNavigator} />
      <Stack.Screen name="Home" component={HomeScreen} />
      {/* <Stack.Screen name="ProfileScreen" component={ProfileScreen} /> */}

    </Stack.Navigator>
  );
};

export default MainAppStack;
