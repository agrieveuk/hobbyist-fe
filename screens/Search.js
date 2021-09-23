import React, { useEffect, useState } from 'react';
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
import { getClubs } from '../api';

export default function Search({ navigation }) {
  const [mapSearchData, setMapSearchData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (!loading) {
      setLoading(true);
      navigation.navigate('MapViewPage', { mapSearchData });
    }
  }, [loading]);
  return (
    <View style={styles.container}>
      <Formik
        initialValues={{
          hobby: '',
          maxDistance: '',
          price: '',
          skillLevel: '',
          ageGroup: '',
          day: ''
        }}
        onSubmit={(values) => {
          const { hobby, maxDistance, price, skillLevel, ageGroup, day } =
            values;
          console.log(values);

          const requestFunc = async () => {
            const request = await getClubs(
              hobby,
              maxDistance,
              price,
              skillLevel,
              ageGroup,
              day
            );
            setMapSearchData(request);
            setLoading(false);
          };
          requestFunc();
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View>
            <Text>Choose a Hobby Type:</Text>
            <View style={styles.view1}>
              <RNPickerSelect
                onValueChange={handleChange('hobby')}
                useNativeAndroidPickerStyle={false}
                style={{
                  inputAndroid: {
                    color: 'black'
                  }
                }}
                placeholder={{ label: 'Any', value: '' }}
                items={[
                  { label: 'Art', value: 'art' },
                  { label: 'Music', value: 'music' },
                  { label: 'Sport', value: 'sport' },
                  { label: 'Other', value: 'other' }
                ]}
              />
            </View>
            <Text>Choose a Day to Hobby it up!</Text>
            <View style={styles.view1}>
              <RNPickerSelect
                onValueChange={handleChange('day')}
                useNativeAndroidPickerStyle={false}
                style={{
                  inputAndroid: {
                    color: 'black'
                  }
                }}
                placeholder={{ label: 'Any', value: '' }}
                items={[
                  { label: 'Monday', value: 'monday' },
                  { label: 'Tuesday', value: 'tuesday' },
                  { label: 'Wednesday', value: 'wednesday' },
                  { label: 'Thursday', value: 'thursday' },
                  { label: 'Friday', value: 'friday' },
                  { label: 'Saturday', value: 'saturday' },
                  { label: 'Sunday', value: 'sunday' }
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
                placeholder={{ label: 'Any', value: '' }}
                items={[
                  { label: '1km', value: '1km' },
                  { label: '5km', value: '5km' },
                  { label: '10km', value: '10km' },
                  { label: '15km', value: '51km' }
                ]}
              />
            </View>
            <Text>Max Price:</Text>
            <View style={styles.view1}>
              <RNPickerSelect
                onValueChange={handleChange('price')}
                useNativeAndroidPickerStyle={false}
                style={{
                  inputAndroid: {
                    color: 'black'
                  }
                }}
                placeholder={{ label: 'Any', value: '' }}
                items={[
                  { label: '£5', value: '5' },
                  { label: '£10', value: '10' },
                  { label: '£15', value: '15' },
                  { label: '£20', value: '20' },
                  { label: '£25', value: '25' },
                  { label: '£30', value: '30' },
                  { label: '£35', value: '35' }
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
                placeholder={{ label: 'Any', value: '' }}
                items={[
                  { label: 'Beginner', value: 'beginner' },
                  { label: 'Intermediate', value: 'intermediate' },
                  { label: 'Advanced', value: 'advanced' }
                ]}
              />
            </View>
            <Text>Choose an Age Group:</Text>
            <View style={styles.view1}>
              <RNPickerSelect
                onValueChange={handleChange('ageGroup')}
                useNativeAndroidPickerStyle={false}
                style={{
                  inputAndroid: {
                    color: 'black'
                  }
                }}
                placeholder={{ label: 'Any', value: '' }}
                items={[
                  { label: 'Toddler', value: 'toddler' },
                  { label: 'Pre-school', value: 'pre school' },
                  { label: 'Secondary', value: 'secondary' },
                  { label: 'Young adult', value: 'young adult' },
                  { label: 'Adult', value: 'adult' }
                ]}
                // 'toddler',
                //     'pre-school',
                //     'primary-school',
                //     'secondary',
                //     'young adult',
                //     'adult'
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
