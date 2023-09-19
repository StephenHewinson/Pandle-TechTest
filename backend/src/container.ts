import { Container } from "inversify";
import { TYPES } from "./types.js";
import { HealthRoutes } from "./routes/healthRoute.js";

const container = new Container();

// Routes
container.bind<HealthRoutes>(TYPES.Routes).to(HealthRoutes).inSingletonScope();

export { container }