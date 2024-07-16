import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import BottomTabNavigator from './src/Navigators/BottomTabNavigator';
import ProfileScreen from './src/screens/ProfileScreen';

const Stack = createStackNavigator();

const MainAppStack = () => {
  return (
    <Stack.Navigator initialRouteName="MainTabs" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MainTabs" component={BottomTabNavigator} />
      <Stack.Screen name="Home" component={HomeScreen} />
      {/* <Stack.Screen name="Profile" component={ProfileScreen}  /> */}
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: true,
          headerTitle: 'Profile',
          headerBackTitleVisible: false,
          headerLeft: () => (
            <Ionicons
              name="arrow-back"
              size={24}
              color="black"
              style={{ marginLeft: 10 }}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default MainAppStack;
