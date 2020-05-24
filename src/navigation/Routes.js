import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { Home, Login, Register, Entry } from '../components';
const Stack = createStackNavigator();

export const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Entry"
          component={Entry}
          options={{
            title: 'Ailem Güvende',
            headerTintColor: 'white',
            headerStyle: { backgroundColor: 'black' },
            headerShown:false
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            title: 'Ailem Güvende',
            headerTintColor: 'white',
            headerStyle: { backgroundColor: 'black' },
          }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{
            title: 'Ailem Güvende',
            headerTintColor: 'white',
            headerStyle: { backgroundColor: 'black' },
          }}
        />
        <Stack.Screen
          name="Main"
          component={Home}
          options={{
            title: 'Ailem Güvende',
            headerTintColor: 'white',
            headerStyle: { backgroundColor: 'black' },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
