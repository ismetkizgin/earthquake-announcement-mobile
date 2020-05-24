import { Dimensions } from 'react-native'
const deviceSize = Dimensions.get('window');

export const colorStyle = {
  textColor: "#ffffff",
  //backgroundColorMain: '#1c313a',
  backgroundColorMain: '#455a64',
  backgroundColorButton: '#1c313a',
  textColorButton: '#ffffff',
  backgroundColorInput: 'rgba(255,255,255,0.3)'
}

export const commonStyle = {
  centerMain: {
    justifyContent: "center",
    flex: 1,
    alignItems: 'center',
    backgroundColor: colorStyle.backgroundColorMain,
  },
  centerContainer: {
    alignItems: 'center',
    margin: 30,
  },
  image: {
    width: deviceSize.width / 2,
    height: deviceSize.width / 2,
    borderRadius: 100 / 2,
  },
  text: {
    marginTop: 5,
    color: colorStyle.textColor,
    fontSize: 23,
  },
  button: {
    width: deviceSize.width * 0.8,
    padding: 9,
    margin: 10,
    borderRadius: 100 / 2,
    backgroundColor: colorStyle.backgroundColorButton,
  },
  buttonText: {
    color: colorStyle.textColorButton,
    fontSize: 23,
    textAlign: 'center',
  },
  textInput: {
    width: deviceSize.width * 0.8,
    backgroundColor: colorStyle.backgroundColorInput,
    borderRadius: 50,
    paddingHorizontal: 16,
    fontSize: 16,
    color: colorStyle.textColor,
    margin: 10
  },
  h1: {
    color: colorStyle.textColor,
    fontSize: 30,
    margin: 10
  },
  textLink: {
    color: colorStyle.textColor,
    fontSize: 18,
    padding:10
  }
}