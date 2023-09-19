
import { Job } from "@monorepo/api";
import { PrismaClient } from "@prisma/client";
import { inject, injectable } from "inversify";
import { TYPES } from "src/types";

@injectable()
export class JobDAOPrisma implements JobDAO {

  constructor(@inject(TYPES.Prisma) private client: PrismaClient) {}

  getJobs(size: number = 10, skip: number = 0): Promise<Job[]> {
    return this.client.job.findMany({ take: size, skip})
  }
  getJob(id: number): Promise<Job | null> {
    return this.client.job.findUnique({ where: { id }})
  }
}

export interface JobDAO {
  getJobs(size?: number, skip?: number): Promise<Job[]>;
  getJob(id: number): Promise<Job | null>;
}