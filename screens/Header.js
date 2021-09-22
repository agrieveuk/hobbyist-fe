import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Header() {
  const [findSearchOpen, setFindSearchOpen] = useState(false);

  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Hobbyist</Text>
      <Button
        color="#841584"
        style={styles.button}
        accessibilityLabel="Learn more about this purple button"
        title="Find Search"
        onPress={() => setFindSearchOpen(true)}
      />
      {findSearchOpen && (
        <Button
          color="#8949d9"
          style={styles.button}
          accessibilityLabel="Learn more about this purple button"
          title="submit"
          onPress={() => {
            setFindSearchOpen(false);
          }}
        />
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 40,
    letterSpacing: 1
  }
});
