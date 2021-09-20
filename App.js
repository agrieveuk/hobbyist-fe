import React, { useState, useEffect, useMemo } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import createAnAccount from './screens/CreateAnAccount';
import CreateBusinessAccount from './screens/CreateBusinessAccount';
import CreatePersonalAccount from './screens/CreatePersonalAccount';
import SignIn from './screens/SignIn';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Splash from './screens/Splash';
import { AuthContext } from './context';
import TabsStackScreen from './stacks/tabsStack';
import ProfileStackScreen from './stacks/profileStack';

const AuthStack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState(false);

  const authContext = useMemo(() => {
    return {
      signIn: () => {
        setIsLoading(false);
        setUserToken('abc');
      },
      signUp: () => {
        setIsLoading(false);
        setUserToken('abc');
      },
      signOut: () => {
        setIsLoading(false);
        setUserToken(null);
      },
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  });

  if (isLoading) return <Splash />;
  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {userToken ? (
          <Drawer.Navigator
            screenOptions={{
              drawerPosition: 'right',
              headerShown: false,
              drawerType: 'front',
            }}
          >
            <Drawer.Screen
              name="DrawHome"
              component={TabsStackScreen}
              options={{ title: 'Home' }}
            />
            <Drawer.Screen
              name="DrawProfile"
              component={ProfileStackScreen}
              options={{ title: 'Profile' }}
            />
          </Drawer.Navigator>
        ) : (
          <AuthStack.Navigator>
            <AuthStack.Screen
              name="signIn"
              component={SignIn}
              options={{ title: 'Sign In', headerTitleAlign: 'center' }}
            />
            <AuthStack.Screen
              name="signUp"
              component={createAnAccount}
              options={{
                title: 'Create An Account',
                headerTitleAlign: 'center',
              }}
            />
            <AuthStack.Screen
              name="CreateBusinessAccount"
              component={CreateBusinessAccount}
              options={{
                title: 'Create A Business Account',
                headerTitleAlign: 'center',
              }}
            />
            <AuthStack.Screen
              name="CreatePersonalAccount"
              component={CreatePersonalAccount}
              options={{
                title: 'Create A Personal Account',
                headerTitleAlign: 'center',
              }}
            />
          </AuthStack.Navigator>
        )}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
