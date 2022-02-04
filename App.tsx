import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { MainText } from "./App.styles";

export default function App() {
  console.log(9821, "whats this?");
  return (
    <View style={styles.container}>
      <MainText style={styles.text}>
        Open up App.tsx to start working on your app!
      </MainText>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#202020",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
  },
});
