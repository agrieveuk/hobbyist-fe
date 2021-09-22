import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  TouchableOpacity
} from 'react-native';
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

      <ScrollView showsVerticalScrollIndicator={false}>
        {clubList.map((club) => {
          return (
            <View style={styles.card} key={club.clubName}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('ClubPage', { club: club.clubName })
                }
                style={{ alignItems: 'center' }}
              >
                <View
                  style={styles.button}
                  accessibilityLabel="Submit"
                  title={`Go to ${club.clubName}`}
                >
                  <Text style={styles.club}>{club.clubName}</Text>
                  <Text
                    style={{
                      color: '#431275',
                      fontSize: 20
                    }}
                  >
                    {club.clubName}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e1dce6'
  },
  club: {
    marginTop: 20,
    padding: 50,
    width: 300,
    height: 150,
    backgroundColor: 'white',
    fontSize: 24,
    borderRadius: 20
  },
  card: {
    justifyContent: 'center',
    margin: 30,
    width: 350,
    height: 175,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 3 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 3,
    borderRadius: 20
  }
});
