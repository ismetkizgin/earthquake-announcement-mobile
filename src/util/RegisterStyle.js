import {StyleSheet} from 'react-native';
const RegisterStyle = StyleSheet.create({
  main: {
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#202325',
  },
  header: {
    marginBottom: 20,
    color: 'white',
    fontSize: 30,
  },
  textView: {
    marginBottom: 20,
  },
  textInput: {
    paddingLeft: 30,
    margin: 10,
    backgroundColor: '#202325',
    width: 350,
    borderRadius: 100 / 2,
    borderWidth: 1,
    borderColor: 'green',
    color: 'white',
    textAlign: 'left',
  },
  button: {
    padding: 9,
    width: 350,
    marginBottom: 10,
    backgroundColor: 'green',
    borderRadius: 100 / 2,
  },
  buttonText: {
    color: '#202325',
    fontSize: 23,
    textAlign: 'center',
  },
});
export default RegisterStyle;
