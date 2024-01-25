import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { SafeAreaView, StyleSheet, Switch, Text, View } from "react-native";
import MainScreen from "./screens/MainScreen";
import IntroScreen from "./screens/IntroScreen";
import { utilityStyles } from "./styles/UtilityStyles";
import { ThemeContext } from "./context/ThemeContext";

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [theme, setTheme] = useState("light");

  setTimeout(() => {
    setIsLoaded(true);
  }, 2000);

  return (
    <ThemeContext.Provider value={theme}>
      <SafeAreaView style={utilityStyles.AndroidSafeArea}>
        <View
          style={[
            styles.container,
            theme === "light" && { backgroundColor: "#333333" },
          ]}
        >
          <Switch
            value={theme === "light"}
            onValueChange={() => setTheme(theme === "light" ? "dark" : "light")}
            thumbColor={"#ffffff"}
            trackColor={{
              true: "#aaaaaa",
            }}
          />
          <StatusBar style="auto" />
          {isLoaded ? <MainScreen /> : <IntroScreen />}
        </View>
      </SafeAreaView>
    </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
});
