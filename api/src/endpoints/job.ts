import { Job } from "../models"

export type GetJobsReply = {
  results: Job[];
}

export type GetJobsQueryString = {
  size?: number;
  skip?: number;
}

export type GetJobRouteParams = {
  jobId: number;
}