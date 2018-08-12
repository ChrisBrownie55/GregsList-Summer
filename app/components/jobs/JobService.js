import Job from '../../models/Job.js';

const jobs = [];

export default class JobService {
  constructor() {}

  get jobs() {
    return JSON.parse(JSON.stringify(jobs));
  }

  addJob(formData) {
    jobs.push(new Job(...Array.from(formData.values())));
  }
}
