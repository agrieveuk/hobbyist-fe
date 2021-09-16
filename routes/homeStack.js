import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Homepage from '../screens/Homepage';
import ClubPage from '../screens/ClubPage';
import Header from '../screens/Header';
import MapViewPage from '../screens/MapViewPage';
import React from 'react';

const screens = {
  Homepage: {
    screen: Homepage,
    navigationOptions: {
      title: 'Hobbyist'
    }
  },
  ClubPage: {
    screen: ClubPage
  },
  MapViewPage: {
    screen: MapViewPage
  }
};

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { height: 125 },
    headerTitleAlign: 'center',
    headerTitleStyle: {
      fontSize: 30
    }
  }
});

export default createAppContainer(HomeStack);
