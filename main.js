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
