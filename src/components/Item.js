import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import {itemStyle} from '../util';
import PropTypes from 'prop-types';
const propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  source: PropTypes.string,
};

const defaultProps = {
  title: 'Button Name',
  text: 'Button Name',
  source: 'Button Name',
};

export class Item extends Component {
  render() {
    const {title, text, source} = this.props;

    return (
      <View style={itemStyle.item}>
        <Image
          source={require('../../assets/ship.jpeg')}
          style={itemStyle.image}
        />
        <Text style={itemStyle.title}>{title}</Text>
        <Text style={itemStyle.text}>{text}</Text>
      </View>
    );
  }
}

Item.defaultProps = defaultProps;

Item.propTypes = propTypes;
