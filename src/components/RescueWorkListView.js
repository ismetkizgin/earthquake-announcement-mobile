import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  FlatList,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Denizde kurtarma çalışmaları devam etti',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget augue in velit iaculis fermentum dignissim id est. Maecenas sodales tincidunt est et convallis',
    source: '../assets/ship.jpeg',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Denizde kurtarma çalışmaları devam etti',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget augue in velit iaculis fermentum dignissim id est. Maecenas sodales tincidunt est et convallis',
    source: '../assets/ship.jpeg',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Denizde kurtarma çalışmaları devam etti',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget augue in velit iaculis fermentum dignissim id est. Maecenas sodales tincidunt est et convallis',
    source: '../assets/ship.jpeg',
  },
];
function Item({text, title, source}) {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.item}>
        <Image source={require('../assets/ship.jpeg')} style={styles.image} />
        <Text style={styles.text}>{text}</Text>
      </View>
    </View>
  );
}
export const RescueWorkListView = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({item}) => (
          <TouchableOpacity>
            <Item text={item.text} title={item.title} source={item.source} />
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#202325',
  },
  item: {
    flexDirection: 'row',
  },
  title: {
    color: 'white',
    fontSize: 20,
    padding: 10,
  },
  text: {
    color: 'white',
    fontSize: 15,
    paddingLeft: 10,
    width: 250,
  },

  image: {
    marginTop: 10,
    flexDirection: 'column',
    alignItems: 'center',
    width: 100,
    height: 100,
  },
});
