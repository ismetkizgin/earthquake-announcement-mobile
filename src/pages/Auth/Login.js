import React from 'react';
import { View, Text } from 'react-native';
import { commonStyle } from '../../util'
import { InputText, Button } from '../../components'
import { SignIn } from '../../actions/auth.actions'
import { Formik } from 'formik';


export const Login = ({ navigation }) => {
  return (
    <View style={commonStyle.container}>
      <View style={commonStyle.centerMain}>

        <Text style={commonStyle.titleStyle.h1}>Giriş Yap</Text>
        <Formik
          initialValues={{ UserIdentityNo: '', UserPassword: '' }}
          onSubmit={async (values) => {
            const state = await SignIn(values);
            if (state)
              navigation.dispatch(StackActions.replace('drawer'));
          }}
        >
          {props => (
            <View>
              <InputText
                placeholder='T.C. No'
                onChangeText={props.handleChange('UserIdentityNo')}
                value={props.values.UserIdentityNo}
                keyboardType='numeric'
                maxLength={11}

              />

              <InputText
                placeholder="Şifre"
                onChangeText={props.handleChange('UserPassword')}
                secureTextEntry={true}
                value={props.values.UserPassword}
              />

              <Button name="Giriş Yap" onPress={props.handleSubmit} />
            </View>
          )}
        </Formik>
      </View>
    </View >
  );
};
