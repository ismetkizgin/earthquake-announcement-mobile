import React, { useEffect } from 'react';
import { View, Image } from 'react-native';

import { commonStyle } from '../util'
import AsyncStorage from '@react-native-community/async-storage';
import { StackActions } from '@react-navigation/native';
import { Logo } from '../components'

export const Intro = ({ navigation }) => {

  isLoginControl = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@token')
      navigation.dispatch( jsonValue != null ? StackActions.replace('drawer') : StackActions.replace('Auth') );
    } catch (e) {
      console.log(e)
      // error reading value
    }
  }

  useEffect(() => {
    isLoginControl();
  }, [isLoginControl]);


  return (
    <View style={commonStyle.container}>
      <View style={commonStyle.centerMain}>
        <Logo />
      </View>
    </View>
  );
};