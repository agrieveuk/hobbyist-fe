import React, { useState } from 'react';
import { View, StyleSheet, Text, Button, TextInput } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { Formik } from 'formik';

export default function Search({ navigation }) {
  const [hobbySelect, setHobbySelect] = useState('');
  return (
    <View style={styles.container}>
      <Formik
        initialValues={{ email: '' }}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => {
          <View style={styles.view1}>
            <Text>HELLOOJKDGNAJG</Text>
            <TextInput
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
            ></TextInput>
            <Button onPress={handleSubmit} title="Submit" />
          </View>;
        }}
      </Formik>
      <Text>Choose a Hobby:</Text>
      <View style={styles.view1}>
        <RNPickerSelect
          onValueChange={(value) => setHobbySelect(value)}
          useNativeAndroidPickerStyle={false}
          style={{
            inputAndroid: {
              color: 'black'
            }
          }}
          placeholder={{ label: 'All', value: 'all' }}
          items={[
            { label: 'Football', value: 'football' },
            { label: 'Baseball', value: 'baseball' },
            { label: 'Hockey', value: 'hockey' }
          ]}
        />
      </View>
      <Text>Choose a Max Search Distance:</Text>
      <View style={styles.view1}>
        <RNPickerSelect
          onValueChange={(value) => setHobbySelect(value)}
          useNativeAndroidPickerStyle={false}
          style={{
            inputAndroid: {
              color: 'black'
            }
          }}
          placeholder={{ label: '1km', value: '1km' }}
          items={[
            { label: '5km', value: '5km' },
            { label: '10km', value: '10km' },
            { label: '15km', value: '51km' }
          ]}
        />
      </View>
      <Text>Price:</Text>
      <View style={styles.view1}>
        <RNPickerSelect
          onValueChange={(value) => setHobbySelect(value)}
          useNativeAndroidPickerStyle={false}
          style={{
            inputAndroid: {
              color: 'black'
            }
          }}
          placeholder={{ label: 'Free', value: 'free' }}
          items={[
            { label: '£', value: '£' },
            { label: '££', value: '££' },
            { label: '£££', value: '£££' }
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
              color: 'black'
            }
          }}
          placeholder={{ label: 'All', value: 'all' }}
          items={[
            { label: 'Begginer', value: 'begginer' },
            { label: 'Intermediate', value: 'intermediate' },
            { label: 'Expert', value: 'expert' }
          ]}
        />
      </View>
      <Button
        color="#3737"
        style={styles.button}
        accessibilityLabel="Learn more about this purple button"
        title="Submit"
        onPress={() => navigation.navigate('MapViewPage')}
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
    justifyContent: 'center'
  },
  hobbySelect: {
    borderWidth: 1,
    color: 'black',
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,
    borderRadius: 20,
    height: 40
  }
});
