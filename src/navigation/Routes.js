import React, { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { Home, Login, Register, Entry } from '../components';
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const DrawerNavigator = () => (
    <Drawer.Navigator>
       <Drawer.Screen
          name="Main"
          component={Home}
          options={{
            title: 'Ailem Güvende',
            headerTintColor: 'white',
            headerStyle: { backgroundColor: 'black' },
          }}
        />
         <Drawer.Screen
          name="secondScreen"
          component={Home}
          options={{
            title: 'Ailem Güvende',
            headerTintColor: 'white',
            headerStyle: { backgroundColor: 'black' },
          }}
        />
    </Drawer.Navigator>
  )

const SecondStack =  createStackNavigator();
const StackNavigator = () => {
  return (
    <SecondStack.Navigator>
      <SecondStack.Screen
          name="Entry"
          component={Entry}
          options={{
            title: 'Ailem Güvende',
            headerTintColor: 'white',
            headerStyle: { backgroundColor: 'black' },
            headerShown:false
          }}
        />
        <SecondStack.Screen
          name="Login"
          component={Login}
          options={{
            title: 'Ailem Güvende',
            headerTintColor: 'white',
            headerStyle: { backgroundColor: 'black' },
          }}
        />
        <SecondStack.Screen
          name="Register"
          component={Register}
          options={{
            title: 'Ailem Güvende',
            headerTintColor: 'white',
            headerStyle: { backgroundColor: 'black' },
          }}
        />
    </SecondStack.Navigator>
  )
}

export const Routes = () => {
//  const [state, setState] = useState('Auth');
// let state = 'drawer'
//   useEffect (() => {
//     state = 'drawer';
//     setState('drawer')
//   })
  
    //....
    /*
  async-storage 
  lgin olduktan sonra bilgileri async storega'a set et
    */
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Auth">

        <Stack.Screen
          name="Auth"
          component={StackNavigator}
          options={{
            title: 'Ailem Güvende',
            headerTintColor: 'white',
            headerStyle: { backgroundColor: 'black' },
            headerShown:false
          }} />

        <Stack.Screen
          name="drawer"
          component={DrawerNavigator}
          options={{
            title: 'Ailem Güvende',
            headerTintColor: 'white',
            headerStyle: { backgroundColor: 'black' },
            headerShown:false
          }} />
       
       
      </Stack.Navigator>
     
    </NavigationContainer>
  );
};
