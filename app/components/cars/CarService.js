import Car from '../../models/Car.js';

const cars = [];

export default class CarService {
  getCars() {
    return JSON.parse(JSON.stringify(cars));
  }

  addCar(formData) {
    cars.push(new Car(...Array.from(formData.value())));
    // console.log(cars);
  }
}
