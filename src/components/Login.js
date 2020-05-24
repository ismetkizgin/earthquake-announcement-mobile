import React from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import LoginStyle from '../util/LoginStyle';

export const Login = ({navigation}) => {
  return (
    <View style={LoginStyle.main}>
      <Text style={LoginStyle.header}>Giriş Yap</Text>
      <View style={LoginStyle.textView}>
        <TextInput style={LoginStyle.textInput} placeholder="T.C. No" />
        <TextInput style={LoginStyle.textInput} placeholder="Şifre" />
      </View>
      <TouchableOpacity style={LoginStyle.button}>
        <Text
          onPress={() => navigation.navigate('Main')}
          style={LoginStyle.buttonText}>
          GİRİŞ YAP
        </Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={LoginStyle.linkText}>Şifremi Unuttum</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={LoginStyle.linkText}>Kayıt Ol</Text>
      </TouchableOpacity>
    </View>
  );
};
