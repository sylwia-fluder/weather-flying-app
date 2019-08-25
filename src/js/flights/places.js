const getPlace = async city => {
  return await fetch(
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
      return response.json();
    })
    .catch(err => {
      return err;
    });
};

export default getPlace;
