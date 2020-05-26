import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {itemStyle} from '../util';
import PropTypes from 'prop-types';

const propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  source: PropTypes.string,
  navigation: PropTypes.navigate,
};

const defaultProps = {
  title: 'Title Name',
  text: 'Text',
  source: 'Image',
};

export class DetailBlock extends Component {
  render() {
    const {title, text, source, navigation} = this.props;

    return (
      <TouchableOpacity
        style={itemStyle.centerMain}
        onPress={() => {
          navigation.navigate('newsContent');
        }}>
        <View style={itemStyle.item}>
          <Image source={{uri: source}} style={itemStyle.image} />
          <Text style={itemStyle.title}>{title}</Text>
          <Text style={itemStyle.text}>{text}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

DetailBlock.defaultProps = defaultProps;

DetailBlock.propTypes = propTypes;
