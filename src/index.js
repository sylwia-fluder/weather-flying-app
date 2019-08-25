import getFlightData from './js/flights/flight';
//style.scss import
import '../src/style.scss';
console.log('start');

getFlightData('Warszawa').then(data => {
  console.log(data);
});
