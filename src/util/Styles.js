import { Dimensions } from 'react-native'
const deviceSize = Dimensions.get('window');

export const colorStyle = {
  textColor: "#ffffff",
  //bodyBackgroundColor: '#1c313a',
  bodyBackgroundColor: '#455a64',
  buttonBackgroundColor: '#1c313a',
  buttonTextColor: '#ffffff',
  inputBackgroundColor: 'rgba(255,255,255,0.2)',
  inputTextColor: '#ffffff'
}

export const fontStyle = {
  inputFontSize: 16
}

export const commonStyle = {
  container: {
    flex: 1,
    backgroundColor: colorStyle.bodyBackgroundColor
  },
  centerMain: {
    justifyContent: "center",
    flex: 1,
    alignItems: 'center',
    margin: 30,
  },
  titleStyle: {
    h1: {
      color: colorStyle.textColor,
      fontSize: 30,
      margin: 10
    },
    h2: {
      marginTop: 10,
      color: colorStyle.textColor,
      fontSize: 23,
    }
  }
}

export const linkText = {
  linkText: {
    color: colorStyle.textColor,
    fontSize: 18,
    padding: 10
  }
}

export const inputStyle = {
  inputBox: {
    width: deviceSize.width * 0.75,
    backgroundColor: colorStyle.inputBackgroundColor,
    borderRadius: 25,
    paddingHorizontal: 16,
    fontSize: fontStyle.inputFontSize,
    color: colorStyle.inputTextColor,
    marginVertical: 10
  }
}

export const buttonStyle = {
  button: {
    width: deviceSize.width * 0.75,
    backgroundColor: colorStyle.buttonBackgroundColor,
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 13
  },
  buttonText: {
    color: colorStyle.buttonTextColor,
    fontSize:16,
    fontWeight:'500',
    textAlign:'center'
  }
}

export const logoStyle = {
  entryLogo: {
    width: deviceSize.width / 2,
    height: deviceSize.width / 2,
    borderRadius: 100 / 2,
  }
}