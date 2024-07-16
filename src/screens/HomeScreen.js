import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { colors } from "../utlis/colors";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Track login state

  // Simulate session timeout after 1 minute
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoggedIn(false); // Set isLoggedIn to false after 1 minute
    }, 60000); // 60000 milliseconds = 1 minute

    return () => clearTimeout(timeout); // Clean up the timeout on unmount or state change
  }, []); // Empty dependency array ensures useEffect runs only once on mount

  // Use useFocusEffect to handle screen focus events
  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        // Check if user is not logged in, then prevent navigation
        if (!isLoggedIn) {
          navigation.navigate('LOGIN'); // Navigate to LoginScreen on logout
          return true; // Returning true prevents the default back navigation
        }
        return false; // Allow default back navigation if user is logged in
      };

      // Add hardware back press listener
      const backHandler = navigation.addListener("beforeRemove", (e) => {
        if (!onBackPress()) {
          // Default behavior if onBackPress returns false
          e.preventDefault();
        }
      });

      // Clean up the listener
      return () => {
        backHandler(); // Remove the listener properly
      };

    }, [navigation, isLoggedIn])
  );

  const handleProfile = () => {
    const user = {
      name: "Himanshu Rawat", 
    };

    navigation.navigate("ProfileScreen", { userName: user.name });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
      </View>
      <Image source={require("../assets/images/logo.png")} style={styles.logo} />
      <Image source={require("../assets/images/man.png")} style={styles.bannerImage} />
      <Text style={styles.title}>Welcome Home</Text>
      <Text style={styles.subTitle}>Itr Filing</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    position: "absolute",
    top: 20,
    left: 20,
  },
  logo: {
    height: 40,
    width: 140,
    marginVertical: 30,
  },
  bannerImage: {
    marginVertical: 20,
    height: 250,
    width: 231,
  },
  title: {
    fontSize: 40,
    fontFamily: "Roboto",
    textAlign: "center",
    color: colors.primary,
    marginTop: 40,
  },
  subTitle: {
    fontSize: 18,
    textAlign: "center",
    color: colors.secondary,
    fontFamily: "Roboto",
    marginVertical: 20,
  },
});

export default HomeScreen;
