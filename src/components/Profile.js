import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';

import {commonStyle, colorStyle} from '../util';

export const Profile = ({navigation}) => {
  return (
    <ScrollView>
      <View style={commonStyle.centerMain}>
        <View style={commonStyle.centerContainer}>
          <Image
            source={require('../assets/icon.png')}
            style={commonStyle.image}
          />
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
            <Text style={commonStyle.buttonText}>KAYDET</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};
