import { Platform, StatusBar, StyleSheet } from "react-native";

export const utilityStyles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "#ffffff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
