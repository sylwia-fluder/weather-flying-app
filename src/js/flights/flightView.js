import getFlightData from './flight';

const flightView = flightData => {
  document.querySelector(
    '#flight-date'
  ).lastChild.textContent = flightData.departureDate.slice(0, 10);
  document.querySelector('#city-to').textContent = flightData.placeName;
  document.querySelector(
    '#hour-from'
  ).textContent = flightData.departureDate.slice(-8, -3);
  document.querySelector('#hour-to').textContent = flightData.arriveDate.slice(
    -8,
    -3
  );
  document.querySelector('.price-label').nextSibling.textContent =
    flightData.price;
};

const getFlight = async city => {
  const flightData = await getFlightData(city);
  flightView(flightData);
};
export default getFlight;
