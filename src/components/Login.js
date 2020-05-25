import React from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import {StackActions} from '@react-navigation/native';

import {commonStyle, colorStyle} from '../util';

export const Login = ({navigation}) => {
  return (
    <View style={commonStyle.centerMain}>
      <View
        style={[commonStyle.centerContainer, {flex: 1, position: 'absolute'}]}>
        <Text style={commonStyle.h1}>Giriş Yap</Text>
        <TextInput
          style={commonStyle.textInput}
          placeholderTextColor={colorStyle.textColor}
          placeholder="T.C. No"
        />
        <TextInput
          style={commonStyle.textInput}
          placeholderTextColor={colorStyle.textColor}
          placeholder="Şifre"
        />
        <TouchableOpacity style={commonStyle.button}>
          <Text
            onPress={() => navigation.dispatch(StackActions.replace('drawer'))}
            style={commonStyle.buttonText}>
            GİRİŞ YAP
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={commonStyle.textLink}>Şifremi Unuttum</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            onPress={() => {
              navigation.dispatch(StackActions.replace('drawer'));
            }}
            style={commonStyle.textLink}>
            Kayıt Ol
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
