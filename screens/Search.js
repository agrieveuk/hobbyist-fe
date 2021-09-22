import React, { useState } from 'react';
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

export default function Search({ navigation }) {
  const [hobbySelect, setHobbySelect] = useState('');
  return (
    <View style={styles.container}>
      <Formik
        initialValues={{
          hobby: '',
          maxDistance: '',
          price: '',
          skillLevel: ''
        }}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View>
            <Text>Choose a Hobby:</Text>
            <View style={styles.view1}>
              <RNPickerSelect
                onValueChange={handleChange('hobby')}
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
                onValueChange={handleChange('maxDistance')}
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
                onValueChange={handleChange('price')}
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
                onValueChange={handleChange('skillLevel')}
                useNativeAndroidPickerStyle={false}
                style={{
                  inputAndroid: {
                    color: 'black'
                  }
                }}
                placeholder={{ label: 'All', value: 'all' }}
                items={[
                  { label: 'Beginner', value: 'Beginner' },
                  { label: 'Intermediate', value: 'intermediate' },
                  { label: 'Expert', value: 'expert' }
                ]}
              />
            </View>
            <TouchableOpacity
              onPress={handleSubmit}
              style={{ alignItems: 'center', marginTop: 20 }}
            >
              <View
                style={styles.button}
                accessibilityLabel="Submit"
                title="Submit"
                onPress={handleSubmit}
              >
                <Text style={{ color: 'white', fontSize: 20 }}>
                  Submit Entries
                </Text>
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e1dce6'
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
  hobbySelect: {
    borderWidth: 1,
    color: 'black',
    borderColor: '#777',
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
