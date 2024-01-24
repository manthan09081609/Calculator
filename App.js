import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import MainScreen from "./screens/MainScreen";
import IntroScreen from "./screens/IntroScreen";
import { utilityStyles } from "./styles/UtilityStyles";

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  setTimeout(() => {
    setIsLoaded(true);
  }, 2000);

  return (
    <SafeAreaView style={utilityStyles.AndroidSafeArea}>
      <View style={styles.container}>
        <StatusBar style="auto" />
        {isLoaded ? <MainScreen /> : <IntroScreen />}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
