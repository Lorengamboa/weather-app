'use strict';

import { CELSIUS_IN_KELVIN } from '../config/constants';
/**
 * Converts kelvin into celsius
 * @param {number} k - kelvin value
 * @returns {nummber} result of the conversion
 */
export const kelvinToCelsius = (k) => {
    let result = 0;
    result =  Math.round(k - CELSIUS_IN_KELVIN);

    return result;
}
