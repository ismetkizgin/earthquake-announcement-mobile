import React from 'react'
import { DetailBlock } from '../components'
import { SafeAreaView, ScrollView } from 'react-native'
import { commonStyle, itemStyle } from '../util'

export const Detail = ({ route, navigation }) => {
  return (

    <ScrollView style={commonStyle.container}>
      <SafeAreaView style={itemStyle.itemDetail}>
        <DetailBlock data={route.params} children={false} />
      </SafeAreaView>
    </ScrollView>

  );
};
