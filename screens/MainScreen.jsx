import { View, Text, ScrollView, SafeAreaView } from "react-native";
import React from "react";

import { styles } from "../styles/MainScreenStyles.js";
import KeyPad from "../components/KeyPad.jsx";

const MainScreen = () => {
  return (
    <View style={styles.mainScreen}>
      <ScrollView style={styles.display}>
        <Text style={styles.displayText}>123</Text>
      </ScrollView>
      <KeyPad />
    </View>
  );
};

export default MainScreen;
