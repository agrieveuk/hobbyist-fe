import React, { useContext } from 'react';
import { View, StyleSheet, Text, Button, TouchableOpacity } from 'react-native';
import { AuthContext } from '../context';
import { Ionicons, Entypo, FontAwesome5 } from '@expo/vector-icons';

export default function createAnAccount({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.selectAccount}>Select Account Type:</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('CreatePersonalAccount')}
      >
        <View style={styles.accountBoxPersonal}>
          <Text style={styles.accountTitle}>Personal Account</Text>

          <FontAwesome5 name="search-location" size={100} color="white" />

          <Text style={styles.accountDescription}>
            With a personal account, you can search for any club/hobby in your
            area.
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('CreateBusinessAccount')}
      >
        <View style={styles.accountBoxBusiness}>
          <Text style={styles.accountTitle}>Business Account</Text>

          <Entypo name="location" size={100} color="white" />

          <Text style={styles.accountDescription}>
            With a business account, you can list your club/hobby to your
            members.
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  selectAccount: {
    fontSize: 20
  },
  accountBoxBusiness: {
    alignItems: 'center',
    backgroundColor: 'rgb(4,122,156)',
    margin: 20,
    width: 300,
    borderRadius: 10
  },
  accountBoxPersonal: {
    alignItems: 'center',
    backgroundColor: 'rgb(0,166,159)',
    margin: 20,
    width: 300,
    borderRadius: 10
  },
  accountTitle: {
    fontSize: 30,
    marginBottom: 15,
    color: 'white',
    marginTop: 15
  },
  accountDescription: {
    textAlign: 'center',
    fontSize: 15,
    marginTop: 15,
    color: 'white',
    marginBottom: 15
  }
});

// <Button
// color="#3737"
// style={styles.button}
// accessibilityLabel="Create an Account"
// title="Create NEW Account"
// onPress={() => signUp()}
// />
