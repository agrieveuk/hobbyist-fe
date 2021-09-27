import Profile from '../screens/Profile';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import AddAClub from '../screens/AddAClub';
import EditProfile from '../screens/EditProfile';

const ProfileStack = createNativeStackNavigator();
const ProfileStackScreen = () => (
  <ProfileStack.Navigator
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
    <ProfileStack.Screen
      name="EditProfile"
      component={EditProfile}
      options={{ headerTitleAlign: 'center', title: 'Edit Profile' }}
    />
  </ProfileStack.Navigator>
);

export default ProfileStackScreen;
