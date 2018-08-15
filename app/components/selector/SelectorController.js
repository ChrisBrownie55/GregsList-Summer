const categories = {
  cars: document.getElementById('car-form'),
  houses: document.getElementById('house-form'),
  jobs: document.getElementById('job-form')
};

export default class SelectorController {
  constructor() {
    this.initialDelay = true;
  }

  selectCategory(event, category) {
    const categoryForm = categories[category];
    if (!categoryForm) {
      return;
    }

    document
      .querySelectorAll('form.active')
      .forEach(form => form.classList.remove('active'));
    document.getElementById('item-list').innerHTML = '';
    setTimeout(
      () => categoryForm.classList.add('active'),
      this.initialDelay ? 250 : 0
    );
    this.initialDelay = false;

    event.target.parentNode
      .querySelectorAll('.active')
      .forEach(link => link.classList.remove('active'));
    event.target.classList.add('active');
  }
}
