import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function ClubPage({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: 'https://images.unsplash.com/flagged/photo-1576448438685-9f5e5b283d4f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
        }}
      />
      <Text>{navigation.getParam('clubName')}</Text>
      <Text>Club Description</Text>
      <Text>Times: 1, 2, 3, 4</Text>
      <Text>etc</Text>
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
  }
});
