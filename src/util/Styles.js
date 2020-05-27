import {Dimensions} from 'react-native';
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
  itemBackgroundColor: '#455a64',
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
    backgroundColor: '#455a64',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: -5,
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
    width: deviceSize.width * 0.93,
    height: 70,
    borderRadius: 100 / 8,
  },
  item: {
    backgroundColor: colorStyle.itemBackgroundColor,
    paddingRight: 30,
    paddingLeft: 10,
    flexDirection: 'column',
    justifyContent: 'space-between',
    margin: 5,
    padding: 10,
    borderRadius: 100 / 8,
  },
  section: {
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemText: {
    fontSize: 20,
    color: colorStyle.itemTextColor,
  },
  icon: {
    color: 'white',
    fontSize: 20,
  },
};
export const instantEarthquakes = {
  headers: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 40,
    paddingRight: 10,
  },
  headersText: {fontSize: 15, color: colorStyle.itemTitleColor},
  itemText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  location: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  locationName: {
    fontSize: 20,
  },
  item: {
    backgroundColor: colorStyle.itemBackgroundColor,
    flexDirection: 'column',
    justifyContent: 'space-between',
    margin: 5,
    padding: 10,
    paddingRight: 30,
    borderRadius: 100 / 8,
  },
  data: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
    paddingRight: 30,
  },
  time: {marginRight: 20},
  depth: {marginRight: 65},
};
export const content = {
  header: {
    fontSize: 20,
    color: 'white',
    padding: 10,
  },
  content: {
    fontSize: 15,
    color: 'white',
    padding: 10,
  },
  image: {
    width: deviceSize.width * 0.88,
    height: 200,
    borderRadius: 100 / 7,
  },
};
