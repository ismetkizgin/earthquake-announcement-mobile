import React, { useState, useEffect } from 'react';
import { View, ScrollView, TouchableOpacity, Text, Image, FlatList } from 'react-native';
import { commonStyle, itemStyle, instantEarthquakesStyle } from '../util'
import { RescueWorksList } from '../actions/page.actions'
import { InstantEarthquakesPieceList } from '../actions/InstantEarthquakes.actions'
import { SafeAreaView } from 'react-native-safe-area-context';

export const Home = ({ navigation }) => {
  const [dataPage, setDataPage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [dataIE, setDataIE] = useState(null);

  pageFecthData = () => {
    setIsLoading(true);
    RescueWorksList().then(res => {
      setDataPage(res);
    }).finally(() => setIsLoading(false));
  }

  iEFecthData = async () => {
    setIsLoading(true);
    InstantEarthquakesPieceList().then(res => {
      setDataIE(res);
    }).finally(() => setIsLoading(false));
  }


  useEffect(() => {
    pageFecthData();
    iEFecthData();
  }, []);

  return (
    <SafeAreaView style={commonStyle.container}>
      <FlatList
        data={dataPage}
        onRefresh={pageFecthData}
        refreshing={isLoading}
        horizontal={true}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={itemStyle.centerMain}
            onPress={() => {
              navigation.navigate('Detail', item);
            }}>
            <View style={[itemStyle.item, { alignItems: "center" }]}>
              <Image source={{ uri: item.PagePicture }} style={[itemStyle.image, itemStyle.homeImage]} />
              <Text style={itemStyle.title}>{item.PageTitle}</Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.PageID.toString()}
      />

      <FlatList
        data={dataIE}
        refreshing={isLoading}
        onRefresh={iEFecthData}
        horizontal={true}
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

