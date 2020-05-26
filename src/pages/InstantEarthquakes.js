import React from 'react';
import {SafeAreaView, FlatList, Text, View, StyleSheet} from 'react-native';
import {commonStyle} from '../util';
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    location: 'Ankara',
    date: '12.12.2012',
    time: '15:18:12:00',
    depth: '12',
    size: '10',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    location: 'Ankara',
    date: '12.12.2012',
    time: '15:18:12:00',
    depth: '12',
    size: '10',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    location: 'Ankara',
    date: '12.12.2012',
    time: '15:18:12:00',
    depth: '12',
    size: '10',
  },
];

export const InstantEarthquakes = () => {
  return (
    <SafeAreaView style={commonStyle.container}>
      <View style={styles.headers}>
        <Text style={styles.headerText}>Yer</Text>
        <Text style={styles.headerText}>Tarih</Text>
        <Text style={styles.headerText}>Saat</Text>
        <Text style={styles.headerText}>Derinlik</Text>
        <Text style={styles.headerText}>Büyüklük</Text>
      </View>
      <FlatList
        data={DATA}
        renderItem={({item}) => (
          <View style={styles.itemText}>
            <Text>{item.location}</Text>
            <Text>{item.date}</Text>
            <Text>{item.time}</Text>
            <Text>{item.depth}</Text>
            <Text>{item.size}</Text>
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  headers: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  headerText: {fontSize: 20, color: 'gray'},
  itemText: {
    paddingRight: 30,
    paddingLeft: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
