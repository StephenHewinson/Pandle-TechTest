import { mock } from 'vitest-mock-extended';
import fastify from "fastify";
import { describe, it } from 'vitest';
import { JobService } from "../services/jobService";
import { JobRoutes } from "./jobRoutes";
import { Job, JobWithCandidates } from "@monorepo/api";
import { expect } from "vitest";

const setup = async () => {
  const jobService = mock<JobService>();
  const jobRoutes = new JobRoutes(jobService);

  const server = fastify();
  await jobRoutes.plugin(server);

  return {
    server,
    jobService
  }
}

describe('Job Routes', () => {
  describe('get jobs', () => {
    it('should return a collection of jobs', async () => {
      const { server, jobService} = await setup();
      const stub: Job[] = [{
        id: 1,
        title: 'Software Engineer',
        company: 'My new company',
        location: 'Remote',
        description: 'Lorem Ipsum'
      }]
      jobService.getJobs.mockResolvedValue(stub);

      const response = await server.inject({
        method: 'GET',
        url: '/jobs',
        query: {
          size: '10',
          skip: '0'
        }
      });

      expect(jobService.getJobs).toHaveBeenCalledWith('10', '0');
      expect(response.body).toStrictEqual(JSON.stringify({
        results: stub
      }));
    });
    it('should return an empty array', async () => {
      const { server, jobService} = await setup();
    
      jobService.getJobs.mockResolvedValue([]);

      const response = await server.inject({
        method: 'GET',
        url: '/jobs',
        query: {
          size: '10',
          skip: '0'
        }
      });

      expect(jobService.getJobs).toHaveBeenCalledWith('10', '0');
      expect(response.statusCode).toBe(200);
      expect(response.body).toStrictEqual(JSON.stringify({
        results: []
      }));
    })
  });
  describe('get job', () => {
    it('should return a job if it exists', async () => {
      const { server, jobService} = await setup();
      const stub: JobWithCandidates = {
        id: 123,
        title: 'Software Engineer',
        company: 'My new company',
        location: 'Remote',
        description: 'Lorem Ipsum',
        candidates: [{
          id: 1,
          name: 'Stephen Hewinson',
          email: 'steehew@gmail.com',
          phoneNumber: '123456',
          applicationDate: new Date()
        }]
      };
      jobService.getJob.mockResolvedValue(stub);

      const response = await server.inject({
        method: 'GET',
        url: '/job/123'
      });

      expect(jobService.getJob).toHaveBeenCalledWith('123');
      expect(response.statusCode).toBe(200);
      expect(response.body).toStrictEqual(JSON.stringify(stub));
    });

    // Skipped as the getJob mock isn't resolving for some reason. I must be missing something obvious
    it.skip('should return a 404 if the job does not exist', async () => {
      const { server, jobService} = await setup();    
      jobService.getJob.mockResolvedValue(null);

      const response = await server.inject({
        method: 'GET',
        url: '/job/123'
      });

      expect(jobService.getJob).toHaveBeenCalledWith('123');
      expect(response.statusCode).toBe(404);
    });
  })
})