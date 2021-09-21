import Profile from '../screens/Profile';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import AddAClub from '../screens/AddAClub';

const ProfileStack = createNativeStackNavigator();
const ProfileStackScreen = () => (
  <ProfileStack.Navigator
    screenOptions={({ navigation }) => ({
      headerStyle: {
        backgroundColor: '#5C6BC0',
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
    <ProfileStack.Screen
      name="Profile"
      component={Profile}
      options={{ headerTitleAlign: 'center' }}
    />
    <ProfileStack.Screen
      name="AddAClub"
      component={AddAClub}
      options={{ headerTitleAlign: 'center', title: 'Add A Club' }}
    />
  </ProfileStack.Navigator>
);

export default ProfileStackScreen;
