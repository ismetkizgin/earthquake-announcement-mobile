import * as React from 'react';
import {Button, View, Text} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Icon} from '../components';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
export const Home = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <FontAwesome5 name={'comments'} />

      <Text>Home Screen</Text>
    </View>
  );
};

const Drawer = createDrawerNavigator();

// function SlideMenu() {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator initialRouteName="Home">
//         <Drawer.Screen name="Home" component={Home} />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
//}
