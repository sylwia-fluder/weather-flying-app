import '../src/style.scss';
import singlePageApplication from './singlePageApplication';
import getFlight from './js/flights/flightView';
import getWeather from './js/weather/';

document.addEventListener('DOMContentLoaded', singlePageApplication.init);

const formSearch = document.querySelector('#search-form');
const inputSearch = formSearch.querySelector('input');
formSearch.addEventListener('submit', e => {
  e.preventDefault();
  getFlight(inputSearch.value);
  getWeather(inputSearch.value);
});
