import getPlace from './places';
import flightData from './flightData';

const getFlight = async (placeID, departureDate) => {
  return await fetch(
    `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsedates/v1.0/PL/PLN/en-US/WRO-sky/${placeID}/${departureDate}?inboundpartialdate=2019-12-01`,
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
  let departureDate = '2019-09-01';
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
    departureDate = data.Quotes[0].QuoteDateTime;
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
