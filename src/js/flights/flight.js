import getPlace from './places';
import flightData from './flightData';
const moment = require('moment');

const getFlight = (placeID, departureDate) => {
  return fetch(
    `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsedates/v1.0/PL/PLN/en-GB/WRO-sky/${placeID}/${departureDate}?inboundpartialdate=anytime`,
    {
      method: 'GET',
      headers: {
        'x-rapidapi-host':
          'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com',
        'x-rapidapi-key': 'f76b9a08c6msh4342c2bb7ef2877p1c960ajsn0922b19cbacf',
      },
    }
  )
    .then(response => {
      return response.json();
    })
    .catch(err => {
      return err;
    });
};

const getFlightData = async city => {
  const tomorrowDate = moment()
    .add(1, 'day')
    .format()
    .substr(0, 10);

  const dataPlace = await getPlace(city);
  const placeID = dataPlace.Places[0].PlaceId;
  const placeName = dataPlace.Places[0].PlaceName;
  const country = dataPlace.Places[0].CountryName;

  const dataFlight = await getFlight(placeID, tomorrowDate);
  const minPrice = dataFlight.Quotes[0].MinPrice;
  const carrierID = dataFlight.Quotes[0].OutboundLeg.CarrierIds[0];
  const carrierName = dataFlight.Carriers.find(
    carrier => carrier.CarrierId === carrierID
  ).Name;
  const departureDate = dataFlight.Quotes[0].OutboundLeg.DepartureDate;

  return new flightData(
    city,
    minPrice,
    placeName,
    country,
    carrierName,
    departureDate
  );
};

export default getFlightData;
