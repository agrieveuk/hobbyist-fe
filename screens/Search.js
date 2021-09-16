import React, { useState } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

export default function Search({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Search Page!!!!</Text>
      <Text>age?</Text>
      <Text>price?</Text>
      <Button
        color="#3737"
        style={styles.button}
        accessibilityLabel="Learn more about this purple button"
        title="Map View"
        onPress={() => navigation.navigate('MapViewPage')}
      />
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
