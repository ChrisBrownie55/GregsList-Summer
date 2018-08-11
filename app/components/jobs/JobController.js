import JobService from './JobService.js';

const jobService = new JobService();

function drawJobs() {
  const jobs = jobService.jobs;
  document.getElementById('item-list').innerHTML = `
    <h1>Jobs</h1>
    ${jobs
      .map(
        job => `
        <article class='card'>
          <ul class='list-item list-item-flush'>
            <li class='list-group-item'>
              <p>Address:</p>
              <p>${job.address}</p>
            </li>
            <li class='list-group-item'>
              <p>Square footages:</p>
              <p>${job.squareFootage}</p>
            </li>
            <li class='list-group-item'>
              <p>Rooms:</p>
              <p>${job.rooms}</p>
            </li>
            <li class='list-group-item'>
              <p>Baths:</p>
              <p>${job.baths}</p>
            </li>
            <li class='list-group-item'>
              <p>Price:</p>
              <p>${job.price}</p>
            </li>
          </ul>
        </article>
      `
      )
      .join('')}`;
}

export default class JobController {
  constructor() {}

  setActive() {
    document.getElementById('job-form');
  }

  showJobs() {
    document.getElementById('job-form').classList.remove('active');
    drawJobs();
  }

  addHouse(triggeredEvent) {
    triggeredEvent.preventDefault();
    const form = triggeredEvent.target;
    jobService.addJob(new FormData(form));
    form.classList.remove('active');
    form.reset();
    drawJobs();
  }
}
