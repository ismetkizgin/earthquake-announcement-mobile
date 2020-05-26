import React from 'react';
import { View, Text } from 'react-native';

import { commonStyle } from '../../util';
import { Logo, Button } from '../../components';

export const Entry = ({ navigation }) => {
  return (
    <View style={commonStyle.container}>
      <View style={commonStyle.centerMain}>
        <Logo />
        <Text style={commonStyle.titleStyle.h2}>DEPREMİN FARKINA VAR</Text>
        <Text style={commonStyle.titleStyle.h2}>ÖNLEMİNİ AL!</Text>
        <Button
        onPress={() => navigation.navigate('Login')}
        name="GİRİŞ YAP" />
      <Button
        onPress={() => navigation.navigate('Register')}
        name="KAYIT OL"/>
      </View>
    </View>
  );
};
