import React from 'react';
import { View, Text, ScrollView } from 'react-native';

import { commonStyle } from '../../util';
import { Button, InputText } from '../../components'
import { SafeAreaView } from 'react-native-safe-area-context';

export const Register = () => {
  return (
    <SafeAreaView style={commonStyle.container}>
      <ScrollView>
        <View style={commonStyle.centerMain}>
          <Text style={commonStyle.titleStyle.h1}>Kayıt Ol</Text>
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
