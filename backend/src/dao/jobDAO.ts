
import { Job, JobWithCandidates } from "@monorepo/api";
import { PrismaClient } from "@prisma/client";
import { inject, injectable } from "inversify";
import { TYPES } from "../types.js";

@injectable()
export class JobDAOPrisma implements JobDAO {

  constructor(@inject(TYPES.Prisma) private client: PrismaClient) {}

  getJobs(size: number = 10, skip: number = 0): Promise<Job[]> {
    return this.client.job.findMany({ take: size, skip});
  }
  getJob(id: number): Promise<JobWithCandidates | null> {
    return this.client.job.findUnique({ where: { id }, include: {
      candidates: true
    }});
  }
}

export interface JobDAO {
  getJobs(size?: number, skip?: number): Promise<Job[]>;
  getJob(id: number): Promise<JobWithCandidates | null>;
}