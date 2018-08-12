import HouseService from './HouseService.js';
import ListCard from '../ListCard.js';

let houseService = new HouseService();

function drawHouses() {
  const houses = houseService.houses;
  document.getElementById('item-list').innerHTML = `
    <h1 class='w-100 font-weight-normal text-center'>Houses</h1>
    ${houses
      .map(house =>
        ListCard(
          [
            ['Address', house.address],
            ['Square Footage', house.squareFootage],
            ['Rooms', house.rooms],
            ['Baths', house.baths],
            ['Price', '$' + house.price]
          ],
          house.imgUrl
        )
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
