class flightData {
  constructor(
    city,
    minPrice,
    placeName,
    country,
    carrierName,
    departureDate,
    arriveDate
  ) {
    this.city = city;
    this.price = minPrice;
    this.placeName = placeName;
    this.country = country;
    this.carrierName = carrierName;
    this.departureDate = departureDate;
    this.arriveDate = arriveDate;
  }
}
export default flightData;
