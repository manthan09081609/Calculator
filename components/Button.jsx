import { View, Text, Pressable } from "react-native";
import React from "react";

import { styles } from "../styles/ButtonStyles";

const Button = ({
  text,
  isRed = false,
  isGray = false,
  isWhite = false,
  onPress,
}) => {
  return (
    <Pressable
      style={[
        styles.btn,
        isRed ? styles.btnRed : isGray ? styles.btnGray : styles.btnWhite,
      ]}
    >
      <Text
        style={[
          styles.btnText,
          isRed || isGray ? styles.textWhite : styles.textBlack,
        ]}
      >
        {text}
      </Text>
    </Pressable>
  );
};

export default Button;
