import React, { useContext, useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Button,
  TextInput,
  TouchableOpacity
} from 'react-native';
import { AuthContext } from '../context';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Formik } from 'formik';

export default function SignIn({ navigation }) {
  const { signIn } = useContext(AuthContext);
  const [secure, setSecure] = useState(true);
  const [selectedTab, setSelectedTab] = useState('personal');
  console.log(selectedTab);

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{
          username: '',
          password: ''
        }}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View>
            <View style={styles.LoginTabs}>
              <TouchableOpacity onPress={() => setSelectedTab('personal')}>
                <View
                  style={
                    selectedTab === 'personal'
                      ? styles.PersonalTab
                      : styles.MuteTab
                  }
                >
                  <Text style={{ color: 'white', fontSize: 20 }}>
                    Personal User
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setSelectedTab('business')}>
                <View
                  style={
                    selectedTab === 'business'
                      ? styles.BusinessTab
                      : styles.MuteTab
                  }
                >
                  <Text style={{ color: 'white', fontSize: 20 }}>
                    Business User
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.loginWith}>
              {selectedTab === 'personal' ? (
                <Text>Login With A Personal Account</Text>
              ) : (
                <Text>Login With A Business Account</Text>
              )}
            </View>
            <View style={{ alignItems: 'center' }}>
              <TextInput
                style={styles.input}
                placeholder="Username"
                onChangeText={handleChange('username')}
                required
              />

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
            </View>

            <TouchableOpacity
              onPress={() => signIn()}
              style={{ alignItems: 'center' }}
            >
              <View style={styles.button}>
                <Text
                  style={{ color: 'white', fontSize: 20 }}
                  accessibilityLabel="Sign In"
                  title="Sign In"
                  onPress={() => navigation.navigate('homepage')}
                >
                  Sign In
                </Text>
              </View>
            </TouchableOpacity>

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
                <Text style={{ color: 'white', fontSize: 20 }}>
                  Submit Entries (Temp)
                </Text>
              </View>
            </TouchableOpacity>

            <View>
              <Button
                color="#841584"
                accessibilityLabel="Create an Account"
                title="Create an Account"
                onPress={() => navigation.navigate('signUp')}
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
    alignItems: 'center',
    backgroundColor: '#e1dce6',
    borderRadius: 20
  },
  input: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: 'white',
    padding: 8,
    margin: 10,
    width: 250,
    borderRadius: 12,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputText: {
    flex: 1
  },
  loginWith: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20
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
  },
  LoginTabs: {
    flexDirection: 'row',
    margin: 10
  },
  BusinessTab: {
    margin: 10,
    backgroundColor: 'rgb(4,122,156)',
    padding: 10,
    borderRadius: 3,
    color: 'white'
  },

  PersonalTab: {
    margin: 10,
    backgroundColor: 'rgb(0,166,159)',
    padding: 10,
    borderRadius: 3,
    color: 'white'
  },
  MuteTab: {
    margin: 10,
    backgroundColor: 'grey',
    padding: 10,
    borderRadius: 3,
    color: 'white'
  }
});
