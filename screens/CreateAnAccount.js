import React, { useContext } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import { AuthContext } from '../context';
export default function createAnAccount() {
  const { signUp } = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Text>Sign Up Page!!!</Text>
      <Button
        color="#3737"
        style={styles.button}
        accessibilityLabel="Create an Account"
        title="Create NEW Account"
        onPress={() => signUp()}
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
