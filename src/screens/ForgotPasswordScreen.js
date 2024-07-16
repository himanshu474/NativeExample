import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import { colors } from '../utlis/colors';
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";


const ForgotPasswordScreen = () => {
    const navigation = useNavigation();

  const [email, setEmail] = useState('');

  
  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleResetPassword = () => {
    if (!email.trim()) {
      Alert.alert('Error', 'Please enter your email address.');
      return;
    }

    // Implement your password reset logic here (API call, etc.)

    Alert.alert('Password Reset', 'Password reset instructions sent to your email.');

    // Navigate back to Login screen after password reset
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
       <TouchableOpacity
        style={styles.backButtonWrapper}
        onPress={handleGoBack}
      >
        <Ionicons
          name={"arrow-back-outline"}
          color={colors.primary}
          size={25}
        />
      </TouchableOpacity>
      <Text style={styles.heading}> 
        Forgot Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        placeholderTextColor={colors.secondary}
        keyboardType="email-address"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TouchableOpacity onPress={handleResetPassword} style={styles.resetButton}>
        <Text style={styles.resetButtonText}>Reset Password</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: colors.white,
    padding: 20,
    marginTop:40,
  }, 
  
  backButtonWrapper: {
    height: 40,
    width: 40,
    backgroundColor: colors.gray,
    borderRadius: 20,
    justifyContent:"center",
    alignItems: "center",
    
  },
  heading: {
    fontSize: 24,
    color: colors.primary,
    fontFamily: 'Roboto',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.secondary,
    borderRadius: 100,
    height:50,
    paddingHorizontal: 20,
    fontFamily: 'Roboto',
    fontSize: 16,
    marginBottom: 20,
  },
  resetButton: {
    backgroundColor: colors.primary,
    borderRadius: 100,
    paddingVertical: 15,
    alignItems: 'center',
  },
  resetButtonText: {
    color: colors.white,
    fontSize: 18,
    fontFamily: 'Roboto',
  },
});

export default ForgotPasswordScreen;
