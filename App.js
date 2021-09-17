import React, { useState, useEffect, useMemo } from "react";
import { Button, TouchableOpacity } from "react-native";
// import Header from './screens/Header';
// import Homepage from './screens/Homepage';
import RequireLogin from "./screens/RequireLogin";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import createAnAccount from "./screens/CreateAnAccount";
import CreateBusinessAccount from "./screens/CreateBusinessAccount";
import CreatePersonalAccount from "./screens/CreatePersonalAccount";
import SignIn from "./screens/SignIn";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Homepage from "./screens/Homepage";
import Search from "./screens/Search";
import ClubPage from "./screens/ClubPage";
import MapViewPage from "./screens/MapViewPage";
import Profile from "./screens/Profile";
import Splash from "./screens/Splash";
import { FontAwesome } from "@expo/vector-icons";
import { AuthContext } from "./context";

const AuthStack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();
const SearchStack = createNativeStackNavigator();

const HomeStackScreen = () => (
  <HomeStack.Navigator
    screenOptions={({ navigation }) => ({
      headerStyle: {
        backgroundColor: "#5C6BC0",
      },
      headerTintColor: "#fff",
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
        title: "Hobbyist",
        headerTitleAlign: "center",
      }}
    />
    <HomeStack.Screen
      name="ClubPage"
      component={ClubPage}
      options={({ route }) => ({
        title: route.params.club,
        headerTitleAlign: "center",
      })}
    />
    <HomeStack.Screen name="MapViewPage" component={MapViewPage} />
  </HomeStack.Navigator>
);
const SearchStackScreen = () => (
  <SearchStack.Navigator
    screenOptions={({ navigation }) => ({
      headerStyle: {
        backgroundColor: "#5C6BC0",
      },
      headerTintColor: "#fff",
      headerRight: function () {
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
    <SearchStack.Screen name="Search" component={Search} />
  </SearchStack.Navigator>
);

const TabsStackScreen = () => (
  <Tabs.Navigator
    screenOptions={{
      headerShown: false,
      tabBarOptions: {
        showLabel: false,
      },
      tabBarActiveTintColor: "white",
      tabBarInactiveTintColor: "lightgray",
      tabBarActiveBackgroundColor: "#5C6BC0",
      tabBarInactiveBackgroundColor: "#939dd5",
      tabBarStyle: [
        {
          display: "flex",
        },
        null,
      ],
    }}
  >
    <Tabs.Screen
      name="TabHome"
      component={HomeStackScreen}
      options={{ title: "Home" }}
      tabBarOptions={{
        showIcon: false,
        backgroundColor: "green",
      }}
    />

    <Tabs.Screen
      name="TabSearch"
      component={SearchStackScreen}
      options={{ title: "Search" }}
    />
  </Tabs.Navigator>
);

const ProfileStack = createNativeStackNavigator();
const ProfileStackScreen = () => (
  <ProfileStack.Navigator
    screenOptions={({ navigation }) => ({
      headerStyle: {
        backgroundColor: "#5C6BC0",
      },
      headerTintColor: "#fff",
      headerRight: function () {
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
    <ProfileStack.Screen name="Profile" component={Profile} />
  </ProfileStack.Navigator>
);

const Drawer = createDrawerNavigator();

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState(false);

  const authContext = useMemo(() => {
    return {
      signIn: () => {
        setIsLoading(false);
        setUserToken("abc");
      },
      signUp: () => {
        setIsLoading(false);
        setUserToken("abc");
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
              drawerPosition: "right",
              headerShown: false,
              drawerType: "front",
            }}
          >
            <Drawer.Screen
              name="DrawHome"
              component={TabsStackScreen}
              options={{ title: "Home" }}
            />
            <Drawer.Screen
              name="DrawProfile"
              component={ProfileStackScreen}
              options={{ title: "Profile" }}
            />
          </Drawer.Navigator>
        ) : (
          <AuthStack.Navigator>
            <AuthStack.Screen
              name="signIn"
              component={SignIn}
              options={{ title: "Sign In", headerTitleAlign: "center" }}
            />
            <AuthStack.Screen
              name="signUp"
              component={createAnAccount}
              options={{
                title: "Create An Account",
                headerTitleAlign: "center",
              }}
            />
            <AuthStack.Screen
              name="CreateBusinessAccount"
              component={CreateBusinessAccount}
              options={{
                title: "Create A Business Account",
                headerTitleAlign: "center",
              }}
            />
            <AuthStack.Screen
              name="CreatePersonalAccount"
              component={CreatePersonalAccount}
              options={{
                title: "Create A Personal Account",
                headerTitleAlign: "center",
              }}
            />
          </AuthStack.Navigator>
        )}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
