/* eslint-disable react/react-in-jsx-scope */
// import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Game from "./screens/game/game";
import Home from "./screens/home/home";

export default function App() {
  return (
    <View style={styles.container}>
      <Home />
      <Game />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});