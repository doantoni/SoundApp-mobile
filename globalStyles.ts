import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  flexWrap: {
    width: "70%",
    marginTop: 20,
    flexDirection: "row",
    gap: "8px",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
  },
  tinyLogo: {
    width: 100,
    height: 100,
  },
  mainTitle: {
    fontSize: 36,
    fontWeight: "bold",
    color: "white",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    elevation: 3,
    backgroundColor: "white",
    margin: 8,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "black",
  },
});
