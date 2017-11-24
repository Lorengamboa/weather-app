/**
 * Main view where the temperature, country 
 * and description are displayed
 */

'use strict';

import React, { Component } from 'react';
import {
	View,
	ActivityIndicator
} from 'react-native';
import { Text } from 'react-native-elements';
import styles from './style';

export default class Slide1 extends Component {
	render() {
		const { temperature, description, country, error, loading, backgroundColor } = this.props.data;
        
		return (
			<View style={[styles.slide1, { backgroundColor: backgroundColor }]}  >
				<Text h1>{temperature}</Text>
				<Text h1>{description}</Text>
				<Text h1>{country}</Text>
				{error ? <Text>Error: {error}</Text> : null}
				<ActivityIndicator
					animating={loading}
					style={[styles.centering, { height: 80 }]}
					size="large"
				/>
			</View>
		);
	}
}