export default class House {
  constructor(requestData) {
    this.address = requestData.address;
    this.squareFootage = requestData.squareFootage;
    this.rooms = requestData.rooms;
    this.baths = requestData.baths;
    this.price = requestData.price;
    this.imgUrl = requestData.imgUrl;
  }
}
