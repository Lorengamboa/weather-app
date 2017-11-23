/**
 * Secundary view where the wind speed and
 * the wind degrees are displayed
 */

'use strict';

import React, { Component } from 'react';
import {
    View,
    ActivityIndicator
} from 'react-native';
import { Text } from 'react-native-elements'
import styles from './style';

export default class Slide2 extends Component {
    render() {
        const { w_speed, w_deg, error } = this.props.data;

        return (
            <View style={styles.slide2}  >
                <Text h1>WIND</Text>
                <Text h1> {w_speed}</Text>
                <Text h1> {w_deg}</Text>
                {error ? <Text>Error: {error}</Text> : null}
            </View>
        )
    }
}