import React from 'react';
import {} from 'react-native';
import Entry from './components/Entry';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';
import Login from './components/Login';
import Register from './components/Register';

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Entry"
            component={Entry}
            options={{
              title: 'Ailem Güvende',
              headerTintColor: 'white',
              headerStyle: {backgroundColor: 'black'},
            }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              title: 'Ailem Güvende',
              headerTintColor: 'white',
              headerStyle: {backgroundColor: 'black'},
            }}
          />
          <Stack.Screen
            name="Register"
            component={Register}
            options={{
              title: 'Ailem Güvende',
              headerTintColor: 'white',
              headerStyle: {backgroundColor: 'black'},
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
