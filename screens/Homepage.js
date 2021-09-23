import React, { useEffect, useState, useContext } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { getClubs } from '../api';
import { art, other, sport, music } from '../images';
import { AuthContext } from '../context';

let image = {};

export default function Homepage({ navigation, InitialState }) {
  const [clubList, setClubList] = useState([]);
  const [currentClub, setCurrentClub] = useState(false);
  const [loading, setLoading] = useState(true);
  const [pageLoading, setPageLoading] = useState(true);
  const hello = useContext(AuthContext);

  useEffect(() => {
    const requestFunc = async () => {
      try {
        setPageLoading(true);
        const request = await getClubs();

        setClubList(request);
        setPageLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    requestFunc();
  }, []);
  useEffect(() => {
    if (!loading) {
      setLoading(true);
      navigation.navigate('ClubPage', { currentClub });
    }
  }, [loading]);

  return (
    <View style={styles.container}>
      <Text style={styles.interest}>Clubs You May Be Interested In:</Text>
      <View style={styles.scroller}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {clubList.map((club) => {
            if (club.clubType === 'sport') {
              image = sport;
            } else if (club.clubType === 'art') {
              image = art;
            } else if (club.clubType === 'music') {
              image = music;
            } else if (club.clubType === 'other') {
              image = other;
            }
            return (
              <View style={styles.card} key={club._id}>
                <TouchableOpacity
                  onPress={() => {
                    setCurrentClub(club);
                    setLoading(false);
                  }}
                  style={{ alignItems: 'center' }}
                >
                  <View
                    style={styles.button}
                    accessibilityLabel="Submit"
                    title={`Go to ${club.clubName}`}
                  >
                    <Text
                      style={{
                        color: '#431275',
                        fontSize: 20,
                      }}
                    >
                      {club.clubName}
                    </Text>
                  </View>
                  <Text>{`£${club.price}`}</Text>
                  <Text>{club.clubType}</Text>
                  <Text>{club.level}</Text>
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
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e1dce6',
  },
  interest: { color: 'purple', fontSize: 15 },
  scroller: {
    marginBottom: 20,
  },
  club: {
    // marginTop: 20,
    // padding: 50,
    // width: 300,
    // height: 150,
    // backgroundColor: 'white',
    // fontSize: 24,
    // borderRadius: 20,
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
