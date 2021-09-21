import React, { useState } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

export default function Search({ navigation }) {
  const [hobbySelect, setHobbySelect] = useState('');
  return (
    <View style={styles.container}>
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
    height: 40
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
