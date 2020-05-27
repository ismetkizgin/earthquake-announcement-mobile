import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { colorStyle } from '../util'
import { DrawerContent } from '../components';

import {
  Intro,
  Login,
  Home,
  Entry,
  Register,
  News,
  InstantEarthquakes,
  EmergencyPoints,
  Profile,
  NewsContent,
  Contacts,
  RescueWorks,
  RescueWorksContent,
} from '../pages';

const IntroStack = createStackNavigator();
const Stack = createStackNavigator();
const SecondStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => (
  <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
    <Drawer.Screen
      name="home"
      component={Home}
      options={{
        title: 'Ailem Güvende',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: colorStyle.headerBackgroundColor},
        }
      }
        />
        <Drawer.Screen
          name="profile"
          component={Profile}
          options={{
            title: 'Ailem Güvende',
            headerTintColor: 'white',
            headerStyle: { backgroundColor: colorStyle.headerBackgroundColor },
          }}
        />
        <Drawer.Screen
          name="contacts"
          component={Contacts}
          options={{
            title: 'Ailem Güvende',
            headerTintColor: 'white',
            headerStyle: { backgroundColor: 'black' },
          }}
        />
        <Drawer.Screen
          name="instantEarthquakes"
          component={InstantEarthquakes}
          options={{
            title: 'Ailem Güvende',
            headerTintColor: 'white',
            headerStyle: { backgroundColor: 'black' },
          }}
        />
        <Drawer.Screen
          name="emergencyPoints"
          component={EmergencyPoints}
          options={{
            title: 'Ailem Güvende',
            headerTintColor: 'white',
            headerStyle: { backgroundColor: 'black' },
          }}
        />
        <Drawer.Screen
          name="rescueWorks"
          component={RescueWorks}
          options={{
            title: 'Ailem Güvende',
            headerTintColor: 'white',
            headerStyle: { backgroundColor: 'black' },
          }}
        />
        <Drawer.Screen
          name="news"
          component={News}
          options={{
            title: 'Ailem Güvende',
            headerTintColor: 'white',
            headerStyle: { backgroundColor: 'black' },
          }}
        />
        <Drawer.Screen
          name="newsContent"
          component={NewsContent}
          options={{
            title: 'Ailem Güvende',
            headerTintColor: 'white',
            headerStyle: { backgroundColor: 'black' },
          }}
        />
        <Drawer.Screen
          name="rescueWorksContent"
          component={RescueWorksContent}
          options={{
            title: 'Ailem Güvende',
            headerTintColor: 'white',
            headerStyle: { backgroundColor: 'black' },
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
          headerShown: false,
        }}
      />
      <SecondStack.Screen
        name="Login"
        component={Login}
        options={{
          title: 'Ailem Güvende',
          headerTintColor: 'white',
          headerStyle: { backgroundColor: colorStyle.headerBackgroundColor },
        }}
      />
      <SecondStack.Screen
        name="Register"
        component={Register}
        options={{
          title: 'Ailem Güvende',
          headerTintColor: 'white',
          headerStyle: { backgroundColor: colorStyle.headerBackgroundColor },
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
          headerStyle: { backgroundColor: 'black' },
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
            headerStyle: { backgroundColor: 'black' },
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Auth"
          component={StackNavigator}
          options={{
            title: 'Ailem Güvende',
            headerTintColor: 'white',
            headerStyle: { backgroundColor: 'black' },
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="drawer"
          component={DrawerNavigator}
          options={{
            title: 'Ailem Güvende',
            headerTintColor: 'white',
            headerStyle: { backgroundColor: 'black' },
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
