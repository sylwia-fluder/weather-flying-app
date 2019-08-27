import {OWM} from './constants';
import {urlWithParams} from './helpers';
import {showErrorBox, showData, showLoader} from './manageView';

const addCityNameToParams = cityName => ({
    ...OWM.PARAMS,
    q: cityName,
});

const getWeather = cityName => {
    showLoader();
    fetch(urlWithParams(OWM.URL, addCityNameToParams(cityName)))
        .then(response => response.json())
        .then(data => {
            data.cod === '200' ?
                showData(data) :
                showErrorBox(data.cod);
        })
        .catch(showErrorBox);
};

export {
    getWeather,
};