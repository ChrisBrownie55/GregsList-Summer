export default class Car {
  constructor(requestData) {
    this.make = requestData.make;
    this.model = requestData.model;
    this.year = requestData.year;
    this.price = requestData.price;
    this.description = requestData.description;
    this.imgUrl = requestData.imgUrl;
    this.id = requestData._id;
  }
}
