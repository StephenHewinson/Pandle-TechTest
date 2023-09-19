import { injectable } from "inversify";
import { FastifyInstance } from "fastify";
import { Route } from "./types";

@injectable()
export class HealthRoutes implements Route {
  async plugin(instance: FastifyInstance) {
    instance.get('/', (_, res) => {
      res.send();
    })
    instance.get('/health', (_, res) => {
      res.send();
    })
  }
}