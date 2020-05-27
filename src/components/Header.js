import React, {Component} from 'react';
import {View, Text, Image, SafeAreaView} from 'react-native';
import {commonStyle, content} from '../util';
import PropTypes from 'prop-types';

const propTypes = {
  text: PropTypes.string,
};

const defaultProps = {
  text: 'Text',
};

export class Header extends Component {
  render() {
    const {text} = this.props;

    return (
      <SafeAreaView style={{backgroundColor: '#2c3f49', height: 50}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 7,
          }}>
          <Text style={{color: 'white', fontSize: 22}}>{text}</Text>
        </View>
      </SafeAreaView>
    );
  }
}

Header.defaultProps = defaultProps;

Header.propTypes = propTypes;
