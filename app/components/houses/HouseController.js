import HouseService from './HouseService.js';

let houseService = new HouseService();

function drawHouses() {
  const houses = houseService.houses;
  document.getElementById('item-list').innerHTML = `
    <h1 class='w-100 font-weight-normal text-center'>Houses</h1>
    ${houses
      .map(
        house => `
        <article class='card'>
          <img src="${house.imgUrl}" class='card-img-top'
            alt="image of a house"
          />
          <ul class='list-item list-item-flush'>
            <li class='list-group-item'>
              <p>Address:</p>
              <p>${house.address}</p>
            </li>
            <li class='list-group-item'>
              <p>Square footages:</p>
              <p>${house.squareFootage}</p>
            </li>
            <li class='list-group-item'>
              <p>Rooms:</p>
              <p>${house.rooms}</p>
            </li>
            <li class='list-group-item'>
              <p>Baths:</p>
              <p>${house.baths}</p>
            </li>
            <li class='list-group-item'>
              <p>Price:</p>
              <p>${house.price}</p>
            </li>
          </ul>
        </article>
      `
      )
      .join('')}`;
}

export default class HouseController {
  constructor() {}

  setActive() {
    document.getElementById('house-form');
  }

  showHouses() {
    document.getElementById('house-form').classList.remove('active');
    drawHouses();
  }

  addHouse(triggeredEvent) {
    triggeredEvent.preventDefault();
    const form = triggeredEvent.target;
    houseService.addHouse(new FormData(form));
    form.classList.remove('active');
    form.reset();
    drawHouses();
  }
}
