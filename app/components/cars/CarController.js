import CarService from './CarService.js';
import ListCard from '../ListCard.js';

let carService = new CarService();

async function drawCars() {
  const itemList = document.getElementById('item-list');
  const refresh = document.querySelector('.refresh');
  if (!refresh) {
    itemList.innerHTML = `
      <h1 class='w-100 font-weight-normal text-center title'>
        Cars
        <button class='refresh active' onclick='app.controllers.cars.showCars()'>
          <i class="fas fa-sync-alt"></i>
        </button>
      </h1>`;
  } else {
    refresh.classList.add('active');
  }

  const cars = await carService.getCars();

  itemList.innerHTML = `
    <h1 class='w-100 font-weight-normal text-center title'>
      Cars
      <button class='refresh' onclick='app.controllers.cars.showCars()'>
        <i class="fas fa-sync-alt"></i>
      </button>
    </h1>
    ${cars
      .map(car =>
        ListCard(
          [
            ['Make', car.make],
            ['Model', car.model],
            ['Year', car.year],
            ['Price', '$' + car.price],
            ['Description', car.description]
          ],
          car.imgUrl,
          [
            {
              onclick: `app.controllers.cars.bid('${car.id}', ${car.price})`,
              className: 'btn btn-success',
              text: 'Bid on car'
            },
            {
              onclick: `app.controllers.cars.deleteCar('${car.id}')`,
              className: 'btn btn-outline-danger',
              text: 'Delete car'
            }
          ]
        )
      )
      .join('')}`;
}

export default class CarController {
  constructor() {}

  setActive() {
    document.getElementById('car-form').classList.add('active');
  }

  async showCars() {
    document.getElementById('car-form').classList.remove('active');
    await drawCars();
  }

  async addCar(event) {
    event.preventDefault();
    const form = event.target;

    form.classList.remove('active');

    await carService.addCar(new FormData(form));
    drawCars();

    form.reset();
  }

  async deleteCar(id) {
    await carService.deleteCar(id);
    drawCars();
  }

  async bid(id, price) {
    ++price;
    await carService.updateCar(id, { price });
    drawCars();
  }
}
