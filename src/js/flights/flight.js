import getPlace from './places';
import flightData from './flightData';

const getFlight = async (placeID, departureDate) => {
  return await fetch(
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
  const moment = require('moment');
  let departureDate = moment()
    .add(1, 'day')
    .format()
    .substr(0, 10);
  let minPrice;
  let placeID;
  let placeName;
  let country;
  let carrierID;
  let carrierName;

  await getPlace(city).then(data => {
    placeID = data.Places[0].PlaceId;
    placeName = data.Places[0].PlaceName;
    country = data.Places[0].CountryName;
  });
  await getFlight(placeID, departureDate).then(data => {
    minPrice = data.Quotes[0].MinPrice;
    carrierID = data.Quotes[0].OutboundLeg.CarrierIds[0];
    carrierName = data.Carriers.find(carrier => carrier.CarrierId === carrierID)
      .Name;
    departureDate = data.Quotes[0].OutboundLeg.DepartureDate;
  });

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
