import { Dimensions } from 'react-native';
const deviceSize = Dimensions.get('window');

export const colorStyle = {
  textColor: '#ffffff',
  //bodyBackgroundColor: '#1c313a',
  bodyBackgroundColor: '#1c313a',
  buttonBackgroundColor: '#455a64',
  buttonTextColor: '#ffffff',
  inputBackgroundColor: 'rgba(255,255,255,0.3)',
  inputTextColor: '#ffffff',
  itemColor: 'rgba(255,255,255,0.08)',
  itemTitleColor: '#ffffff',
  itemTextColor: '#ffffff',
  itemBackgroundColor: 'gray',
};

export const commonStyle = {
  container: {
    flex: 1,
    backgroundColor: colorStyle.bodyBackgroundColor,
  },
  centerMain: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
    margin: 30,
  },
  titleStyle: {
    h1: {
      color: colorStyle.textColor,
      fontSize: 30,
      margin: 10,
    },
    h2: {
      marginTop: 10,
      color: colorStyle.textColor,
      fontSize: 23,
    },
  },
  linkText: {
    color: colorStyle.textColor,
    fontSize: 18,
    padding: 10,
  },
};

export const linkText = {
  linkText: {
    color: colorStyle.textColor,
    fontSize: 18,
    padding: 10,
  },
};

export const inputStyle = {
  inputBox: {
    width: deviceSize.width * 0.75,
    backgroundColor: colorStyle.inputBackgroundColor,
    borderRadius: 25,
    paddingHorizontal: 16,
    fontSize: 16,
    color: colorStyle.inputTextColor,
    marginVertical: 10,
  },
};

export const buttonStyle = {
  button: {
    width: deviceSize.width * 0.75,
    backgroundColor: colorStyle.buttonBackgroundColor,
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 13,
    elevation: 5,
  },
  buttonText: {
    color: colorStyle.buttonTextColor,
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
  },
};

export const logoStyle = {
  entryLogo: {
    width: deviceSize.width / 2,
    height: deviceSize.width / 2,
    borderRadius: 100 / 2,
  },
};

export const itemStyle = {
  item: {
    width: deviceSize.width * 0.95,
    backgroundColor: colorStyle.itemColor,
    margin: 5,
    borderRadius: 100 / 7,
    padding: 10,
    flexDirection: 'column',
  },
  centerMain: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
  },
  title: {
    color: colorStyle.itemTitleColor,
    fontSize: 20,
    padding: 10,
  },
  text: {
    color: colorStyle.itemTextColor,
    fontSize: 15,
    paddingLeft: 10,
  },
  image: {
    flexDirection: 'column',
    alignItems: 'center',
    width: deviceSize.width * 0.9,
    height: 120,
  },
};
export const drawerContentStyle = {
  userInfoSection: {
    backgroundColor: "#455a64",
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: -5
  },
  title: {
    fontSize: 20,
    flexDirection: 'row',
    alignItems: 'center',
    color: 'white',
  },
  text: {
    color: 'white',
    fontSize: 18,
  },
};

export const emergencyPoints = {
  place: {
    width: 50,
    height: 40,
    borderRadius: 100 / 8
  },
  headers: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
  },
  headerText: {
    fontSize: 25,
    color: colorStyle.itemTitleColor
  },
  item: {
    backgroundColor: colorStyle.itemBackgroundColor,
    paddingRight: 30,
    paddingLeft: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 5,
    padding: 10,
    borderRadius: 100 / 8,
  },
  itemText: {
    fontSize: 20,
    color: colorStyle.itemTextColor,
  },
  icon: {
    fontSize: 20,
  },
};
export const instantEarthquakes = {
  mainHeader: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
  },
  headerText: {
    fontSize: 20,
    color: colorStyle.itemTitleColor,
  },
  headers: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 40,
    paddingRight: 10,
  },
  headersText: { fontSize: 15, color: colorStyle.itemTitleColor },
  itemText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  item: {
    backgroundColor: colorStyle.itemBackgroundColor,
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 5,
    padding: 10,
    paddingRight: 30,
    borderRadius: 100 / 8,
  },
};
