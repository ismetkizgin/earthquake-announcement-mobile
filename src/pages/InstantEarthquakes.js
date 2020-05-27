import React from 'react';
import {SafeAreaView, FlatList, Text, View, StyleSheet} from 'react-native';
import {commonStyle, instantEarthquakes} from '../util';
const DATA = [
  {
    id: '1',
    location: 'Ankara',
    date: '12.12.2012',
    time: '15:18:12',
    depth: '12',
    size: '10',
  },
  {
    id: '2',
    location: 'Ankara',
    date: '12.12.2012',
    time: '15:18:12',
    depth: '12',
    size: '10',
  },
  {
    id: '3',
    location: 'Ankara',
    date: '12.12.2012',
    time: '15:18:12',
    depth: '12',
    size: '10',
  },
  {
    id: '4',
    location: 'Ankara',
    date: '12.12.2012',
    time: '15:18:12',
    depth: '12',
    size: '10',
  },
  {
    id: '5',
    location: 'Ankara',
    date: '12.12.2012',
    time: '15:18:12',
    depth: '12',
    size: '10',
  },
  {
    id: '6',
    location: 'Ankara',
    date: '12.12.2012',
    time: '15:18:12',
    depth: '12',
    size: '10',
  },
  {
    id: '7',
    location: 'Ankara',
    date: '12.12.2012',
    time: '15:18:12',
    depth: '12',
    size: '10',
  },
];

export const InstantEarthquakes = () => {
  return (
    <SafeAreaView style={commonStyle.container}>
      <FlatList
        data={DATA}
        renderItem={({item}) => (
          <View style={instantEarthquakes.item}>
            <View style={instantEarthquakes.location}>
              <Text style={instantEarthquakes.locationName}>
                {item.location}
              </Text>
            </View>
            <View style={instantEarthquakes.headers}>
              <Text style={instantEarthquakes.headersText}>Tarih</Text>
              <Text style={instantEarthquakes.headersText}>Saat</Text>
              <Text style={instantEarthquakes.headersText}>Derinlik</Text>
              <Text style={instantEarthquakes.headersText}>Büyüklük</Text>
            </View>
            <View style={instantEarthquakes.data}>
              <Text>{item.date}</Text>
              <Text style={instantEarthquakes.time}>{item.time}</Text>
              <Text style={instantEarthquakes.depth}>{item.depth}</Text>
              <Text>{item.size}</Text>
            </View>
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};
