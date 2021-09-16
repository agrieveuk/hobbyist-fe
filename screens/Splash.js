import React, { useState } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

export default function Splash({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Loading....</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
