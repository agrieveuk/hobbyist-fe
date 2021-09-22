import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity
} from 'react-native';

export default function ClubPage({ navigation, route }) {
  return (
    <View style={styles.container}>
      <Text style={{ color: '#8949d9', fontSize: 30, margin: 20 }}>
        {route.params.club}
      </Text>
      <Image
        style={styles.image}
        source={{
          uri: 'https://images.unsplash.com/flagged/photo-1576448438685-9f5e5b283d4f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
        }}
      />

      <Text
        style={{
          color: '#431275',
          fontSize: 16,
          margin: 20,
          textAlign: 'center'
        }}
      >
        A review is an evaluation of a publication, service, or company such as
        a movie (a movie review), video game (video game review), musical
        composition (music review of a composition or recording), book (book
        review);
      </Text>
      <Text
        style={{
          color: '#431275',
          fontSize: 20,
          margin: 20,
          textAlign: 'center'
        }}
      >
        Timings: 1pm, 2pm, 5pm
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
    justifyContent: 'center'
  },
  image: {
    width: '80%',
    height: '50%'
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
