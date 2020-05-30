import React, { Component } from "react";
import { commonStyle } from '../../util'
import { SafeAreaView, FlatList, } from 'react-native';
import { DetailBlock } from './DetailBlock'
import PropTypes from "prop-types";

const propTypes = {
    onRefresh: PropTypes.func,
    horizontal: PropTypes.bool,
    refreshing: PropTypes.bool
};

const defaultProps = {
    horizontal: false
};

export class ContentList extends Component {
    render() {
        const { data, navigation, refreshing, onRefresh, horizontal } = this.props;
        return (
            <SafeAreaView style={commonStyle.container}>
                <FlatList
                    data={data}
                    onRefresh={onRefresh}
                    refreshing={refreshing}
                    horizontal={horizontal}
                    renderItem={({ item }) => (
                        <DetailBlock
                            data={item}
                            children={true}
                            navigation={navigation}
                        />
                    )}
                    keyExtractor={(item) => item.PageID.toString()}
                />
            </SafeAreaView>
        );
    }
}

ContentList.defaultProps = defaultProps;

ContentList.propTypes = propTypes;