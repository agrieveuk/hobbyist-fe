import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Hobbyist</Text>
      <Button
        style={styles.button}
        title="Filter Search"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    height: 20,
    marginBottom: 0,
    // justifyContent: "center",
  },
  header: {
    padding: 40,
    fontSize: 40,
  },
  button: {
    color: "#841584",
  },
});
