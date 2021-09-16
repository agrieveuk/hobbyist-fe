import React, { useContext, useState } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import { AuthContext } from '../context';

export default function SignIn({ navigation }) {
  const { signIn } = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Text>Sign In Page!!!</Text>
      <Button
        color="#3737"
        style={styles.button}
        accessibilityLabel="Sign In"
        title="Sign In"
        onPress={() => signIn()}
      />
      <Button
        color="#3737"
        style={styles.button}
        accessibilityLabel="Create an Account"
        title="Create an Account"
        onPress={() => navigation.navigate('signUp')}
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
