import React from 'react';
import { View, ScrollView, SafeAreaView } from 'react-native';

import { commonStyle } from '../util';
import { Logo, Button, InputText } from '../components'

export const Profile = ({ navigation }) => {
  return (
    <SafeAreaView style={commonStyle.container}>
      <ScrollView>
        <View style={commonStyle.centerMain}>
          <Logo />
          <InputText placeholder="T.C. No" />
          <InputText placeholder="Ad" />
          <InputText placeholder="Soyad" />
          <InputText placeholder="Doğum Tarihi" />
          <InputText placeholder="Kan Grubu" />
          <InputText placeholder="Şifre" />
          <Button name="KAYIT OL" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
