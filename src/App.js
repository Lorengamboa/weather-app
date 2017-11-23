/**
 * Sample React Native Weather App
 * https://github.com/lorengamboa
 * 
 */

'use strict';

import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native';
import Swiper from 'react-native-swiper';
import Slide1 from './components/slide1';
import Slide2 from './components/slide2';
import Slide3 from './components/slide3';
import weather_desc from './config/weather';
import myWeather from './services/myweather';
import { kelvinToCelsius } from './utilities/temp_converter';
import styles from './style';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            backgroundColor: 'white',
            latitude: null,
            longitude: null,
            error: null,
            temperature: '',
            description: '',
            country: '',
            icon: null,
            pressure: null,
            humidity: null,
            w_speed: '',
            w_deg: ''
        }
    }

    getInitialState() {
        return {
            loading: true,
        };
    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;

                this.setState({ latitude, longitude });

                myWeather(latitude, longitude)
                    .then((result) => {
                        let { temp, pressure, humidity } = result.main;
                        const { description, icon } = result.weather[0];
                        const { country } = result.sys;
                        const { speed, deg } = result.wind;

                        const icon_url = `http://openweathermap.org/img/w/${icon}/.png`;
                        temp = kelvinToCelsius(temp) + 'ºC';

                        this.setState({ temperature: temp, 
                                        pressure: `Pressure: ${pressure}`,
                                        humidity: `Humidity: ${humidity}`,
                                        description, 
                                        loading: false, 
                                        country: `${country} ${result.name}`, 
                                        icon: icon_url, 
                                        w_speed: `Speed: ${speed}`, 
                                        w_deg: `Degrees: ${deg}`,
                                    });
                        this._paintBackgroundcolor();
                    })
                    .catch(function (err) {
                        this._errorHandler();
                    });
            },
            (error) => this._errorHandler(),
            { enableHighAccuracy: false, timeout: 10000, maximumAge: 3000 }
        );
    }

    render() {
        return (
            <Swiper style={styles.wrapper} showsButtons={true}>
                <Slide1 data={this.state} />
                <Slide2 data={this.state} />
                <Slide3 data={this.state} />
            </Swiper>
        );
    }

    /*************************************
     *         PRIVATE FUNCTIONS         *                
     *************************************

    /**
    * Paints the background color relaying 
    * on your the temperature
    */
    _paintBackgroundcolor() {
        let desc = this.state.description;

        if (weather_desc.hasOwnProperty(desc)) {
            this.setState({ backgroundColor: weather_desc[desc] });
        }
    }

    /**
     * Shows an error message to the user
     */
    _errorHandler(err) {
        this.setState({ error: "Oops the app failed" + err, loading: false });
    }

}


