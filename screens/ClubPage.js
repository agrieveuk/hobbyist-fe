import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';
import { getBusinessUserByClub } from '../api';

import { art, other, sport, music } from '../images';

export default function ClubPage({ navigation, route }) {
  const [user, setUser] = useState({});
  let image = {};
  console.log(user);
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
        openDay = day;
      }
    }
    return openDay;
  };
  const openDay = findOpenDayAndTimes(route.params.currentClub.hours);
  useEffect(() => {
    const requestFunc = async () => {
      try {
        const request = await getBusinessUserByClub(
          route.params.currentClub.clubName
        );
        setUser(request.businessUser[0]);
      } catch (error) {
        console.log(error);
      }
    };
    requestFunc();
  }, []);
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <View
        style={{
          width: 200,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <Text
          style={{
            color: '#431275',
            fontSize: 15,
            textAlign: 'center',
            marginTop: 20,
          }}
        >
          Category: {route.params.currentClub.clubType}
        </Text>
        <Text
          style={{
            color: '#431275',
            fontSize: 15,
            textAlign: 'center',
            marginTop: 20,
          }}
        >
          Price: {`£${route.params.currentClub.price}`}
        </Text>
      </View>

      <Text
        style={{
          color: '#431275',
          fontSize: 20,
          textAlign: 'center',
          marginTop: 10,
        }}
      >
        About
      </Text>
      <Text
        style={{
          color: '#431275',
          fontSize: 16,
          marginBottom: 20,
          textAlign: 'center',
        }}
      >
        {route.params.currentClub.description}
      </Text>
      <Text
        style={{
          color: '#431275',
          fontSize: 20,
          textAlign: 'center',
          textTransform: 'capitalize',
        }}
      >
        {openDay}
      </Text>
      <Text
        style={{
          color: '#431275',
          fontSize: 16,
          textAlign: 'center',
        }}
      >{`Opening Time ${route.params.currentClub.hours[openDay].open}:00`}</Text>
      <Text
        style={{
          color: '#431275',
          fontSize: 16,
          textAlign: 'center',
          marginBottom: 5,
        }}
      >{`Closing Time ${route.params.currentClub.hours[openDay].close}:00`}</Text>
      <Text
        style={{
          color: '#431275',
          fontSize: 20,
          textAlign: 'center',
          marginTop: 20,
        }}
      >
        Address
      </Text>
      <Text
        style={{
          color: '#431275',
          fontSize: 16,
          textAlign: 'center',
          marginBottom: 20,
        }}
      >{` ${route.params.currentClub.address.firstLine}, ${route.params.currentClub.address.postcode}`}</Text>
      <View
        style={{
          width: 300,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <Text
          style={{
            color: '#431275',
            fontSize: 15,
            textAlign: 'center',
            marginTop: 0,
          }}
        >
          Age Group: {route.params.currentClub.ageGroup}
        </Text>
        <Text
          style={{
            color: '#431275',
            fontSize: 15,
            textAlign: 'center',
            marginBottom: 10,
          }}
        >
          level: {`${route.params.currentClub.level}`}
        </Text>
      </View>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('BusinessPage', {
            user,
          })
        }
      >
        <View
          style={styles.button}
          accessibilityLabel="Go to business page"
          title="Go To Business page"
        >
          <Text style={{ color: 'white', fontSize: 15 }}>
            Go To business page
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  image: {
    width: '100%',
    height: '30%',
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
    margin: 10,
  },
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
