import House from '../../models/House.js';

const houses = [];

export default class HouseService {
  constructor() {}

  get houses() {
    return JSON.parse(JSON.stringify());
  }

  addCar(formData) {
    houses.push(new House(...Array.from(formData.value())));
  }
}
