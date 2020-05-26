import React from 'react';
import { View, Text } from 'react-native';
import { commonStyle } from '../../util'
import { StackActions } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import { InputText, Button, LinkText } from '../../components'

const storeData = async (value) => {
  try {
    await AsyncStorage.setItem('@token', value)
    console.log('token', await AsyncStorage.getItem('@token'));
  } catch (e) {
  }
}

export const Login = ({ navigation }) => {
  return (
    <View style={commonStyle.container}>
      <View style={commonStyle.centerMain}>
        <Text style={commonStyle.titleStyle.h1}>Giriş Yap</Text>
        <InputText placeholder="T.C No" />
        <InputText placeholder="Şifre" />
        <Button onPress={() => {
              storeData("ismet")
              navigation.dispatch(StackActions.replace('drawer'))
            }} name="Giriş Yap" />
        <LinkText name="Şifremi Unuttum" />
      </View>
    </View>
  );
};
