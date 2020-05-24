import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import { commonStyle, colorStyle } from '../util'

export const Register = () => {
  return (
    <ScrollView>
      <View style={commonStyle.centerMain}>
        <View style={commonStyle.centerContainer}>
          <Text style={commonStyle.h1}>Kayıt Ol</Text>
          <TextInput
            style={commonStyle.textInput}
            placeholder="T.C. No"
            placeholderTextColor={colorStyle.textColor}
          />
          <TextInput
            style={commonStyle.textInput}
            placeholder="Ad"
            placeholderTextColor={colorStyle.textColor}
          />
          <TextInput
            style={commonStyle.textInput}
            placeholder="Soyad"
            placeholderTextColor={colorStyle.textColor}
          />
          <TextInput
            style={commonStyle.textInput}
            placeholder="Doğum Tarihi"
            placeholderTextColor={colorStyle.textColor}
          />
          <TextInput
            style={commonStyle.textInput}
            placeholder="Kan Grubu"
            placeholderTextColor={colorStyle.textColor}
          />
          <TextInput
            style={commonStyle.textInput}
            placeholder="Konum"
            placeholderTextColor={colorStyle.textColor}
          />
          <TextInput
            style={commonStyle.textInput}
            placeholder="Devamlı Hastalık"
            placeholderTextColor={colorStyle.textColor}
          />
          <TextInput
            style={commonStyle.textInput}
            placeholder="Şifre"
            placeholderTextColor={colorStyle.textColor}
          />
          <TouchableOpacity style={commonStyle.button}>
          <Text style={commonStyle.buttonText}>KAYIT OL</Text>
        </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};
