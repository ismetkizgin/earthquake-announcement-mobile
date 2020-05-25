import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

import {commonStyle} from '../util';

export const Entry = ({navigation}) => {
  return (
    <View style={commonStyle.centerMain}>
      <View style={commonStyle.centerContainer}>
        <Image
          source={require('../assets/icon.png')}
          style={commonStyle.image}
        />
        <Text style={commonStyle.text}>DEPREMİN FARKINA VAR</Text>
        <Text style={commonStyle.text}>ÖNLEMİNİ AL!</Text>
      </View>
      <TouchableOpacity style={commonStyle.button}>
        <Text
          onPress={() => navigation.navigate('Login')}
          style={commonStyle.buttonText}>
          GİRİŞ YAP
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Register')}
        style={commonStyle.button}>
        <Text style={commonStyle.buttonText}>KAYIT OL</Text>
      </TouchableOpacity>
    </View>
  );
};
