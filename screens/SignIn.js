import React, { useContext, useState } from 'react';
import { View, StyleSheet, Text, Button, TextInput } from 'react-native';
import { AuthContext } from '../context';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

export default function SignIn({ navigation }) {
  const { signIn } = useContext(AuthContext);
  const [secure, setSecure] = useState(true);
  return (
    <View style={styles.container}>
      <Text>Please Enter Your Username & Password: </Text>
      <TextInput style={styles.input} placeholder="Username" required />

      <View style={styles.input}>
        <TextInput
          placeholder="Password"
          secureTextEntry={secure}
          style={styles.inputText}
          required
        />

        {secure ? (
          <Entypo
            name="eye"
            size={20}
            color="gray"
            onPress={() => setSecure(!secure)}
          />
        ) : (
          <Entypo
            name="eye-with-line"
            size={20}
            color="gray"
            onPress={() => setSecure(!secure)}
          />
        )}
      </View>

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
  },
  input: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,
    borderRadius: 20,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputText: {
    flex: 1
  },
  button: {
    fontSize: 100
  }
});
