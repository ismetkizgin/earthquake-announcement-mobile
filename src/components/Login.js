import React from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { commonStyle, colorStyle } from '../util'
import { StackActions } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

const storeData = async (value) => {
  try {
    await AsyncStorage.setItem('@token', value)
    console.log('token', await AsyncStorage.getItem('@token'));
  } catch (e) {
  }
}
export const Login = ({ navigation }) => {
  return (
    <View style={commonStyle.centerMain}>
      <View style={[commonStyle.centerContainer, { flex: 1, position: "absolute" }]}>
        <Text style={commonStyle.h1}>Giriş Yap</Text>
        <TextInput style={commonStyle.textInput}
          placeholderTextColor={colorStyle.textColor}
          placeholder="T.C. No" />
        <TextInput style={commonStyle.textInput}
          placeholderTextColor={colorStyle.textColor}
          placeholder="Şifre" />
        <TouchableOpacity style={commonStyle.button}>
          <Text
            onPress={() => {
              storeData("ismet")
              navigation.dispatch(StackActions.replace('drawer'))
            }}
            style={commonStyle.buttonText}>
            GİRİŞ YAP
        </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={commonStyle.textLink}>Şifremi Unuttum</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text onPress={() => { Actions.Register }} style={commonStyle.textLink}>Kayıt Ol</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
