import React from 'react';
import {SafeAreaView, Text, Image, View, StyleSheet} from 'react-native';
import {commonStyle} from '../util';
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'HABER',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget augue in velit iaculis fermentum dignissim id est. Maecenas sodales tincidunt est et convallis',
    source: '../assets/ship.jpeg',
  },
];

export const NewsContent = ({navigation}) => {
  return (
    <SafeAreaView style={commonStyle.container}>
      <View>
        <Image />
        <Text style={styles.header}>Başlık</Text>
        <Text style={styles.content}>içerik</Text>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    color: 'white',
  },
  content: {
    fontSize: 15,
    color: 'white',
  },
});
