import React, {useState, useEffect} from 'react';
import {View, Text, Alert} from 'react-native';
import {commonStyle} from '../util';
import {InputText, Button} from '../components';
import {Formik} from 'formik';
const {GreeterPromiseClient} = require('../../helloworld_grpc_web_pb');
const {HelloRequest, Request} = require('../../helloworld_pb');

export const grpc = () => {
  const [statementMessage, setStatementMessage] = useState('empty');

  const serverUrl = 'http://10.0.2.2:8080';

  const promiseClient = new GreeterPromiseClient(serverUrl, null, null);

  return (
    <View style={commonStyle.container}>
      <View style={commonStyle.centerMain}>
        <Text style={commonStyle.titleStyle.h1}>Giriş Yap</Text>
        <Formik
          initialValues={{UserName: ''}}
          onSubmit={async values => {
            const request = new HelloRequest();
            request.setName(values.UserName);
            try {
              const result = await Request(request);
              setStatementMessage(result.message);

              Alert.alert('GRPC Response', result.message);
            } catch (error) {
              console.log(error);
            }
          }}>
          {props => (
            <View>
              <InputText
                placeholder="Kullanıcı Adı"
                onChangeText={props.handleChange('UserName')}
                value={props.values.UserName}
              />

              <Button name="GRPC Request" onPress={props.handleSubmit} />
            </View>
          )}
        </Formik>
      </View>
    </View>
  );
};
