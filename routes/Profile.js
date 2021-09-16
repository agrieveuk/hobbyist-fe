import React, { useContext } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import { AuthContext } from '../context';

export default function Profile({ navigation }) {
  const { signOut } = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Text>Profile Page!</Text>
      <Button
        color="#3737"
        style={styles.button}
        accessibilityLabel="Learn more about this purple button"
        title="Sign Out"
        onPress={() => signOut()}
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
