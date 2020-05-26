import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, TouchableOpacity } from "react-native";
import { commonStyle } from '../../util'

const propTypes = {
    onPress: PropTypes.func,
    name: PropTypes.string
};

const defaultProps = {
    name: "Link Name",
    style: commonStyle.textLink
};

export class LinkText extends Component {
    render() {
        const { onPress, name, style } = this.props;
        return (
            <View>
                <TouchableOpacity>
                    <Text style={style}>{name}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

LinkText.defaultProps = defaultProps;

LinkText.propTypes = propTypes;