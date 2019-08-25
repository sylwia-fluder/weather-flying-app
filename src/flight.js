const getFlight = () => {
    fetch("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/PL/PLN/en-US/WAW-sky/SFO-sky/2019-09-01?inboundpartialdate=2019-12-01",
        {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
            "x-rapidapi-key": "f76b9a08c6msh4342c2bb7ef2877p1c960ajsn0922b19cbacf"
    }
}).then(response => {
	console.log(response);
});
}
export default getFlight;