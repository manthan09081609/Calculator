import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  mainScreen: {
    marginVertical: 10,
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  display: {
    elevation: 10,
    width: "95%",
    height: "10%",
    backgroundColor: "#ffffff",
    borderRadius: 10,
    padding: 10,
  },
  darkTheme: {
    backgroundColor: "#555555",
  },
  displayText: {
    fontSize: 50,
    textAlign: "right",
    marginBottom: 10,
  },
});
