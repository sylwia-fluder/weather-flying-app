const getPlace = city => {
  return fetch(
    `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/PL/PLN/en-GB/?query=${city}`,
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
      if (!response.ok) throw new Error(`HTTP status code: ${response.status}`);
      return response.json();
    })
    .then(data => {
      if (data.Places.length === 0) throw new Error('City not found');
      return data;
    })
    .catch(err => {
      throw err;
    });
};

export default getPlace;
