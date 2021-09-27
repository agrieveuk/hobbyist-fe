import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MapViewPage from '../screens/MapViewPage';
import Search from '../screens/Search';
import { FontAwesome } from '@expo/vector-icons';
import MapClubPage from '../screens/MapClubPage';
import BusinessMapPage from '../screens/BusinessMapPage';

const SearchStack = createNativeStackNavigator();

const SearchStackScreen = () => (
  <SearchStack.Navigator
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
    <SearchStack.Screen
      name="Search"
      component={Search}
      options={{ headerTitleAlign: 'center' }}
    />
    <SearchStack.Screen
      name="MapViewPage"
      component={MapViewPage}
      options={{ title: 'Search Results', headerTitleAlign: 'center' }}
    />
    <SearchStack.Screen
      name="MapClubPage"
      component={MapClubPage}
      options={({ route }) => ({
        title: route.params.currentClub.clubName,
        headerTitleAlign: 'center',
      })}
    />
    <SearchStack.Screen
      name="BusinessMapPage"
      component={BusinessMapPage}
      options={({ route }) => ({
        title: route.params.user.name,
        headerTitleAlign: 'center',
      })}
    />
  </SearchStack.Navigator>
);

export default SearchStackScreen;
