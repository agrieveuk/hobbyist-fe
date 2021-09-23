import React, { useContext, useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Button,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { Formik } from 'formik';

export default function AddAClub({ navigation }) {
  const [hobbySelect, setHobbySelect] = useState('');
  return (
    <View style={styles.container}>
      <Formik
        initialValues={{
          clubType: '',
          clubName: '',
          clubAddress: '',
          clubDescription: '',
          clubPrice: '',
          clubSkillLevel: '',
          clubAgeGroup: '',
        }}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View>
            <Text style={styles.enterDetailsTitle}></Text>
            <Text>Select The Club Type</Text>
            <View style={styles.view1}>
              <RNPickerSelect
                onValueChange={handleChange('clubType')}
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
            <TextInput
              style={styles.input}
              placeholder="Club Name"
              onChangeText={handleChange('clubName')}
              required
            />
            <Text>Enter Club Address:</Text>
            <TextInput
              style={styles.input}
              placeholder="Address"
              onChangeText={handleChange('clubAddress')}
              required
            />

            <Text>Description</Text>
            <TextInput
              style={styles.description}
              placeholder="Club Description"
              multiline={true}
              onChangeText={handleChange('clubDescription')}
            />
            <Text>Price:</Text>
            <View style={styles.view1}>
              <RNPickerSelect
                onValueChange={handleChange('clubPrice')}
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
                onValueChange={handleChange('clubSkillLevel')}
                useNativeAndroidPickerStyle={false}
                style={{
                  inputAndroid: {
                    color: 'black',
                  },
                }}
                placeholder={{ label: 'All', value: 'all' }}
                items={[
                  { label: 'Beginner', value: 'Beginner' },
                  { label: 'Intermediate', value: 'intermediate' },
                  { label: 'Expert', value: 'expert' },
                ]}
              />
            </View>
            <Text>Choose an Age Group:</Text>
            <View style={styles.view1}>
              <RNPickerSelect
                onValueChange={handleChange('clubAgeGroup')}
                useNativeAndroidPickerStyle={false}
                style={{
                  inputAndroid: {
                    color: 'black',
                  },
                }}
                placeholder={{ label: 'All', value: 'all' }}
                items={[
                  { label: 'Under 12s', value: 'under_12s' },
                  { label: 'Teens', value: 'teens' },
                  { label: 'Adults', value: 'adults' },
                ]}
              />
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
    backgroundColor: '#e1dce6',
  },
  enterDetailsTitle: {
    fontSize: 20,
    marginBottom: 15,
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
    alignItems: 'center',
  },
  inputText: {
    flex: 1,
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
    alignItems: 'center',
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
    height: 40,
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
    position: 'relative',
  },
});
