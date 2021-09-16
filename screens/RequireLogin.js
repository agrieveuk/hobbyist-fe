import React, { useState } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

export default function RequireLogin({ children, user, setUser }) {
  if (user) return children;
  return (
    <View style={styles.container}>
      <Text>Your not logged in mate!</Text>
      <Button
        color="#841584"
        style={styles.button}
        accessibilityLabel="Learn more about this purple button"
        title="Sign In"
        onPress={() => setUser(true)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
