import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import EntryStyle from '../util/EntryStyle';

export const Entry = ({navigation}) => {
  return (
    <View style={EntryStyle.main}>
      <View style={EntryStyle.header}>
        <Image
          source={require('../assets/icon.png')}
          style={EntryStyle.image}
        />
        <Text style={EntryStyle.text}>DEPREMİN FARKINA VAR</Text>
        <Text style={EntryStyle.text}>ÖNLEMİNİ AL!</Text>
      </View>
      <TouchableOpacity style={EntryStyle.button}>
        <Text
          onPress={() => navigation.navigate('Login')}
          style={EntryStyle.buttonText}>
          GİRİŞ YAP
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Register')}
        style={EntryStyle.button}>
        <Text style={EntryStyle.buttonText}>KAYIT OL</Text>
      </TouchableOpacity>
    </View>
  );
};
