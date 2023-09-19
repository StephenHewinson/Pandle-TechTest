import { Job } from "@monorepo/api";
import { inject, injectable } from "inversify";
import { JobDAO } from "../dao/jobDAO.js";
import { TYPES } from "../types.js";

@injectable()
export class JobServiceImpl implements JobService {

  constructor(@inject(TYPES.JobDAO) private jobDAO: JobDAO) {}

  getJobs(size?: number, skip?: number): Promise<Job[]> {
    return this.jobDAO.getJobs(size, skip);
  }
  getJob(id: number): Promise<Job | null> {
    return this.jobDAO.getJob(id);
  }
}

export interface JobService {
  getJobs(size?: number, skip?: number): Promise<Job[]>;
  getJob(id: number): Promise<Job | null>;
}