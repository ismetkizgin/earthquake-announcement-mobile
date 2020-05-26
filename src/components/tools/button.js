import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, TouchableOpacity } from "react-native";
import { buttonStyle } from '../../util'

const propTypes = {
    onPress: PropTypes.func,
    name: PropTypes.string
};

const defaultProps = {
    name: "Button Name"
};

export class Button extends Component {
    render() {
        const { onPress, name } = this.props;
        return (
            <View>
                <TouchableOpacity style={buttonStyle.button}>
                    <Text
                        style={buttonStyle.buttonText}
                        onPress={onPress}>
                        {name}
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

Button.defaultProps = defaultProps;

Button.propTypes = propTypes;