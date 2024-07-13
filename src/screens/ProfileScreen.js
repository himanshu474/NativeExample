import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../utlis/colors';

const ProfileScreen = () => {
  const navigation = useNavigation();

  const handleLogout = () => {
    navigation.navigate('LOGIN');
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileImageContainer}>
        <Image
          source={require('../assets/images/logo.png')}
          style={styles.profileImage}
        />
      </View>
      <View style={styles.profileInfo}>
        <Text style={styles.name}>John Doe</Text>
        <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImageContainer: {
    marginBottom: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  profileInfo: {
    alignItems: 'center',
  },
  name: {
    fontSize: 24,
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
  },
  logoutText: {
    color: colors.primary,
    fontFamily: 'Roboto',
    fontSize: 16,
  },
});

export default ProfileScreen;
