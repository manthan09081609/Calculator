import { Platform, StatusBar, StyleSheet } from "react-native";

export const utilityStyles = StyleSheet.create({
  AndroidSafeArea: {
    display: "flex",
    width: "100%",
    height: "100%",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
