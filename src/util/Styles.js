import { Dimensions, Appearance } from 'react-native';
const deviceSize = Dimensions.get('window'),
  theme = Appearance.getColorScheme();

let themeColor
if (theme === "light") {
  themeColor = {
    textColor: '#3e3e3e',
    bodyBackgroundColor: '#ffffff',
    buttonBackgroundColor: '#bd0100',
    buttonTextColor: '#ffffff',
    inputBackgroundColor: 'rgba(100,100,100,0.4)',
    inputTextColor: '#ffffff',
    itemBackgroundColor: '#ecf7fe',
    itemTitleColor: '#3e3e3e',
    itemTextColor: '#3e3e3e',
    headerBackgroundColor: '#ffffff',
    userInfoSectionBackgroundColor: '#c2d9e8',
    userInfoSectionTitleColor: '#3e3e3e',
    drawerMenuTextColor: '#3e3e3e',
    drawerMenuIconColor: '#3e3e3e',
    itemContentTitleColor: '#000',
  };
}
else {
  themeColor = {
    textColor: '#ffffff',
    bodyBackgroundColor: '#1c313a',
    buttonBackgroundColor: '#455a64',
    buttonTextColor: '#ffffff',
    inputBackgroundColor: 'rgba(255,255,255,0.3)',
    inputTextColor: '#ffffff',
    itemBackgroundColor: 'rgba(255,255,255,0.08)',
    itemTitleColor: '#ffffff',
    itemTextColor: '#ffffff',
    itemBackgroundColor: '#455a64',
    headerBackgroundColor: '#455a64',
    userInfoSectionBackgroundColor: '#455a64',
    userInfoSectionTitleColor: '#ffffff',
    drawerMenuTextColor: '#ffffff',
    drawerMenuIconColor: '#ffffff',
    itemContentTitleColor: '#DCDCDC',
  };
}

export const colorStyle = themeColor;

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
  text: {
    color: colorStyle.text,
    fontSize: 16
  }
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
    backgroundColor: colorStyle.itemBackgroundColor,
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
    padding: 5,
    fontWeight: 'bold'
  },
  text: {
    color: colorStyle.itemTextColor,
    fontSize: 15,
    padding: 5,
    textAlign: 'justify'
  },
  image: {
    flexDirection: 'column',
    alignItems: 'center',
    width: deviceSize.width * 0.9,
    height: 200,
    borderRadius: 100 / 7
  },
  itemDetail: {
    backgroundColor: colorStyle.itemBackgroundColor,
    margin: 15,
    borderRadius: 100 / 7,
    padding: 10,
    flexDirection: 'column',
    margin: 10
  }
};

export const drawerContentStyle = {
  userInfoSection: {
    backgroundColor: colorStyle.userInfoSectionBackgroundColor,
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: -5,
  },
  title: {
    fontSize: 20,
    flexDirection: 'row',
    alignItems: 'center',
    color: colorStyle.userInfoSectionTitleColor,
  },
  text: {
    color: colorStyle.drawerMenuTextColor,
    fontSize: 18,
  },
  centerMain: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
    paddingVertical: 100,
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

export const instantEarthquakesStyle = {
  item: {
    backgroundColor: colorStyle.itemBackgroundColor,
    borderRadius: 100 / 7,
    margin: 10,
    padding: 10
  },
  header: {
    alignItems: "center"
  },
  cityTitle: {
    fontSize: 20,
    color: colorStyle.itemTitleColor,
    fontWeight: "bold"
  },
  timeContent: {
    textAlign: "center",
    alignItems: "center",
    marginBottom: 10
  },
  timeText: {
    color: colorStyle.itemTextColor,
    fontSize: 12
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
  },
  contentTitle: {
    color: colorStyle.itemContentTitleColor,
    fontSize: 12,
    textAlign: "center"
  },
  contentText: {
    color: colorStyle.itemTextColor,
    fontSize: 15,
    textAlign: "center",
    fontWeight: "bold"
  },
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  halfHeight: {
    flex: .5,
    backgroundColor: '#FF3366'
  },
  quarterHeight: {
    flex: .25,
    backgroundColor: '#000'
  }
};