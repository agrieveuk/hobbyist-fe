import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity
} from 'react-native';

import { art, other, sport, music } from '../images';

export default function ClubPage({ navigation, route }) {
  let image = {};

  if (route.params.currentClub.clubType === 'sport') {
    image = sport;
  } else if (route.params.currentClub.clubType === 'art') {
    image = art;
  } else if (route.params.currentClub.clubType === 'music') {
    image = music;
  } else if (route.params.currentClub.clubType === 'other') {
    image = other;
  }

  const findOpenDayAndTimes = (hours) => {
    let openDay = '';

    for (const day in hours) {
      if (hours[day].open) {
        console.log('inside open');
        openDay = day;
      }
    }
    return openDay;
  };
  const openDay = findOpenDayAndTimes(route.params.currentClub.hours);

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <Text
        style={{
          color: '#431275',
          fontSize: 20,
          textAlign: 'center',
          marginTop: 20
        }}
      >
        Category: {route.params.currentClub.clubType}
      </Text>
      <Text
        style={{
          color: '#431275',
          fontSize: 20,
          textAlign: 'center',
          marginTop: 20
        }}
      >
        About
      </Text>
      <Text
        style={{
          color: '#431275',
          fontSize: 16,
          marginBottom: 20,
          textAlign: 'center'
        }}
      >
        {route.params.currentClub.description}
      </Text>
      <Text
        style={{
          color: '#431275',
          fontSize: 20,
          textAlign: 'center',
          textTransform: 'capitalize'
        }}
      >
        {openDay}
      </Text>
      <Text
        style={{
          color: '#431275',
          fontSize: 20,
          textAlign: 'center'
        }}
      >{`Opening Time ${route.params.currentClub.hours[openDay].open}:00`}</Text>
      <Text
        style={{
          color: '#431275',
          fontSize: 20,
          textAlign: 'center',
          marginBottom: 20
        }}
      >{`Closing Time ${route.params.currentClub.hours[openDay].close}:00`}</Text>
      <Text
        style={{
          color: '#431275',
          fontSize: 20,
          textAlign: 'center',
          marginTop: 20
        }}
      >
        Contact Info
      </Text>

      <TouchableOpacity onPress={() => navigation.navigate('BusinessPage')}>
        <View
          style={styles.button}
          accessibilityLabel="Go to business page"
          title="Go To Business page"
        >
          <Text style={{ color: 'white', fontSize: 15 }}>
            Go To Business Page
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  image: {
    width: '100%',
    height: '30%'
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
    margin: 20
  }
});

// <Text
//         style={{
//           color: '#431275',
//           fontSize: 20,
//           textAlign: 'center',
//         }}
//       >{`Opening Time ${route.params.currentClub.hours[openDay].open}:00`}</Text>
//       <Text
//         style={{
//           color: '#431275',
//           fontSize: 20,
//           textAlign: 'center',
//           marginBottom: 20,
//         }}
//       >{`Closing Time ${route.params.currentClub.hours[openDay].close}:00`}</Text>
