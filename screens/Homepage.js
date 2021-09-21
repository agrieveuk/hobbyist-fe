import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Button } from 'react-native';
import { getClubs } from '../api';

export default function Homepage({ navigation }) {
  const [clubList, setClubList] = useState([]);
  useEffect(() => {
    const requestFunc = async () => {
      try {
        const request = await getClubs();
        console.log(request);
        setClubList(request);
      } catch (error) {
        console.log(error);
      }
    };
    requestFunc();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Clubs You May Be Interested In:</Text>

      <ScrollView>
        {clubList.map((club) => {
          return (
            <View style={styles.li} key={club.clubName}>
              <Text style={styles.club}>{club.clubName}</Text>
              <Button
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
                title={`Go to ${club.clubName}`}
                onPress={() =>
                  navigation.navigate('ClubPage', { club: club.clubName })
                }
              />
            </View>
          );
        })}
      </ScrollView>
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
  club: {
    marginTop: 24,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24
  }
  // li: {
  //   width: 400,
  //   height: 200
  // },
});
