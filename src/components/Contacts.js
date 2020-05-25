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
    text: 'Alihan Akçam',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    text: 'Alihan Akçam',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    text: 'Alihan Akçam',
  },
];
function Item({text}) {
  return (
    <View style={styles.item}>
      <Image source={require('../assets/icon.png')} style={styles.image} />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}
export const Contacts = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({item}) => (
          <TouchableOpacity>
            <Item text={item.text} />
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
    marginTop: 1,
  },
  item: {
    backgroundColor: '#202325',
    padding: 5,
    flexDirection: 'row',
  },
  text: {
    color: 'white',
    fontSize: 20,
    padding: 10,
  },
  image: {
    width: 50,
    height: 50,
  },
});
