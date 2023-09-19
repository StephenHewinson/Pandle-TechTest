import { Container } from "inversify";
import { TYPES } from "./types.js";
import { HealthRoutes } from "./routes/healthRoute.js";
import { PrismaClient } from "@prisma/client";
import { client } from './utils/setupPrisma.js';
import { JobRoutes } from "./routes/jobRoutes.js";
import { JobService, JobServiceImpl } from "./services/jobService.js";
import { JobDAO, JobDAOPrisma } from "./dao/jobDAO.js";

const container = new Container();

// DB
container.bind<PrismaClient>(TYPES.Prisma).toConstantValue(client);

// Routes
container.bind<HealthRoutes>(TYPES.Routes).to(HealthRoutes).inSingletonScope();
container.bind<JobRoutes>(TYPES.Routes).to(JobRoutes).inSingletonScope();

// Services
container.bind<JobService>(TYPES.JobService).to(JobServiceImpl).inSingletonScope();

// DAO
container.bind<JobDAO>(TYPES.JobDAO).to(JobDAOPrisma).inSingletonScope();

export { container }