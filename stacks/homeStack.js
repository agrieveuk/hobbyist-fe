import React from 'react';
import Homepage from '../screens/Homepage';
import ClubPage from '../screens/ClubPage';
import { FontAwesome } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BusinessPage from '../screens/BusinessPage';

const HomeStack = createNativeStackNavigator();

const HomeStackScreen = () => (
  <HomeStack.Navigator
    screenOptions={({ navigation }) => ({
      headerStyle: {
        backgroundColor: '#8949d9',
      },
      headerTintColor: '#fff',
      headerRight: function headerRight() {
        return (
          <FontAwesome
            name="navicon"
            size={24}
            color="white"
            onPress={() => navigation.toggleDrawer()}
          />
        );
      },
    })}
  >
    <HomeStack.Screen
      name="Home"
      component={Homepage}
      options={{
        title: 'Hobbyist',
        headerTitleAlign: 'center',
      }}
    />
    <HomeStack.Screen
      name="ClubPage"
      component={ClubPage}
      options={({ route }) => ({
        title: route.params.currentClub.clubName,
        headerTitleAlign: 'center',
      })}
    />
    <HomeStack.Screen
      name="BusinessPage"
      component={BusinessPage}
      options={({ route }) => ({
        title: route.params.user.name,
        headerTitleAlign: 'center',
      })}
    />
  </HomeStack.Navigator>
);

export default HomeStackScreen;
