import House from '../../models/House.js';

let houses = [];
const houseAPI = axios.create({
  baseURL: 'https://bcw-gregslist.herokuapp.com/api/houses',
  timeout: 3000
});
export default class HouseService {
  constructor() {}

  getHouses() {
    return houseAPI
      .get()
      .then(res => res.data.data.map(houseData => new House(houseData)))
      .catch(error => console.error(error));
  }

  addHouse(formData) {
    houses.push(new House(...Array.from(formData.values())));
  }
}
