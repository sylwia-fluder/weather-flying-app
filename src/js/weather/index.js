import {OWM} from './constants';
import {urlWithParams} from './helpers';
import {showData} from './weatherView';

const addCityNameToParams = cityName => ({
  ...OWM.PARAMS,
  q: cityName,
});

const getWeather = cityName => {
  return fetch(urlWithParams(OWM.URL, addCityNameToParams(cityName)))
    .then(response => {
      if (!response.ok) throw new Error(`HTTP status code: ${response.status}`);
      return response.json();
    })
    .then(data => showData(data))
    .catch(err => {
      throw err;
    });
};

export default getWeather;
