import getPlace from './places';
import flightData from './flightData';

const getFlight = async placeID => {
  return await fetch(
    `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/PL/PLN/en-GB/WRO-sky/${placeID}/2019-09-01?inboundpartialdate=2019-12-01`,
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
  let minPrice;
  let placeID;
  let placeName;
  let country;
  let carrierID;
  let destinationID;

  await getPlace(city).then(data => {
    placeID = data.Places[0].PlaceId;
    placeName = data.Places[0].PlaceName;
    country = data.Places[0].CountryName;
    console.log(placeID);
  });
  await getFlight(placeID).then(data => {
    console.log(data);
    minPrice = data.Quotes[0].MinPrice;
    carrierID = data.Quotes[0].OutboundLeg[0];
  });

  return new flightData(city, minPrice, placeName, country);
};

export default getFlightData;
