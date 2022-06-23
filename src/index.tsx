/* eslint-disable react/react-in-jsx-scope */
import { StyleSheet, View, Image, Text } from "react-native";
// import { StatusBar } from "expo-status-bar";
import { Home, Game } from "@screens";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  DeliusUnicase_400Regular,
  DeliusUnicase_700Bold,
} from "@expo-google-fonts/delius-unicase";

export default function App() {
  const [fontLoaded] = useFonts({
    DeliusUnicase_400Regular,
    DeliusUnicase_700Bold,
  });

  if (!fontLoaded) return <AppLoading />;
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 25,
          fontFamily: "DeliusUnicase_400Regular",
        }}
      >
        Hello World
      </Text>
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
