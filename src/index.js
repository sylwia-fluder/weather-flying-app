import getFlightData from './js/flights/flight';
//style.scss import
import '../src/style.scss';
console.log('start');

getFlightData('Krakow').then(data => {
  console.log(data);
});
