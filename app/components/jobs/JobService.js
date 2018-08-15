import Job from '../../models/Job.js';

let jobs = [];
const jobsAPI = axios.create({
  baseURL: 'https://bcw-gregslist.herokuapp.com/api/jobs',
  timeout: 3000
});

export default class JobService {
  constructor() {}

  get jobs() {
    return JSON.parse(JSON.stringify(jobs));
  }

  addJob(formData) {
    jobs.push(new Job(...Array.from(formData.values())));
  }
}
