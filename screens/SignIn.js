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

export default function SignIn({ navigation }) {
  const { signIn } = useContext(AuthContext);
  const [secure, setSecure] = useState(true);
  const [selectedTab, setSelectedTab] = useState('personal');
  console.log(selectedTab);

  return (
    <View style={styles.container}>
      <View style={styles.LoginTabs}>
        <TouchableOpacity onPress={() => setSelectedTab('personal')}>
          <View
            style={
              selectedTab === 'personal' ? styles.PersonalTab : styles.MuteTab
            }
          >
            <Text style={{ color: 'white' }}>Personal Login</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelectedTab('business')}>
          <View
            style={
              selectedTab === 'business' ? styles.BusinessTab : styles.MuteTab
            }
          >
            <Text style={{ color: 'white' }}>Business Login</Text>
          </View>
        </TouchableOpacity>
      </View>
      <Text style={{ margin: 10 }}>
        Please Enter Your Username & Password:{' '}
      </Text>
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

      <View style={styles.button}>
        <Button
          color="coral"
          style={styles.button}
          accessibilityLabel="Sign In"
          title="Sign In"
          onPress={() => signIn()}
        />
      </View>
      <View style={styles.button}>
        <Button
          color="coral"
          style={styles.button}
          accessibilityLabel="Create an Account"
          title="Create an Account"
          onPress={() => navigation.navigate('signUp')}
        />
      </View>
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
    fontSize: 100,
    margin: 10
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
