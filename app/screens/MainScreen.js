import React from "react";
import { Image, StyleSheet, View } from "react-native";
import AppButton from "../components/AppButton";
import Screen from "../components/Screen";

function MainScreen(props) {
  return (
    <Screen>
      <Image
        style={styles.backgroundImage}
        source={require("../assets/statpicedit2.png")}
      ></Image>
      <View style={styles.buttons}>
        <View style={styles.addButton}>
          <AppButton
            color="#000"
            image="plus"
            style={styles.addButton}
          ></AppButton>
        </View>
        <View style={styles.resetButton}>
          <AppButton color="#000" image="minus"></AppButton>
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  addButton: {
    backgroundColor: "gold",
    width: 125,
    height: 125,
    alignSelf: "flex-end",
    marginHorizontal: 50,
    borderRadius: 65,
  },
  background: {},
  backgroundImage: {
    width: "100%",
    height: "50%",
  },
  buttons: {
    flexDirection: "row-reverse",
    justifyContent: "space-between",
  },
  resetButton: {
    backgroundColor: "tomato",
    width: 125,
    height: 125,
    alignSelf: "flex-start",
    marginHorizontal: 65,
    borderRadius: 65,
  },
});

export default MainScreen;
