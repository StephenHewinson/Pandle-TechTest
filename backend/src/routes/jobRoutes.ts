import { inject, injectable } from "inversify";
import { FastifyInstance } from "fastify";
import { GetJobRouteParams, GetJobsQueryString, GetJobsReply, Job } from "@monorepo/api";
import { Route } from "./types.js";
import { TYPES } from "../types.js";
import { JobService } from "../services/jobService.js";

@injectable()
export class JobRoutes implements Route {

  constructor(@inject(TYPES.JobService) private jobService: JobService) {}

  async plugin(instance: FastifyInstance) {
    instance.get<{
      Reply: GetJobsReply,
      Querystring: GetJobsQueryString
    }>('/jobs', async (req, res) => {
      const { size, skip } = req.query;

      const results = await this.jobService.getJobs(size, skip);

      return res.send({ results })
    })
    instance.get<{
      Reply: Job | null
      Params: GetJobRouteParams
    }>('/job/:jobId', async (req, res) => {
      const { jobId } = req.params;
      const job = await this.jobService.getJob(jobId);

      if (job)
        return res.send(job);

      return res.status(404);
    })
  }
}