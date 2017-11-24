'use strict';

import axios from 'axios';

/**
  * Asyncronous function to retrieve information about someone's inmediate
  * position.
  * @argument {number} lat - Latitude
  * @argument {number} lon - longitude
  * @returns  {object} json response that contains information about ur local weather
  */
const myWeather = (lat, lon) => {
	// Make a request for a user with a given ID 
	return new Promise(function (resolve, reject) {
		axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=89be8b5ed68e77b6dc88c66ba6f07914`)
			.then(function (res) {
				if (res.status === 200) {
					/* grnd_level, humidity, pressure, sea_level, temp, temp_max, temp_min*/
					resolve(res.data);
				}
				else {
					reject(res.statusText);
				}
			})
			.catch(function (err) {
				reject(err);
			});
	}
	);
};

export default myWeather;