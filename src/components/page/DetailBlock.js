import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { itemStyle } from '../../util';

export class DetailBlock extends Component {

  render() {
    const { data, children, navigation } = this.props;

    if (children) {
      return (
        <TouchableOpacity
          style={itemStyle.centerMain}
          onPress={() => {
            navigation.navigate('Detail', data);
          }}>
          <View style={itemStyle.item}>
            <Image source={{ uri: data.PagePicture }} style={itemStyle.image} />
            <Text style={itemStyle.title}>{data.PageTitle}</Text>
            <Text style={itemStyle.text}>{data.PageDescription}</Text>
          </View>
        </TouchableOpacity>
      );
    }
    else {
      return (
        <>
          <Image source={{ uri: data.PagePicture }} style={itemStyle.image} />
          <Text style={itemStyle.title}>{data.PageTitle}</Text>
          <Text style={itemStyle.text}>{data.PageContent}</Text>
        </>
      )
    }
  }
}