/**
 * Secundary view where the pressure and 
 * humidity are displayed
 */

'use strict';

import React, { Component } from 'react';
import {
	View
} from 'react-native';
import { Text } from 'react-native-elements';
import styles from './style';

export default class Slide3 extends Component {
	render() {
		const { error, pressure, humidity } = this.props.data;

		return (
			<View style={styles.slide3}  >
				<Text h1> {pressure}</Text>
				<Text h1> {humidity}</Text>
				{error ? <Text>Error: {error}</Text> : null}
			</View>
		);
	}
}