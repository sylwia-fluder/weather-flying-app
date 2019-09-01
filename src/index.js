import getFlightData from './js/flights/flight';
import '../src/style.scss';
import singlePageApplication from './singlePageApplication';
import flightView from './js/flights/flightView';

document.addEventListener('DOMContentLoaded', singlePageApplication.init);

const formSearch = document.querySelector('#search-form');
const inputSearch = formSearch.querySelector('input');
formSearch.addEventListener('submit', e => {
  e.preventDefault();
  getFlightData(inputSearch.value).then(data => flightView(data));
});
