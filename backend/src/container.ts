import { Container } from "inversify";
import { TYPES } from "./types.js";
import { HealthRoutes } from "./routes/healthRoute.js";
import { PrismaClient } from "@prisma/client";
import { client } from './utils/setupPrisma.js';

const container = new Container();

// DB
container.bind<PrismaClient>(TYPES.Prisma).toConstantValue(client);

// Routes
container.bind<HealthRoutes>(TYPES.Routes).to(HealthRoutes).inSingletonScope();

export { container }