import React, { useState } from 'react';
// import { StyleSheet } from 'react-native';
// import Header from './screens/Header';
// import Homepage from './screens/Homepage';
import RequireLogin from './screens/RequireLogin';
import Navigator from './routes/homeStack';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  const [user, setUser] = useState(false);

  return (
    <NavigationContainer>
      <RequireLogin user={user} setUser={setUser}>
        <Navigator />
      </RequireLogin>
    </NavigationContainer>
  );
}
// <Header
//           setFindSearchOpen={setFindSearchOpen}
//           findSearchOpen={findSearchOpen}
//         />
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });
