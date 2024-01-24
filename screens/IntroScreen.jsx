import { View, Image, StyleSheet } from "react-native";
import React from "react";

import logo from "../assets/calculatorlogo.png";

const IntroScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <Image source={logo} style={styles.innerImg} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ff5757",
    width: "100%",
    height: "100%",
  },
  inner: {
    height: 100,
    width: 100,
  },
  innerImg: {
    height: "100%",
    width: "100%",
  },
});

export default IntroScreen;
