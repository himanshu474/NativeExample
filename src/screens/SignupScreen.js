import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  Modal
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../utlis/colors';
import { signup } from '../api/apiService';
import TermsOfServiceScreen from './TermsOfServiceScreen';
import Toast from 'react-native-toast-message'; // Import Toast

const SignupScreen = () => {
  const navigation = useNavigation();
  const [secureEntry, setSecureEntry] = useState(true);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [showTermsModal, setShowTermsModal] = useState(false);
  const [selectedPolicy, setSelectedPolicy] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({
    fullName: '',
    email: '',
    password: '',
  });
  const [firstAttempt, setFirstAttempt] = useState(true); // State to track first form submission attempt
  const didSubmitRef = useRef(false); // Ref to track whether form has been submitted

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleLogin = () => {
    navigation.navigate('LOGIN');
  };

  const handleTermsPress = (policy) => {
    setSelectedPolicy(policy);
    setShowTermsModal(true);
  };

  const handleInputChange = (fieldName, value) => {
    // Clear error for the current field when the user starts typing
    setErrors((prevErrors) => ({
      ...prevErrors,
      [fieldName]: '',
    }));

    // You can add more specific validations here if needed
    // For example, checking if email is valid after typing each character
  };

  const handleSignUp = async () => {
    let formIsValid = true;
    const newErrors = {
      fullName: '',
      email: '',
      password: '',
    };

    // Validate full name
    if (!fullName.trim()) {
      newErrors.fullName = 'Full Name is required';
      formIsValid = false;
    } else if (!/^[a-zA-Z\s]*$/.test(fullName.trim())) {
      newErrors.fullName =
        'Full Name should not contain numbers or special characters';
      formIsValid = false;
    }

    // Validate email
    if (!email.trim()) {
      newErrors.email = 'Email is required';
      formIsValid = false;
    } else if (!/^[a-zA-Z0-9._%+-]+@(gmail|hotmail|rediffmail|myitronline|Yahoo|msn)\.(com|in|co.in|xyz)$/.test(email)) {
      newErrors.email = 'Email is invalid';
      formIsValid = false;
    }

    // Validate password
    if (!password.trim()) {
      newErrors.password = 'Password is required';
      formIsValid = false;
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long';
      formIsValid = false;
    }

    setErrors(newErrors);

    if (formIsValid) {
      try {
        await signup(fullName, email, password);

        // Show success toast message
        Toast.show({
          type: 'success',
          text1: 'Signup successful!',
          text2: 'You can now login with your credentials.',
          position: 'top',
          visibilityTime: 3000,
          autoHide: true,
        });

        // Navigate to login screen after successful signup
        navigation.navigate('LOGIN');
        setFullName('');
        setEmail('');
        setPassword('');

      } catch (error) {
        console.error('Signup error:', error);
        // Handle signup error (e.g., display error message)
      }
    } else {
      // Show toast message for incomplete fields only on first attempt
      if (!didSubmitRef.current) {
        Toast.show({
          type: 'error',
          text1: 'Please fill all fields correctly',
          position: 'top',
          visibilityTime: 3000,
          autoHide: true,
        });
        didSubmitRef.current = true; // Set ref to true after first submission attempt
      }
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButtonWrapper}
        onPress={handleGoBack}
      >
        <Ionicons
          name={'arrow-back-outline'}
          color={colors.primary}
          size={25}
        />
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <Text style={styles.headingText}>Let's get</Text>
        <Text style={styles.headingText}>started</Text>
      </View>
      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <Ionicons
            name={'person-outline'}
            size={30}
            color={colors.secondary}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Enter your full name"
            placeholderTextColor={colors.secondary}
            value={fullName}
            onChangeText={(text) => setFullName(text)}
            onFocus={() => setErrors((prevErrors) => ({
              ...prevErrors,
              fullName: '',
            }))}
          />
        </View>
        {errors.fullName ? (
          <Text style={styles.errorText}>{errors.fullName}</Text>
        ) : null}

        <View style={styles.inputContainer}>
          <Ionicons
            name={'mail-outline'}
            size={30}
            color={colors.secondary}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Enter your email"
            placeholderTextColor={colors.secondary}
            keyboardType="email-address"
            value={email}
            onChangeText={(text) => setEmail(text)}
            onFocus={() => setErrors((prevErrors) => ({
              ...prevErrors,
              email: '',
            }))}
          />
        </View>
        {errors.email ? (
          <Text style={styles.errorText}>{errors.email}</Text>
        ) : null}

        <View style={styles.inputContainer}>
          <SimpleLineIcons
            name={'lock'}
            size={30}
            color={colors.secondary}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Enter your password"
            placeholderTextColor={colors.secondary}
            secureTextEntry={secureEntry}
            value={password}
            onChangeText={(text) => setPassword(text)}
            onFocus={() => setErrors((prevErrors) => ({
              ...prevErrors,
              password: '',
            }))}
          />
          <TouchableOpacity
            onPress={() => {
              setSecureEntry((prev) => !prev);
            }}
          >
            <SimpleLineIcons
              name={'eye'}
              size={20}
              color={colors.secondary}
            />
          </TouchableOpacity>
        </View>
        {errors.password ? (
          <Text style={styles.errorText}>{errors.password}</Text>
        ) : null}

        <TouchableOpacity
          style={styles.loginButtonWrapper}
          onPress={handleSignUp}
        >
          <Text style={styles.loginText}>Sign up</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.termsContainer}>
          <Text style={styles.termsText}>
            By continuing past this page, you agree to our{' '}
            <Text
              style={styles.termsLink}
              onPress={() => handleTermsPress('TermsOfService')}
            >
              Terms of Service,
            </Text>
          </Text>
        </TouchableOpacity>
        <Modal
          animationType="slide"
          transparent={true}
          visible={showTermsModal}
          onRequestClose={() => setShowTermsModal(false)}
        >
          <View style={styles.modalContainer}>
            <TouchableOpacity
              style={styles.closeModalButton}
              onPress={() => setShowTermsModal(false)}
            >
              <Ionicons
                name="close-circle-outline"
                size={36}
                color={colors.primary}
              />
            </TouchableOpacity>
            {selectedPolicy === 'TermsOfService' && <TermsOfServiceScreen />}
          </View>
        </Modal>

        <Text style={styles.continueText}>or continue with</Text>

        <TouchableOpacity style={styles.googleButtonContainer}>
          <Image
            source={require('../assets/images/google.png')}
            style={styles.googleImage}
          />
          <Text style={styles.googleText}>Google</Text>
        </TouchableOpacity>

        <View style={styles.footerContainer}>
          <Text style={styles.accountText}>Already have an account!</Text>
          <TouchableOpacity onPress={handleLogin}>
            <Text style={styles.signupText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Toast/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 20,
  },
  backButtonWrapper: {
    height: 40,
    width: 40,
    backgroundColor: colors.gray,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    marginVertical: 20,
  },
  headingText: {
    fontSize: 32,
    color: colors.primary,
    fontFamily: 'Roboto',
  },
  formContainer: {
    marginTop: 1,
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: colors.secondary,
    borderRadius: 100,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 2,
    marginVertical: 5,
  },
  textInput: {
    flex: 1,
    paddingHorizontal: 10,
    fontFamily: 'Roboto',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginLeft: 10,
    fontFamily: 'Roboto',
  },
  loginButtonWrapper: {
    backgroundColor: colors.primary,
    borderRadius: 100,
    marginTop: 20,
  },
  loginText: {
    color: colors.white,
    fontSize: 20,
    fontFamily: 'Roboto',
    textAlign: 'center',
    padding: 10,
  },
  continueText: {
    textAlign: 'center',
    marginVertical: 20,
    fontSize: 14,
    fontFamily: 'Roboto',
    color: colors.primary,
  },
  googleButtonContainer: {
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: colors.primary,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    gap: 10,
  },
  googleImage: {
    height: 20,
    width: 20,
  },
  googleText: {
    fontSize: 20,
    fontFamily: 'Roboto',
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
    gap: 5,
  },
  accountText: {
    color: colors.primary,
    fontFamily: 'Roboto',
  },
  signupText: {
    color: 'blue',
    fontFamily: 'Roboto',
    textDecorationLine: 'underline',
    fontWeight: '900',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  closeModalButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    padding: 10,
    zIndex: 100,
  },
  termsContainer: {
    alignItems: 'flex-start',
    marginTop: 10,
    lineHeight: 10,
  },
  termsText: {
    fontSize: 14,
    fontFamily: 'Roboto',
    textAlign: 'center',
  },
  termsLink: {
    color: 'blue',
    fontWeight: '900',
    textDecorationLine: 'underline',
    marginHorizontal: 5,
  },
});

export default SignupScreen;
