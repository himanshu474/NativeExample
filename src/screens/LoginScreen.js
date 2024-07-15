import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  ActivityIndicator,
  Modal,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import { colors } from "../utlis/colors";
import TermsOfServiceScreen from "./TermsOfServiceScreen";

const LoginScreen = () => {
  const navigation = useNavigation();
  const [secureEntry, setSecureEntry] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loading, setLoading] = useState(false); // New state for loading indicator
  const [showTermsModal, setShowTermsModal] = useState(false);
  const [selectedPolicy, setSelectedPolicy] = useState("");

  const handleSignup = () => {
    navigation.navigate("SIGNUP");
  };

  const handleTermsPress = (policy) => {
    setSelectedPolicy(policy);
    setShowTermsModal(true);
  };

  const handleLogin = () => {
    setEmailError("");
    setPasswordError("");

    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address");
      return;
    }

    if (!validatePassword(password)) {
      setPasswordError("Password must be at least 6 characters long");
      return;
    }

    setLoading(true); // Start loading indicator

    // Simulate login process
    setTimeout(() => {
      setLoading(false); // Stop loading indicator

      // Navigate to main app or handle error
      navigation.navigate("MainApp");
    }, 5); // Simulating 5 milliseconds of loading time

    setEmail("")
    setPassword("")
  };

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 6;
  };

  const handleCloseModal = () => {
    setShowTermsModal(false);
    setSelectedPolicy("");
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.headingText}>Hey,</Text>
          <Text style={styles.headingText}>Welcome Back</Text>
        </View>

        <View style={styles.inputContainer}>
          <Ionicons name={"mail-outline"} size={30} color={colors.secondary} />
          <TextInput
            style={styles.textInput}
            placeholder="Enter your email"
            placeholderTextColor={colors.secondary}
            keyboardType="email-address"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </View>
        {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
        <View style={styles.inputContainer}>
          <SimpleLineIcons name={"lock"} size={30} color={colors.secondary} />
          <TextInput
            style={styles.textInput}
            placeholder="Enter your password"
            placeholderTextColor={colors.secondary}
            secureTextEntry={secureEntry}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          <TouchableOpacity
            onPress={() => {
              setSecureEntry((prev) => !prev);
            }}
          >
            <SimpleLineIcons name={"eye"} size={20} color={colors.secondary} />
          </TouchableOpacity>
        </View>
        {passwordError ? (
          <Text style={styles.errorText}>{passwordError}</Text>
        ) : null}

        <TouchableOpacity style={styles.termsContainer}>
          <Text style={styles.termsText}>
            By continuing past this page, you agree to our{" "}
            <Text
              style={styles.termsLink}
              onPress={() => handleTermsPress("TermsOfService")}
            >
              Terms of Service,
            </Text>
            {/* <Text
              style={styles.termsLink}
              onPress={() => handleTermsPress("CookiePolicy")}
            >
              Cookie Policy,
            </Text> */}
            
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleLogin} style={styles.loginButtonWrapper}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
        <Text style={styles.continueText}>or continue with</Text>
        <TouchableOpacity style={styles.googleButtonContainer}>
          <Image
            source={require("../assets/images/google.png")}
            style={styles.googleImage}
          />
          <Text style={styles.googleText}>Google</Text>
        </TouchableOpacity>
        <View style={styles.footerContainer}>
          <Text style={styles.accountText}>Don’t have an account?</Text>
          <TouchableOpacity onPress={handleSignup}>
            <Text style={styles.signupText}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View> 

      <Modal
        animationType="slide"
        transparent={true}
        visible={showTermsModal}
        onRequestClose={() => setShowTermsModal(false)}
      >
        <View style={styles.modalContainer}>
          <TouchableOpacity
            style={styles.closeModalButton}
            onPress={handleCloseModal}
          >
            <Ionicons name="close-circle-outline" size={36} color={colors.primary} />
          </TouchableOpacity>
          {selectedPolicy === "TermsOfService" && <TermsOfServiceScreen />}
          {/* {selectedPolicy === "CookiePolicy" && <CookiePolicyScreen />} */}
        </View>
      </Modal>

      {loading && (
        <View style={styles.loadingOverlay}>
          <ActivityIndicator size="large" color={colors.primary} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 20,
  },
  textContainer: {
    marginVertical: 20,
  },
  headingText: {
    fontSize: 32,
    color: colors.primary,
    fontFamily: "Roboto",
    marginStart: 10,
  },
  formContainer: {
    marginTop: 40,
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: colors.secondary,
    borderRadius: 100,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    padding: 2,
    marginVertical: 10,
  },
  textInput: {
    flex: 1,
    paddingHorizontal: 10,
    fontFamily: "Roboto",
  },
  errorText: {
    color: "red",
    marginTop: 5,
    marginLeft: 10,
  },
  loginButtonWrapper: {
    backgroundColor: colors.primary,
    borderRadius: 100,
    marginTop: 20,
  },
  loginText: {
    color: colors.white,
    fontSize: 20,
    fontFamily: "Roboto",
    textAlign: "center",
    padding: 10,
  },
  continueText: {
    textAlign: "center",
    marginVertical: 20,
    fontSize: 14,
    fontFamily: "Roboto",
    color: colors.primary,
  },
  googleButtonContainer: {
    flexDirection: "row",
    borderWidth: 2,
    borderColor: colors.primary,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    marginVertical: 10,
  },
  googleImage: {
    height: 20,
    width: 20,
  },
  googleText: {
    fontSize: 20,
    fontFamily: "Roboto",
  },
  footerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
    gap: 5,
  },
  accountText: {
    color: colors.primary,
    fontFamily: "Roboto",
  },
  signupText: {
    color: "blue",
    fontFamily: "Roboto",
    textDecorationLine: "underline",
    fontWeight: "900",
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  closeModalButton: {
    position: "absolute",
    top: 10,
    right: 10,
    padding: 10,
    zIndex: 100,
  },
  termsContainer: {
    alignItems: "flex-start",
    marginTop: 10,
    lineHeight: 10,
  },
  termsText: {
    fontSize: 14,
    fontFamily: "Roboto",
    textAlign: "center",
  },
  termsLink: {
    color: "blue",
    fontWeight: "900",
    textDecorationLine: "underline",
    marginHorizontal: 5,
  },
  loadingOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default LoginScreen;
