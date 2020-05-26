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
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

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
      <TouchableOpacity>
        <FontAwesome5 style={styles.icon} name={'minus-circle'} color="white" />
      </TouchableOpacity>
    </View>
  );
}
export const Contacts = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({item}) => (
          <TouchableOpacity style={{flexDirection: 'row'}}>
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
    backgroundColor: '#202325',
  },
  item: {
    backgroundColor: '#202325',
    padding: 5,
    flexDirection: 'row',
    borderBottomColor: '#5f9ea0',
    borderWidth: 1,
    alignItems: 'center',
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
  icon: {
    fontSize: 20,
    color: 'red',
    marginLeft: 150,
    marginRight: 20,
  },
});
