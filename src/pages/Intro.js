import React, { Component, useEffect } from 'react';
import { View, Image } from 'react-native';

import { commonStyle } from '../util'
import AsyncStorage from '@react-native-community/async-storage';
import { StackActions } from '@react-navigation/native';

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
    <View style={commonStyle.centerMain}>
      <View style={commonStyle.centerContainer}>
        <Image
          source={require('../assets/icon.png')}
          style={commonStyle.image}
        />
      </View>
    </View>
  );
};