import {StyleSheet} from 'react-native';
const LoginStyle = StyleSheet.create({
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
    marginBottom: 50,
  },
  textInput: {
    paddingLeft: 30,
    margin: 10,
    backgroundColor: 'white',
    width: 350,
    borderRadius: 100 / 2,
    color: 'white',
    textAlign: 'left',
  },
  button: {
    padding: 9,
    margin: 10,
    width: 350,
    backgroundColor: 'darkturquoise',
    borderRadius: 100 / 2,
  },
  buttonText: {
    color: '#202325',
    fontSize: 23,
    textAlign: 'center',
  },

  linkText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    padding: 10,
    height: 50,
  },
});
export default LoginStyle;
