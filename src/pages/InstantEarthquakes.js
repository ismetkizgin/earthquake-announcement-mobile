import React, { useState, useLayoutEffect } from 'react';
import { SafeAreaView, FlatList, Text, View, StyleSheet } from 'react-native';
import { commonStyle, instantEarthquakesStyle } from '../util';
import { InstantEarthquakesList } from '../actions/InstantEarthquakes.actions'

export const InstantEarthquakes = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  fecthData = async () => {
    setIsLoading(true);
    InstantEarthquakesList().then(res => {
      setData(res);
    }).finally(() => setIsLoading(false));
  }

  useLayoutEffect(() => {
    fecthData();
  }, []);

  return (
    <SafeAreaView style={commonStyle.container}>
      <FlatList
        data={data}
        refreshing={isLoading}
        onRefresh={fecthData}
        renderItem={({ item }) => (
          <View style={instantEarthquakesStyle.item}>
            <View style={instantEarthquakesStyle.header}>
              <Text style={instantEarthquakesStyle.cityTitle}>{item.yer}</Text>
            </View>
            <View style={instantEarthquakesStyle.timeContent}>
              <Text style={instantEarthquakesStyle.timeText}>{item.tarih} {item.saat}</Text>
            </View>
            <View style={instantEarthquakesStyle.content}>
              <View>
                <Text style={instantEarthquakesStyle.contentTitle}>Enlem</Text>
                <Text style={instantEarthquakesStyle.contentText}>{item.enlem}</Text>
              </View>
              <View>
                <Text style={instantEarthquakesStyle.contentTitle}>Boylam</Text>
                <Text style={instantEarthquakesStyle.contentText}>{item.boylam}</Text>
              </View>
              <View>
                <Text style={instantEarthquakesStyle.contentTitle}>Derinlik</Text>
                <Text style={instantEarthquakesStyle.contentText}>{item.derinlik} KM</Text>
              </View>
              <View>
                <Text style={instantEarthquakesStyle.contentTitle}>Büyüklük</Text>
                <Text style={instantEarthquakesStyle.contentText}>{item.siddet}</Text>
              </View>
            </View>
          </View>
        )}
        keyExtractor={(item, index) => "key" + index}
      />
    </SafeAreaView>
  );
};
