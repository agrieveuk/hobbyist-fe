import React, { useContext, useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Button,
  Image,
  ScrollView,
  TouchableOpacity,
  ImageBackground
} from 'react-native';
import { AuthContext } from '../context';
import { Entypo } from '@expo/vector-icons';
import { getBusinessUser } from '../api';
import { art, other, sport, music } from '../images';
let image = {};

export default function Profile({ navigation }) {
  const { signOut } = useContext(AuthContext);
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [clubList, setClubList] = useState([
    { clubName: 'clubName1' },
    { clubName: 'clubName2' },
    { clubName: 'clubName3' },
    { clubName: 'clubName4' }
  ]);

  useEffect(() => {
    const requestFunc = async () => {
      try {
        setLoading(true);
        const request = await getBusinessUser('Shanelle.VonRueden74');
        setUser(request.businessUser[0]);
        setClubList(request.businessUser[0].clubs);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    requestFunc();
  }, []);
  console.log(user.imageURL);
  return (
    <View style={styles.container}>
      <Image style={styles.avatar} source={{ uri: user.imageURL }} />
      <Button
        color="#8949d9"
        title="Edit Profile"
        onPress={() => navigation.navigate('EditProfile')}
      />
      <View style={{ margin: 20 }}>
        <Text style={{ fontSize: 20, color: '#431275', marginBottom: 10 }}>
          Contact Details:
        </Text>
        <Text style={{ color: '#431275' }}>Email: {user.email}</Text>
        <Text style={{ color: '#431275' }}>
          Phone Number: {`0${user.phoneNumber}`}
        </Text>
        <Text style={{ color: '#431275' }}>Website: {user.website}</Text>
      </View>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('AddAClub')}>
          <View style={styles.addClubCard}>
            <Text style={styles.clubCardText}>Add A Club</Text>
            <Entypo name="circle-with-plus" size={20} color="white" />
          </View>
        </TouchableOpacity>
      </View>
      <Text style={{ fontSize: 20, color: '#431275' }}>Current Club(s):</Text>
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
                onPress={() => {}}
                style={{ alignItems: 'center' }}
              >
                <View
                  accessibilityLabel="Submit"
                  title={`Go to ${club.clubName}`}
                >
                  <Text
                    style={{
                      color: '#431275',
                      fontSize: 20
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
                      borderBottomRightRadius: 20
                    }}
                  ></ImageBackground>
                </View>
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>

      <TouchableOpacity onPress={() => signOut()}>
        <View
          style={styles.button}
          accessibilityLabel="Sign Out"
          title="Sign out"
        >
          <Text style={{ color: 'white', fontSize: 25 }}>Sign Out</Text>
        </View>
      </TouchableOpacity>
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
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
    marginTop: 20,
    borderWidth: 1
  },

  addClubCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#8949d9',
    margin: 10,
    borderRadius: 4,
    paddingVertical: 5,
    paddingHorizontal: 10
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
    marginBottom: 50
  },
  clubCardText: {
    color: 'white',
    marginRight: 3
  },
  card: {
    justifyContent: 'center',
    margin: 10,
    width: 300,
    backgroundColor: 'white',
    height: 175,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 3 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    borderRadius: 20
  },
  imageContainer: {
    height: 100,
    width: '100%'
  },
  image: {
    flex: 1,
    justifyContent: 'center'
  }
});
