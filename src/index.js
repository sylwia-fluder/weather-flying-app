import getFlightData from './js/flights/flight';
import '../src/style.scss';

getFlightData('Stockholm')
  .then(data => console.log(data))
  .catch();
