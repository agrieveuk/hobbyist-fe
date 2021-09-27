import React, { useContext, useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Button,
  TextInput,
  TouchableOpacity
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { Formik } from 'formik';
import { Entypo } from '@expo/vector-icons';
import { AuthContext } from '../context';

export default function CreateBPersonalAccount({ navigation }) {
  const [secure, setSecure] = useState(true);
  const { signUp, useToken } = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Formik
        initialValues={{
          email: '',
          username: '',
          businessName: '',
          password: '',
          phoneNumber: ''
        }}
        onSubmit={(values) => {
          console.log(values);
          signUp();
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View>
            <Text style={styles.enterDetailsTitle}></Text>

            <Text>Enter a User Name:</Text>
            <TextInput
              style={styles.input}
              placeholder="username"
              onChangeText={handleChange('username')}
              required
            />

            <Text>Enter your Email:</Text>
            <TextInput
              style={styles.input}
              placeholder="Email"
              onChangeText={handleChange('email')}
              required
            />
            <Text>Enter your Password:</Text>
            <View style={styles.input}>
              <TextInput
                placeholder="Password"
                secureTextEntry={secure}
                style={styles.inputText}
                onChangeText={handleChange('password')}
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

            <TouchableOpacity
              onPress={handleSubmit}
              style={{ alignItems: 'center' }}
            >
              <View
                style={styles.button}
                accessibilityLabel="Submit"
                title="Submit"
                onPress={handleSubmit}
              >
                <Text style={{ color: 'white', fontSize: 20 }}>Submit</Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#e1dce6'
  },
  enterDetailsTitle: {
    fontSize: 20,
    marginBottom: 15
  },
  input: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: 'white',
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
  description: {
    flexDirection: 'row',
    height: 80,
    borderRadius: 20,
    width: 200,
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: 'white',
    textAlignVertical: 'top',
    padding: 8,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  view1: {
    borderWidth: 1,
    paddingLeft: 20,
    justifyContent: 'center',
    borderColor: 'white',
    backgroundColor: 'white',
    padding: 8,
    margin: 10,
    width: 200,
    borderRadius: 20,
    height: 40
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#8949d9',
    color: 'white',
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    width: 200,
    position: 'relative'
  }
});
