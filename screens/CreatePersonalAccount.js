import React, { useContext, useState } from 'react';
import { View, StyleSheet, Text, Button, TextInput } from 'react-native';
import { AuthContext } from '../context';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Formik } from 'formik';

export default function CreatePersonalAccount({ navigation }) {
  const { signUp } = useContext(AuthContext);
  const [secure, setSecure] = useState(true);
  return (
    <View style={styles.container}>
      <Formik
        initialValues={{
          personalName: '',
          personalUsername: '',
          personalEmailAddress: '',
          personalPassword: '',
          personalConfirmPassword: ''
        }}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View>
            <Text style={styles.enterDetailsTitle}>
              Enter Your Personal Account Details Below:
            </Text>
            <Text>Enter Your Name:</Text>
            <TextInput
              style={styles.input}
              placeholder="Your Name"
              onChangeText={handleChange('personalName')}
              required
            />
            <Text>Enter Your Username:</Text>
            <TextInput
              style={styles.input}
              placeholder="Username"
              onChangeText={handleChange('personalUsername')}
              required
            />
            <Text>Enter Your Email Address:</Text>
            <TextInput
              style={styles.input}
              placeholder="example@example.com"
              onChangeText={handleChange('personalEmailAddress')}
              required
            />
            <Text>Enter A Password:</Text>
            <View style={styles.input}>
              <TextInput
                placeholder="Password"
                secureTextEntry={secure}
                style={styles.inputText}
                onChangeText={handleChange('personalPassword')}
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
            <Text>Confirm Password</Text>
            <View style={styles.input}>
              <TextInput
                placeholder="Confirm Password"
                secureTextEntry={secure}
                style={styles.inputText}
                onChangeText={handleChange('confirmPersonalPassword')}
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
            <View style={styles.button}>
              <Button
                color="coral"
                style={styles.button}
                accessibilityLabel="Submit"
                title="Submit"
                onPress={handleSubmit}
              />
              <Button
                color="#3737"
                style={styles.button}
                accessibilityLabel="Create an Account"
                title="Create New Account"
                onPress={() => signUp()}
              />
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  enterDetailsTitle: {
    fontSize: 20,
    marginBottom: 15
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
