import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../utlis/colors';
import Ionicons from "react-native-vector-icons/Ionicons";

const ProfileScreen = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('Himanshu Rawat');
  const [updatedName, setUpdatedName] = useState(name); // State to track changes
  const [isEditing, setIsEditing] = useState(false); // State to manage edit mode

  const handleLogout = () => {
    navigation.navigate('LOGIN');
  };

  const handleSaveName = () => {
    setName(updatedName); // Update the name state
    setIsEditing(false); // Exit edit mode
  };

  const handleEditName = () => {
    setIsEditing(true); // Enter edit mode
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name={"arrow-back-outline"} color={colors.primary} size={25} />
        </TouchableOpacity>
        <Text style={styles.screenTitle}>Profile</Text>
      </View>

      {/* Editable profile name */}
      <View style={styles.profileInfo}>
        <TextInput
          style={styles.input}
          value={updatedName}
          onChangeText={setUpdatedName}
          editable={isEditing} // Allow editing only when in edit mode
          placeholder="Enter your name"
        />
        {isEditing ? (
          <TouchableOpacity onPress={handleSaveName} style={styles.saveButton}>
            <Text style={styles.saveButtonText}>Save</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={handleEditName} style={styles.editButton}>
            <Text style={styles.editButtonText}>Edit Name</Text>
          </TouchableOpacity>
        )}
      </View>

      {/* Display current name */}
      <View style={styles.displayNameContainer}>
        <Text style={styles.displayName}>Name: {name}</Text>
      </View>

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
  backButtonText: {
    fontSize: 16,
    color: colors.primary,
  },
  screenTitle: {
    fontSize: 18,
    fontFamily: 'Roboto',
    color: colors.primary,
  },
  profileInfo: {
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 10,
    width: '80%',
    fontSize: 16,
    fontFamily: 'Roboto',
  },
  saveButton: {
    marginTop: 10,
    backgroundColor: colors.primary,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  saveButtonText: {
    color: colors.white,
    fontSize: 16,
    fontFamily: 'Roboto',
  },
  editButton: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: colors.primary,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  editButtonText: {
    color: colors.primary,
    fontSize: 16,
    fontFamily: 'Roboto',
  },
  displayNameContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  displayName: {
    fontSize: 18,
    fontFamily: 'Roboto',
    color: colors.primary,
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
