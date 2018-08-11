import CarController from './app/components/cars/CarController.js';
import HouseController from './app/components/houses/HouseController.js';
import JobController from './app/components/jobs/JobController.js';
import SelectorController from './app/components/selector/SelectorController.js';
export default class App {
  constructor() {
    this.controllers = {
      cars: new CarController(),
      houses: new HouseController(),
      jobs: new JobController(),
      selector: new SelectorController()
    };
  }
}

window.app = new App();

const hideCategoryText = () => (
  navigation.children[0].classList.add('hidden'),
  navigation.children[1].classList.add('hidden'),
  navigation
    .querySelectorAll('.btn-link')
    .forEach(btn => btn.removeEventListener('click', hideCategoryText))
);
navigation
  .querySelectorAll('.btn-link')
  .forEach(btn => btn.addEventListener('click', hideCategoryText));
