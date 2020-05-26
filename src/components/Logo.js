import React, { Component } from "react";
import { logoStyle } from '../util'
import { Image } from 'react-native';

export class Logo extends Component {
    render() {
        return (
            <Image
                source={require('../assets/icon.png')}
                style={logoStyle.entryLogo}
            />
        );
    }
}