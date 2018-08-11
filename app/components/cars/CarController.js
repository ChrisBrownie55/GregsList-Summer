import CarService from './CarService.js';

let carService = new CarService();

function drawCars() {
  const cars = carService.cars;
  document.getElementById('item-list').innerHTML = `
    <h1 class='w-100 font-weight-normal text-center'>Cars</h1>
    ${cars
      .map(
        car => `
        <article class='card w-20r mx-2 my-2'>
          <img
            class="card-img-top h-20r w-100 object-fit-cover"
            src="${car.imgUrl}"
            alt="image of ${car.make} ${car.model} ${car.year}"
          />
          <ul class='list-item list-item-flush'>
            <li class='list-group-item'>
              <b>Make:</b>
              <p>${car.make}</p>
            </li>
            <li class='list-group-item'>
              <b>Model:</b>
              <p>${car.model}</p>
            </li>
            <li class='list-group-item'>
              <b>Price:</b>
              <p>${car.price}</p>
            </li>
            <li class='list-group-item'>
              <b>Year:</b>
              <p>${car.year}</p>
            </li>
            <li class='list-group-item'>
              <b>Color:</b>
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
