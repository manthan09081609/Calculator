import { View, Text } from "react-native";
import React from "react";

import { styles } from "../styles/KeyPadStyles";
import Button from "./Button";

const KeyPad = () => {
  return (
    <View style={styles.keyPad}>
      <View style={styles.keyPadRow}>
        <Button text={"AC"} isRed />
        <Button text={"()"} isGray />
        <Button text={"%"} isGray />
        <Button text={"/"} isGray />
      </View>
      <View style={styles.keyPadRow}>
        <Button text={"7"} isWhite />
        <Button text={"8"} isWhite />
        <Button text={"9"} isWhite />
        <Button text={"*"} isGray />
      </View>
      <View style={styles.keyPadRow}>
        <Button text={"4"} isWhite />
        <Button text={"5"} isWhite />
        <Button text={"6"} isWhite />
        <Button text={"-"} isGray />
      </View>
      <View style={styles.keyPadRow}>
        <Button text={"1"} isWhite />
        <Button text={"2"} isWhite />
        <Button text={"3"} isWhite />
        <Button text={"+"} isGray />
      </View>
      <View style={styles.keyPadRow}>
        <Button text={"0"} isWhite />
        <Button text={"."} isGray />
        <Button text={"<"} isRed />
        <Button text={"="} isGray />
      </View>
    </View>
  );
};

export default KeyPad;
