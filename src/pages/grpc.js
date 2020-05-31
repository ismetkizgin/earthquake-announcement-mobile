import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const { AttendanceServicePromiseClient } = require('../../helloworld_grpc_web_pb');
const { RecordRequest } = require('../../helloworld_pb');

export const grpc = () => {
  const [statementMessage, setStatementMessage] = useState('empty');

  const serverUrl = 'http://10.0.2.2:9090';
  

  const callGrpcServicePromise = async () => {
    console.log(serverUrl)
    const promiseClient = new AttendanceServicePromiseClient(
      serverUrl,
      null,
      null,
    );
    const request = new RecordRequest();
    request.setName('Alihan');
    try {
      const result = await promiseClient.sayHello(request, {});
      setStatementMessage(result.getMessage());
    } catch (error) {
      setStatementMessage(error);
      alert(error);
    }
  };

  useEffect(() => {
    callGrpcServicePromise();
  });


  return (
    <>
      <View style={styles.container}>
        <Text>{statementMessage}</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
