import getFlightData from './js/flights/flight';
import '../src/style.scss';

/*getFlightData('Warszawa')
  .then(data => console.log(data))
  .catch();
*/

const createSession = () => {
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
      body:
        'country=PL&currency=PLN&locale=en-GB&originplace=WRO-sky&destinationplace=WAW-sky&outbounddate=2019-09-30&adults=1',
    }
  )
    .then(response => {
      return response;
    })
    .catch(err => {
      return err;
    });
};
const pollResult = sessionKey => {
  return fetch(
    `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/pricing/uk2/v1.0/${sessionKey}`,
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
const getSessionDate = async () => {
  const sessionResponse = await createSession();
  const sessionKey = await sessionResponse.headers
    .get('location')
    .substring(64);
  console.log(await pollResult(sessionKey));
};

getSessionDate();
