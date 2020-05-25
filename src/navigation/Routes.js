import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {
  Home,
  Login,
  Register,
  Entry,
  DrawerContent,
  Profile,
  Contacts,
} from '../components';
import {RescueWorkListView} from '../components/RescueWorkListView';

import { Intro } from '../pages'

const IntroStack = createStackNavigator();
const Stack = createStackNavigator();
const SecondStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => (
  <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
    <Drawer.Screen
      name="Main"
      component={Home}
      options={{
        title: 'Ailem Güvende',
        headerTintColor: 'white',
        headerStyle: {backgroundColor: 'black'},
      }}
    />
    <Drawer.Screen
      name="profile"
      component={Profile}
      options={{
        title: 'Ailem Güvende',
        headerTintColor: 'white',
        headerStyle: {backgroundColor: 'black'},
      }}
    />
    <Drawer.Screen
      name="contacts"
      component={Contacts}
      options={{
        title: 'Ailem Güvende',
        headerTintColor: 'white',
        headerStyle: {backgroundColor: 'black'},
      }}
    />
    <Drawer.Screen
      name="rescueWorkListView"
      component={RescueWorkListView}
      options={{
        title: 'Ailem Güvende',
        headerTintColor: 'white',
        headerStyle: {backgroundColor: 'black'},
      }}
    />
  </Drawer.Navigator>
);

const StackNavigator = () => {
  return (
    <SecondStack.Navigator>
      <SecondStack.Screen
        name="Entry"
        component={Entry}
        options={{
          title: 'Ailem Güvende',
          headerTintColor: 'white',
          headerStyle: {backgroundColor: 'black'},
          headerShown: false,
        }}
      />
      <SecondStack.Screen
        name="Login"
        component={Login}
        options={{
          title: 'Ailem Güvende',
          headerTintColor: 'white',
          headerStyle: {backgroundColor: 'black'},
        }}
      />
      <SecondStack.Screen
        name="Register"
        component={Register}
        options={{
          title: 'Ailem Güvende',
          headerTintColor: 'white',
          headerStyle: {backgroundColor: 'black'},
        }}
      />
    </SecondStack.Navigator>
  );
};

const IntroNavigator = () => {
  return (
    <IntroStack.Navigator>
      <IntroStack.Screen
        name="Intro"
        component={Intro}
        options={{
          title: 'Ailem Güvende',
          headerTintColor: 'white',
          headerStyle: {backgroundColor: 'black'},
          headerShown: false,
        }}
      />
    </IntroStack.Navigator>
  );
};

export const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Intro">
      <Stack.Screen
          name="Intro"
          component={IntroNavigator}
          options={{
            title: 'Ailem Güvende',
            headerTintColor: 'white',
            headerStyle: {backgroundColor: 'black'},
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Auth"
          component={StackNavigator}
          options={{
            title: 'Ailem Güvende',
            headerTintColor: 'white',
            headerStyle: {backgroundColor: 'black'},
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="drawer"
          component={DrawerNavigator}
          options={{
            title: 'Ailem Güvende',
            headerTintColor: 'white',
            headerStyle: {backgroundColor: 'black'},
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
