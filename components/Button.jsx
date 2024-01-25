import { View, Text, Pressable } from "react-native";
import React, { useContext } from "react";

import { styles } from "../styles/ButtonStyles";

import { ClickContext } from "../context/ClickContext";
import { ThemeContext } from "../context/ThemeContext";

const Button = ({ text, isRed = false, isGray = false, isWhite = false }) => {
  const { handlePress } = useContext(ClickContext);
  const theme = useContext(ThemeContext);

  return (
    <Pressable
      style={[
        styles.btn,
        isRed ? styles.btnRed : isGray ? styles.btnGray : styles.btnWhite,
        theme === "light" && {
          elevation: 2,
        },
      ]}
      onPress={() => handlePress(text)}
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
