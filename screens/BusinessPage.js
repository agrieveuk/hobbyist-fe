import React, { useContext, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Button,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { AuthContext } from "../context";
import { Entypo } from "@expo/vector-icons";

export default function BusinessPage({ navigation }) {
  const { signOut } = useContext(AuthContext);
  const [clubList, setClubList] = useState([
    { clubName: "clubName1" },
    { clubName: "clubName2" },
    { clubName: "clubName3" },
    { clubName: "clubName4" },
  ]);
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: "https://images.unsplash.com/flagged/photo-1576448438685-9f5e5b283d4f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        }}
      />
      <View style={styles.aboutBox}>
        <Text>About:</Text>
        <Text>
          A review is an evaluation of a publication, service, or company such
          as a movie (a movie review), video game (video game review), musical
          composition (music review of a composition or recording), book (book
          review);
        </Text>
      </View>
      <View style={styles.listOfClubs}>
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
                    navigation.navigate("ClubPage", { club: club.clubName })
                  }
                />
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
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  aboutBox: {
    margin: 20,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
    marginTop: 20,
    borderWidth: 1,
  },
  listOfClubs: {
    height: 200,
    marginBottom: 20,
  },
  addClubCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#5C6BC0",
    borderRadius: 4,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  clubCardText: {
    color: "white",
    marginRight: 3,
  },
});
