import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import MapView from 'react-native-maps';

export default function MapViewPage() {
  const [state, setState] = useState(false);
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        maxZoomLevel={20}
        initialRegion={{
          latitude: 53.384067,
          longitude: -2.551836,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1
        }}
      >
        <MapView.Marker
          coordinate={{ latitude: 53.384067, longitude: -2.551836 }}
          title={'JUDO GROUP!'}
          description={'this is a judo club'}
          pinColor="tan"
          onPress={() => setState(true)}
        />
        <MapView.Marker
          coordinate={{ latitude: 53.417641, longitude: -2.523668 }}
          title={'Football Lids'}
          description={'this is a Football club'}
          onPress={() => setState(true)}
        />
        <MapView.Marker
          coordinate={{ latitude: 53.380421, longitude: -2.560373 }}
          title={'Rugby Club'}
          description={'this is a Rugby club'}
          pinColor="green"
          onPress={() => setState(true)}
        />
        <MapView.Marker
          coordinate={{ latitude: 53.404594, longitude: -2.588307 }}
          title={'Swimming Pool'}
          description={'this is a Swimming club'}
          pinColor="blue"
          onPress={() => setState(true)}
        />
      </MapView>
      {state && <Text>Hello</Text>}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  map: {
    marginTop: 20,
    width: '90%',
    height: '50%'
  }
});
