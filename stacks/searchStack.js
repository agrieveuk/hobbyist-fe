import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MapViewPage from '../screens/MapViewPage';
import Search from '../screens/Search';
import { FontAwesome } from '@expo/vector-icons';

const SearchStack = createNativeStackNavigator();

const SearchStackScreen = () => (
  <SearchStack.Navigator
    screenOptions={({ navigation }) => ({
      headerStyle: {
        backgroundColor: '#8949d9'
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
      }
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
  </SearchStack.Navigator>
);

export default SearchStackScreen;
