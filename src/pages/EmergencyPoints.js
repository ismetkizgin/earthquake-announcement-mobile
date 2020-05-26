import React from 'react';
import {
  SafeAreaView,
  FlatList,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import {commonStyle, emergencyPoints} from '../util';
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
      <View style={emergencyPoints.headers}>
        <Text style={emergencyPoints.headerText}>ACİL DURUM NOKTALARI</Text>
      </View>
      <FlatList
        data={DATA}
        renderItem={({item}) => (
          <View style={emergencyPoints.item}>
            <Image
              style={emergencyPoints.place}
              source={require('../assets/ship.jpeg')}
            />
            <Text style={emergencyPoints.itemText}>{item.locationName}</Text>
            <TouchableOpacity>
              <FontAwesome5 style={emergencyPoints.icon} name={'comments'} />
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};
