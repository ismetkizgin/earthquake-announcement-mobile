import React, {Component} from 'react';
import {ScrollView, Text, Image, SafeAreaView} from 'react-native';
import {commonStyle, content} from '../util';
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

export class Content extends Component {
  render() {
    const {title, text, source} = this.props;

    return (
      <SafeAreaView style={commonStyle.container}>
        <ScrollView
          style={{
            backgroundColor: 'rgba(255,255,255,0.08)',
            margin: 15,
            borderRadius: 100 / 7,
            padding: 10,
            flexDirection: 'column',
          }}>
          <Image style={content.image} source={{uri: source}} />
          <Text style={content.header}>{title}</Text>
          <Text style={content.content}>{text}</Text>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

Content.defaultProps = defaultProps;

Content.propTypes = propTypes;
