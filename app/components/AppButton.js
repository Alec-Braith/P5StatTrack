import { Feather } from "@expo/vector-icons";
import React from "react";
import { TouchableHighlight } from "react-native";

function AppButton({ color, image }) {
  return (
    <TouchableHighlight
      onPress={() => console.log("Pressed ", { image }, " button")}
    >
      <Feather name={image} size={125} color={color} />
    </TouchableHighlight>
  );
}

export default AppButton;
