import Constants from "expo-constants";
import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";

function Screen({ children }) {
  return <SafeAreaView style={styles.screen}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "space-around", //main
  },
});

export default Screen;
