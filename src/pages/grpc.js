import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const {
  AttendanceServicePromiseClient,
} = require('../../helloworld_grpc_web_pb');
const {RecordRequest} = require('../../helloworld_pb');
import {studentID} from './components/studentID';

var grpcAdress = '10.0.2.2:50051';

function App() {
  const [statementMessage, setStatementMessage] = useState('empty');

  const serverUrl = grpcAdress;
  const promiseClient = new AttendanceServicePromiseClient(
    serverUrl,
    null,
    null,
  );

  const callGrpcServicePromise = async () => {
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

  callGrpcServicePromise();

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
