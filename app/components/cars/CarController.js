import CarService from './CarService.js';

let carService = new CarService();

function drawCars() {
  const cars = carService.cars;
  document.getElementById('item-list').innerHTML = `
    <h1 class='w-100 font-weight-normal text-center'>Cars</h1>
    ${cars
      .map(
        car => `
        <article class='card w-20r'>
          <img
            class="card-img-top h-20r w-100"
            src="${car.imgUrl}"
            alt="image of ${car.make} ${car.model} ${car.year}"
          />
          <ul class='list-item list-item-flush'>
            <li class='list-group-item'>
              <p>Make:</p>
              <p>${car.make}</p>
            </li>
            <li class='list-group-item'>
              <p>Model:</p>
              <p>${car.model}</p>
            </li>
            <li class='list-group-item'>
              <p>Price:</p>
              <p>${car.price}</p>
            </li>
            <li class='list-group-item'>
              <p>Year:</p>
              <p>${car.year}</p>
            </li>
            <li class='list-group-item'>
              <p>Color:</p>
              <p>${car.color}</p>
            </li>
          </ul>
        </article>
      `
      )
      .join('')}`;
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
