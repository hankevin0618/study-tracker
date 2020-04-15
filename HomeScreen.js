import React from "react";
import { StyleSheet, Text, View, Alert } from "react-native";
import { Button } from "react-native-elements";

function MainButtons() {
  return (
    <View>
      <Button
        buttonStyle={styles.mainButtons}
        title="Left button"
        color="red"
        onPress={() => Alert.alert("Left button pressed")}
      />
      <Button
        buttonStyle={styles.mainButtons}
        title="Left button"
        onPress={() => Alert.alert("Left button pressed")}
      />
    </View>
  );
}
export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.topHalf}>
        <Text style={styles.logo}>Study Jina Study</Text>
      </View>
      <View style={styles.bottomHalf}>
        <MainButtons />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: "cornsilk",
    textAlign: "center",
  },
  topHalf: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  bottomHalf: { flex: 1, marginTop: 10, borderStyle: "solid", borderWidth: 1 },
  logo: { fontSize: 40, color: "black", fontWeight: "800" },
  mainButtons: {
    marginHorizontal: 80,
    marginVertical: 10,
  },
});
