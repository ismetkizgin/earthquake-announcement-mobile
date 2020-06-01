import React, { useState, useEffect } from 'react';
import { View, ScrollView, TouchableOpacity, Text, Image, FlatList } from 'react-native';
import { commonStyle, itemStyle, instantEarthquakesStyle } from '../util'
import { ContentList } from '../components'
import { RescueWorksList } from '../actions/page.actions'

export const Home = ({ navigation }) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  fecthData = () => {
    setIsLoading(true);
    RescueWorksList().then(res => {
      setData(res);
    }).finally(() => setIsLoading(false));
  }

  useEffect(() => {
    fecthData();
  }, []);

  return (
    <ScrollView style={commonStyle.container}>
      <FlatList
        data={data}
        onRefresh={fecthData}
        refreshing={isLoading}
        horizontal={true}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={itemStyle.centerMain}
            onPress={() => {
              navigation.navigate('Detail', item);
            }}>
            <View style={[itemStyle.item, { alignItems: "center" }]}>
              <Image source={{ uri: item.PagePicture }} style={itemStyle.image} />
              <Text style={itemStyle.title}>{item.PageTitle}</Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.PageID.toString()}
      />
      <View style={instantEarthquakesStyle.container}>
        <Text>asdasd</Text>
        <Text>asdasd</Text>
        <Text>asdasd</Text>
      </View>
    </ScrollView>
  );
};

