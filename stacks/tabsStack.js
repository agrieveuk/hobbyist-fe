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
      tabBarActiveBackgroundColor: '#5C6BC0',
      tabBarInactiveBackgroundColor: '#939dd5'
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
