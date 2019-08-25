import {OWM} from './constants';
import {urlWithParams} from './helpers';

const addCityNameToParams = cityName => ({
    ...OWM.PARAMS,
    q: cityName,
});

const getWeather = cityName =>
    fetch(urlWithParams(
        OWM.URL,
        addCityNameToParams(cityName)
    ))
        .then(response => response.json())
        .then(data => {
            switch (data.cod) {
                case '400':
                    console.log('getWeather: ', 'Brak danych na wejściu');
                    break;
                case '404':
                    console.log('getWeather: ', 'Nie znaleziono miasta');
                    break;
                default:
                    console.log('getWeather: ', data);
            }
        })
        .catch(e =>
            console.log('getWeather: ', e)
        );

// examples
getWeather('London');
getWeather('');
getWeather('Londyn');
