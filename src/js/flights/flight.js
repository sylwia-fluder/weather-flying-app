import getPlace from './places';
import flightData from './flightData';
const moment = require('moment');

const createSession = (placeID, departureDate) => {
  return fetch(
    'https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/pricing/v1.0',
    {
      method: 'POST',
      headers: {
        'x-rapidapi-host':
          'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com',
        'x-rapidapi-key': 'f76b9a08c6msh4342c2bb7ef2877p1c960ajsn0922b19cbacf',
        'content-type': 'application/x-www-form-urlencoded',
      },
      body: `country=PL&currency=PLN&locale=en-GB&originplace=WRO-sky&destinationplace=${placeID}&outbounddate=${departureDate}&adults=1`,
    }
  )
    .then(response => {
      if (!response.ok) throw new Error('HTTP status code: ' + response.status);
      return response;
    })
    .catch(err => {
      throw err;
    });
};
const pollResult = sessionKey => {
  return fetch(
    `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/pricing/uk2/v1.0/${sessionKey}?sortType=price&sortOrder=asc&stops=0&pageIndex=0&pageSize=10"`,
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
      if (!response.ok) throw new Error('HTTP status code: ' + response.status);
      return response.json();
    })
    .then(data => {
      if (data.Itineraries.length === 0)
        throw new Error('No connection from Wroclaw');
      return data;
    })
    .catch(err => {
      throw err;
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
  const sessionResponse = await createSession(placeID, tomorrowDate);
  const sessionKey = await sessionResponse.headers
    .get('location')
    .substring(64);
  const dataFlight = await pollResult(sessionKey);
  const legID = dataFlight.Legs.find(leg => leg.Stops.length === 0).Id;
  const minPrice = dataFlight.Itineraries.find(
    itin => itin.OutboundLegId === legID
  ).PricingOptions[0].Price;
  const departureDate = dataFlight.Legs.find(leg => leg.Id === legID).Departure;
  const arriveDate = dataFlight.Legs.find(leg => leg.Id === legID).Arrival;
  const carrierID = dataFlight.Legs.find(leg => leg.Id === legID).Carriers[0];
  const carrierName = dataFlight.Carriers.find(
    carrier => carrier.Id === carrierID
  ).Name;
  return new flightData(
    city,
    minPrice,
    placeName,
    country,
    carrierName,
    departureDate,
    arriveDate
  );
};

export default getFlightData;
