import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, TouchableOpacity } from "react-native";
import { linkText } from '../../util'

const propTypes = {
    onPress: PropTypes.func,
    name: PropTypes.string
};

const defaultProps = {
    name: "Link Name"
};

export class LinkText extends Component {
    render() {
        const { onPress, name } = this.props;
        return (
            <View>
                <TouchableOpacity>
                    <Text style={linkText.linkText}>{name}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

LinkText.defaultProps = defaultProps;

LinkText.propTypes = propTypes;