import React, { useContext, useState } from 'react';
import { View, StyleSheet, Text, Button, TextInput } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

export default function AddAClub({ navigation }) {
  const [hobbySelect, setHobbySelect] = useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.enterDetailsTitle}></Text>

      <Text>Choose the club type</Text>
      <View style={styles.view1}>
        <RNPickerSelect
          onValueChange={(value) => setHobbySelect(value)}
          useNativeAndroidPickerStyle={false}
          style={{
            inputAndroid: {
              color: 'black',
            },
          }}
          placeholder={{ label: 'All', value: 'all' }}
          items={[
            { label: 'Football', value: 'football' },
            { label: 'Baseball', value: 'baseball' },
            { label: 'Hockey', value: 'hockey' },
          ]}
        />
      </View>
      <Text>Enter Club Name:</Text>
      <TextInput style={styles.input} placeholder="Club Name" required />
      <Text>Enter Club Address:</Text>
      <TextInput style={styles.input} placeholder="Address" required />

      <Text>Description</Text>
      <TextInput
        style={styles.description}
        placeholder="Club Description"
        multiline={true}
      />
      <Text>Price:</Text>
      <View style={styles.view1}>
        <RNPickerSelect
          onValueChange={(value) => setHobbySelect(value)}
          useNativeAndroidPickerStyle={false}
          style={{
            inputAndroid: {
              color: 'black',
            },
          }}
          placeholder={{ label: 'Free', value: 'free' }}
          items={[
            { label: '£', value: '£' },
            { label: '££', value: '££' },
            { label: '£££', value: '£££' },
          ]}
        />
      </View>
      <Text>Choose a Skill Level:</Text>
      <View style={styles.view1}>
        <RNPickerSelect
          onValueChange={(value) => setHobbySelect(value)}
          useNativeAndroidPickerStyle={false}
          style={{
            inputAndroid: {
              color: 'black',
            },
          }}
          placeholder={{ label: 'All', value: 'all' }}
          items={[
            { label: 'Begginer', value: 'begginer' },
            { label: 'Intermediate', value: 'intermediate' },
            { label: 'Expert', value: 'expert' },
          ]}
        />
      </View>
      <Text>Choose an Age Group:</Text>
      <View style={styles.view1}>
        <RNPickerSelect
          onValueChange={(value) => setHobbySelect(value)}
          useNativeAndroidPickerStyle={false}
          style={{
            inputAndroid: {
              color: 'black',
            },
          }}
          placeholder={{ label: 'All', value: 'all' }}
          items={[
            { label: 'Begginer', value: 'begginer' },
            { label: 'Intermediate', value: 'intermediate' },
            { label: 'Expert', value: 'expert' },
          ]}
        />
      </View>

      <View style={styles.button}>
        <Button
          color="coral"
          style={styles.button}
          accessibilityLabel="Create an Account"
          title="Create New Account"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  enterDetailsTitle: {
    fontSize: 20,
    marginBottom: 15,
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
    alignItems: 'center',
  },
  inputText: {
    flex: 1,
  },
  button: {
    fontSize: 100,
    margin: 20,
  },
  description: {
    height: 80,
    borderRadius: 10,
    width: 200,
    borderWidth: 1,
    borderColor: '#777',
    textAlignVertical: 'top',
    padding: 5,
  },
  view1: {
    borderWidth: 1,
    paddingLeft: 30,
    color: 'black',
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,
    borderRadius: 20,
    height: 40,
  },
});
