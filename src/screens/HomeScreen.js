import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { colors } from "../utlis/colors";

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleProfile = () => {
    const user = {
      name: "John Doe", 
    };

    navigation.navigate("ProfileScreen",{userName:user.userName});
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleProfile}>
        </TouchableOpacity>
      </View>
      <Image source={require("../assets/images/logo.png")} style={styles.logo} />
      <Image source={require("../assets/images/man.png")} style={styles.bannerImage} />
      <Text style={styles.title}>Welcome Home </Text>
      <Text style={styles.subTitle}>Itr Filing</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 20,
    marginTop: 20,
  },
  headerText: {
    fontSize: 24,
    color: colors.primary,
    fontFamily: "Roboto",
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
    paddingHorizontal: 20,
    textAlign: "center",
    color: colors.primary,
    marginTop: 40,
  },
  subTitle: {
    fontSize: 18,
    paddingHorizontal: 20,
    textAlign: "center",
    color: colors.secondary,
    fontFamily: "Roboto",
    marginVertical: 20,
  },
});

export default HomeScreen;
