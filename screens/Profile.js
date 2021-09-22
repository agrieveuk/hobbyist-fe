import React, { useContext, useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Button,
  Image,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import { AuthContext } from '../context';
import { Entypo } from '@expo/vector-icons';

export default function Profile({ navigation }) {
  const { signOut } = useContext(AuthContext);
  const [clubList, setClubList] = useState([
    { clubName: 'clubName1' },
    { clubName: 'clubName2' },
    { clubName: 'clubName3' },
    { clubName: 'clubName4' }
  ]);
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: 'https://images.unsplash.com/flagged/photo-1576448438685-9f5e5b283d4f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
        }}
      />
      <Button color="#8949d9" title="Edit Profile" />
      <View style={{ margin: 20 }}>
        <Text style={{ fontSize: 20, color: '#431275', marginBottom: 10 }}>
          About:
        </Text>
        <Text style={{ color: '#431275', marginBottom: 20 }}>
          A review is an evaluation of a publication, service, or company such
          as a movie (a movie review), video game (video game review), musical
          composition (music review of a composition or recording), book (book
          review);
        </Text>
      </View>

      <View style={styles.listOfClubs}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {clubList.map((club) => {
            return (
              <View style={styles.li} key={club.clubName}>
                <Text style={styles.club}>{club.clubName}</Text>
                <Button
                  color="#841584"
                  title={`Go to ${club.clubName}`}
                  onPress={() =>
                    navigation.navigate('ClubPage', { club: club.clubName })
                  }
                />
              </View>
            );
          })}
        </ScrollView>
        <TouchableOpacity onPress={() => navigation.navigate('AddAClub')}>
          <View style={styles.addClubCard}>
            <Text style={styles.clubCardText}>Add A Club</Text>
            <Entypo name="circle-with-plus" size={20} color="white" />
          </View>
        </TouchableOpacity>
      </View>

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
  image: {
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
    marginTop: 20,
    borderWidth: 1
  },
  listOfClubs: {
    height: 200,
    width: 200,
    marginBottom: 20
  },
  addClubCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#8949d9',
    margin: 10,
    borderRadius: 4,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginBottom: 20
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
    marginBottom: 20
  },
  clubCardText: {
    color: 'white',
    marginRight: 3
  }
});
