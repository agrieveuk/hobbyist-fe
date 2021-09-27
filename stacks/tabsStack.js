import HomeStackScreen from './homeStack';
import SearchStackScreen from './searchStack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const Tabs = createBottomTabNavigator();

const TabsStackScreen = () => (
  <Tabs.Navigator
    screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: 'white',
      tabBarInactiveTintColor: 'lightgray',
      tabBarActiveBackgroundColor: '#8949d9',
      tabBarInactiveBackgroundColor: '#aa7cd6'
    }}
  >
    <Tabs.Screen
      name="TabHome"
      component={HomeStackScreen}
      options={{
        tabBarIcon: ({ focused }) => (
          <View>
            <AntDesign name="home" size={24} color="white" />
          </View>
        ),
        title: 'Home'
      }}
    />

    <Tabs.Screen
      name="TabSearch"
      component={SearchStackScreen}
      options={{
        tabBarIcon: ({ focused }) => (
          <View>
            <AntDesign name="search1" size={24} color="white" />
          </View>
        ),
        title: 'Search'
      }}
    />
  </Tabs.Navigator>
);

export default TabsStackScreen;
