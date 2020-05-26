import React from 'react';
import {SafeAreaView, FlatList, Text, View, StyleSheet} from 'react-native';
import {commonStyle} from '../util';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const DATA = [
  {
    id: '1',
    locationName: 'Orta Park',
    location: 'Turgutlu',
  },
  {
    id: '2',
    locationName: 'Koza Park',
    location: 'Turgutlu',
  },
  {
    id: '3',
    locationName: 'Heykeller',
    location: 'Turgutlu',
  },
];

export const EmergencyPoints = () => {
  return (
    <SafeAreaView style={commonStyle.container}>
      <View style={styles.headers}>
        <Text style={styles.headerText}>ACİL DURUM NOKTALARI</Text>
      </View>
      <FlatList
        data={DATA}
        renderItem={({item}) => (
          <View style={styles.item}>
            <Text style={styles.itemText}>{item.locationName}</Text>
            <FontAwesome5 style={styles.icon} name={'comments'} />
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
    justifyContent: 'center',
    padding: 10,
  },
  headerText: {fontSize: 25, color: 'gray'},
  item: {
    backgroundColor: 'gray',
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
  },
  icon: {
    fontSize: 20,
  },
});
