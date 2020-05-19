import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import RegisterStyle from '../util/RegisterStyle';

const Register = () => {
  return (
    <ScrollView>
      <View style={RegisterStyle.main}>
        <Text style={RegisterStyle.header}>Kayıt Ol</Text>
        <View style={RegisterStyle.textView}>
          <TextInput
            style={RegisterStyle.textInput}
            placeholder="T.C. No"
            placeholderTextColor="white"
          />
          <TextInput
            style={RegisterStyle.textInput}
            placeholder="Ad"
            placeholderTextColor="white"
          />
          <TextInput
            style={RegisterStyle.textInput}
            placeholder="Soyad"
            placeholderTextColor="white"
          />
          <TextInput
            style={RegisterStyle.textInput}
            placeholder="Doğum Tarihi"
            placeholderTextColor="white"
          />
          <TextInput
            style={RegisterStyle.textInput}
            placeholder="Kan Grubu"
            placeholderTextColor="white"
          />
          <TextInput
            style={RegisterStyle.textInput}
            placeholder="Konum"
            placeholderTextColor="white"
          />
          <TextInput
            style={RegisterStyle.textInput}
            placeholder="Devamlı Hastalık"
            placeholderTextColor="white"
          />
          <TextInput
            style={RegisterStyle.textInput}
            placeholder="Şifre"
            placeholderTextColor="white"
          />
        </View>
        <TouchableOpacity style={RegisterStyle.button}>
          <Text style={RegisterStyle.buttonText}>KAYIT OL</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
export default Register;
