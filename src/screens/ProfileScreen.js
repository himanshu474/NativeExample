import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../utlis/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';



const ProfileScreen = () => {
  const navigation = useNavigation();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Fetch user data from AsyncStorage
    const fetchUserData = async () => {
      try {
        const storedUserData = await AsyncStorage.getItem('userData');
        if (storedUserData) {
          setUserData(JSON.parse(storedUserData));
        } else {
          // Handle case where user data is not found (maybe redirect to login?)
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  const handleLogout = () => {
    // Clear user data from AsyncStorage and navigate to login screen
    AsyncStorage.removeItem('userData');
    navigation.navigate('LOGIN');
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back-outline" color={colors.primary} size={25} />
        </TouchableOpacity>
        <Text style={styles.screenTitle}>Profile</Text>
      </View>

      {/* Display user information */}
      {userData && (
        <View style={styles.profileInfo}>
          <Text style={styles.displayName}>Name: {userData.name}</Text>
          <Text style={styles.displayName}>Email: {userData.email}</Text>
          {/* Displaying password is generally not recommended */}
          {/* <Text style={styles.displayName}>Password: {userData.password}</Text> */}
        </View>
      )}

      {/* Logout button */}
      <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: 20, // Adjusted to accommodate the header
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  backButton: {
    marginRight: 10,
  },
  screenTitle: {
    fontSize: 18,
    fontFamily: 'Roboto',
    color: colors.primary,
  },
  profileInfo: {
    alignItems: 'center',
    marginTop: 20,
  },
  displayName: {
    fontSize: 18,
    fontFamily: 'Roboto',
    color: colors.primary,
    marginBottom: 10,
  },
  logoutButton: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 100,
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignSelf: 'center',
  },
  logoutText: {
    color: colors.primary,
    fontFamily: 'Roboto',
    fontSize: 16,
  },
});

export default ProfileScreen;
