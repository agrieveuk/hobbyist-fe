import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import MapView from 'react-native-maps';

import { art, other, sport, music } from '../images';

export default function MapViewPage({ navigation, route }) {
  const [currentClub, setCurrentClub] = useState(false);
  // console.log(
  //   route.params.mapSearchData.map((x) => x),
  //   '<<<<<<<'
  // );

  let image = {};
  if (currentClub) {
    if (currentClub.clubType === 'sport') {
      image = sport;
    } else if (currentClub.clubType === 'art') {
      image = art;
    } else if (currentClub.clubType === 'music') {
      image = music;
    } else if (currentClub.clubType === 'other') {
      image = other;
    }
  }
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        maxZoomLevel={20}
        initialRegion={{
          latitude: 53.476203,
          longitude: -2.247281,
          latitudeDelta: 0.2,
          longitudeDelta: 0.2,
        }}
      >
        {route.params.mapSearchData.map((club, index) => (
          <MapView.Marker
            key={index}
            coordinate={{
              latitude: club.location.coordinates[0],
              longitude: club.location.coordinates[1],
            }}
            title={club.clubName}
            description={club.clubType}
            pinColor={
              club.clubType === 'art'
                ? 'red'
                : club.clubType === 'sport'
                ? 'lightblue'
                : club.clubType === 'music'
                ? 'lightgreen'
                : 'tan'
            }
            onPress={() => setCurrentClub(club)}
          />
        ))}
      </MapView>
      {currentClub && (
        <>
          <View style={styles.card}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('MapClubPage', { currentClub })
              }
              style={{ alignItems: 'center' }}
            >
              <View
                style={styles.button}
                accessibilityLabel="Submit"
                title={`Go to ${currentClub.clubName}`}
              >
                <Text
                  style={{
                    color: '#431275',
                    fontSize: 20,
                  }}
                >
                  {currentClub.clubName}
                </Text>
              </View>
              <Text>{`£${currentClub.price}`}</Text>
              <Text>{currentClub.clubType}</Text>
              <Text>{currentClub.level}</Text>
              <View style={styles.imageContainer}>
                <ImageBackground
                  source={image}
                  resizeMode="cover"
                  style={styles.image}
                  imageStyle={{
                    borderBottomLeftRadius: 20,
                    borderBottomRightRadius: 20,
                  }}
                ></ImageBackground>
              </View>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#e1dce6',
  },
  map: {
    marginTop: 20,
    width: '90%',
    height: '50%',
  },
  card: {
    justifyContent: 'center',
    margin: 20,
    width: 300,
    backgroundColor: 'white',
    height: 175,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 3 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    borderRadius: 20,
  },
  imageContainer: {
    height: 100,
    width: '100%',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
});

// <MapView.Marker
//           coordinate={{ latitude: 53.384067, longitude: -2.551836 }}
//           title={'JUDO GROUP!'}
//           description={'this is a judo club'}
//           pinColor="tan"
//           onPress={() => setState(true)}
//         />
//         <MapView.Marker
//           coordinate={{ latitude: 53.417641, longitude: -2.523668 }}
//           title={'Football Lids'}
//           description={'this is a Football club'}
//           onPress={() => setState(true)}
//         />
//         <MapView.Marker
//           coordinate={{ latitude: 53.380421, longitude: -2.560373 }}
//           title={'Rugby Club'}
//           description={'this is a Rugby club'}
//           pinColor="green"
//           onPress={() => setState(true)}
//         />
//         <MapView.Marker
//           coordinate={{ latitude: 53.404594, longitude: -2.588307 }}
//           title={'Swimming Pool'}
//           description={'this is a Swimming club'}
//           pinColor="blue"
//           onPress={() => setState(true)}
//         />
