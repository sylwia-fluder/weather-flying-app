import '../src/style.scss';

import './singlePageApplication';
import getFlightData from './js/flights/flight';
import getWeather from './js/weather/';

getFlightData('Warszawa')
  .then()
  .catch();

const formSearch = document.querySelector('#search-form');
const inputSearch = formSearch.querySelector('input');
formSearch.addEventListener('submit', e => {
  e.preventDefault();
  getWeather(inputSearch.value);
});
