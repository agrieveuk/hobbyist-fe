import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Homepage() {
  return (
    <View style={styles.container}>
      <Text>Clubs You May Be Interested In:</Text>
      <ul>
        <li>HSJkb</li>
        <li>HSjsfjJkb</li>
        <li>HSsfgjghJkb</li>
        <li>HSJhgkgkhfgkfgkkb</li>
      </ul>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 2,
    alignItems: "center",
    // justifyContent: "center",
  },
});
