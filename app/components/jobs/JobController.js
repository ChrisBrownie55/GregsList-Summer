import JobService from './JobService.js';
import ListCard from '../ListCard.js';

const jobService = new JobService();

function drawJobs() {
  const jobs = jobService.jobs;
  document.getElementById('item-list').innerHTML = `
    <h1 class='w-100 font-weight-normal text-center'>Jobs</h1>
    ${jobs
      .map(job =>
        ListCard([
          ['Title', job.title],
          ['Company', job.company],
          ['Location', job.location],
          ['Salary', '$' + job.salary],
          ['Benefits', job.benefits],
          ['Hours', job.hours]
        ])
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

  addJob(triggeredEvent) {
    triggeredEvent.preventDefault();
    const form = triggeredEvent.target;
    jobService.addJob(new FormData(form));
    form.classList.remove('active');
    form.reset();
    drawJobs();
  }
}
