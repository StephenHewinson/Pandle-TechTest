import "reflect-metadata";
import Fastify from "fastify";
import cors from '@fastify/cors';

import { container } from "./container.js";
import { Route } from "./routes/types.js";
import { TYPES } from "./types.js";


const setup = async () => {
  const server = Fastify({ logger: true});

  const start = async () => {
    try {
      server.register(cors, { origin: true })

      // Register the routes
      await Promise.all(
        container.getAll<Route>(TYPES.Routes)
          .map((route) => server.register((inst, opts) => route.plugin(inst, opts)))
      )

      const parsedPort = parseInt(process.env.port ?? '4001', 10);
      const port = Number.isNaN(parsedPort) ? 4001 : parsedPort;
      await server.listen({ port, host: '0.0.0.0' });
    } catch (e) {
      server.log.error(e);
      process.exit(1);
    }
  }

  return {
    start
  }
}

export { setup };