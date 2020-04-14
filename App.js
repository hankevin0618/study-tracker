import React from "react";
import { StyleSheet, Text, View, Alert } from "react-native";
import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.topHalf}>
        <Text style={styles.main}>hello</Text>
      </View>
      <View style={styles.bottomHalf}>
        <Button
          buttonStyle={styles.mainButtons}
          title="Left button"
          type="solid"
          onPress={() => Alert.alert("Left button pressed")}
        />
        <Button
          buttonStyle={styles.mainButtons}
          title="Left button"
          type="solid"
          onPress={() => Alert.alert("Left button pressed")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: "#fff",
    textAlign: "center",
  },
  topHalf: { flex: 1, backgroundColor: "red" },
  bottomHalf: { flex: 1, marginTop: 10 },
  main: { fontSize: 30, color: "black" },
  mainButtons: { marginHorizontal: 80, marginVertical: 10 },
});
