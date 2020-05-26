import React from 'react';
import { SafeAreaView, FlatList } from 'react-native';
import { DetailBlock } from '../components';
import { commonStyle } from '../util';
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Denizde kurtarma çalışmaları devam etti',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget augue in velit iaculis fermentum dignissim id est. Maecenas sodales tincidunt est et convallis',
    source: 'https://cdnuploads.aa.com.tr/uploads/Contents/2019/02/10/thumbs_b_c_7943518a3a2da1f2ddc07ce2633a3672.jpg',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Denizde kurtarma çalışmaları devam etti',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget augue in velit iaculis fermentum dignissim id est. Maecenas sodales tincidunt est et convallis',
    source: 'https://cdnuploads.aa.com.tr/uploads/Contents/2019/02/10/thumbs_b_c_7943518a3a2da1f2ddc07ce2633a3672.jpg',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Denizde kurtarma çalışmaları devam etti',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget augue in velit iaculis fermentum dignissim id est. Maecenas sodales tincidunt est et convallis ',
    source: 'https://cdnuploads.aa.com.tr/uploads/Contents/2019/02/10/thumbs_b_c_7943518a3a2da1f2ddc07ce2633a3672.jpg',
  },
];

export const RescueWorks = () => {
  return (
    <SafeAreaView style={commonStyle.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <DetailBlock text={item.text} title={item.title} source={item.source} />
        )}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};
