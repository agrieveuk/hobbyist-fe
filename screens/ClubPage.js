import React from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";

export default function ClubPage({ navigation, route }) {
  return (
    <View style={styles.container}>
      <Text>{route.params.club}</Text>
      <Image
        style={styles.image}
        source={{
          uri: "https://images.unsplash.com/flagged/photo-1576448438685-9f5e5b283d4f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        }}
      />

      <Text>Club Description</Text>
      <Text>Times: 1, 2, 3, 4</Text>
      <Text>etc</Text>
      <View style={styles.button}>
        <Button
          color="coral"
          style={styles.button}
          accessibilityLabel="Go to business page"
          title="Go To Business page"
          onPress={() => navigation.navigate("BusinessPage")}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "80%",
    height: "50%",
  },
});
