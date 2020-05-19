import {StyleSheet} from 'react-native';

const EntryStyles = StyleSheet.create({
  main: {
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#202325',
  },
  header: {
    alignItems: 'center',
    margin: 30,
  },
  image: {
    width: 180,
    height: 180,
    borderRadius: 100 / 2,
  },
  text: {
    marginTop: 5,
    color: 'white',
    fontSize: 23,
  },
  button: {
    width: 280,
    padding: 9,
    margin: 10,
    borderRadius: 100 / 2,
    backgroundColor: 'white',
  },
  buttonText: {
    color: '#202325',
    fontSize: 23,
    textAlign: 'center',
  },
});
export default EntryStyles;
