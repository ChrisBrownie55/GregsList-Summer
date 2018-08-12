import CarService from './CarService.js';
import ListCard from '../ListCard.js';

let carService = new CarService();

function drawCars() {
  const cars = carService.cars;
  document.getElementById('item-list').innerHTML = `
    <h1 class='w-100 font-weight-normal text-center'>Cars</h1>
    ${cars
      .map(car =>
        ListCard(
          [
            ['Make', car.make],
            ['Model', car.make],
            ['Year', car.year],
            ['Price', '$' + car.price],
            ['Color', car.color]
          ],
          car.imgUrl
        )
      )
      .join('')}
  `;
}

export default class CarController {
  constructor() {}

  setActive() {
    document.getElementById('car-form').classList.add('active');
  }

  showCars() {
    document.getElementById('car-form').classList.remove('active');
    drawCars();
  }

  addCar(triggeredEvent) {
    triggeredEvent.preventDefault();
    const form = triggeredEvent.target;
    carService.addCar(new FormData(form));
    form.classList.remove('active');
    form.reset();
    drawCars();
  }
}
