import Car from '../../models/Car.js';

const carsAPI = axios.create({
  baseURL: '//localhost:3000/cars', // 'https://bcw-gregslist.herokuapp.com/api/cars/',
  timeout: 3000
});

export default class CarService {
  getCars() {
    return carsAPI
      .get()
      .then(res => res.data.map(carData => new Car(carData)))
      .catch(error => console.error(error));
    // return JSON.parse(JSON.stringify(cars));
  }

  addCar(formData) {
    let formObj = {};
    for (const [key, value] of formData.entries()) {
      formObj[key] = value;
    }

    const newCar = new Car(formObj);

    return carsAPI.post('', newCar).catch(error => console.error(error));
  }

  deleteCar(id) {
    return carsAPI.delete(id).catch(error => console.error(error));
  }

  updateCar(id, update) {
    return carsAPI.put(id, update);
  }
}
