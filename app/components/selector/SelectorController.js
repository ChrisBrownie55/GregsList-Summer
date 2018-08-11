const categories = {
  cars: document.getElementById('car-form'),
  houses: document.getElementById('house-form'),
  jobs: document.getElementById('job-form')
};

export default class SelectorController {
  constructor() {}

  selectCategory(category) {
    const categoryForm = categories[category];
    if (!categoryForm) {
      return;
    }

    document
      .querySelectorAll('form.active')
      .forEach(form => form.classList.remove('active'));
    document.getElementById('item-list').innerHTML = '';
    categoryForm.classList.add('active');

    window.app.controllers[category].setActive();
  }
}
