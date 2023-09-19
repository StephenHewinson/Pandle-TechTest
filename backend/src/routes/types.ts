import { FastifyInstance, FastifyPluginOptions } from "fastify";

export interface Route {
  plugin(instance: FastifyInstance, opts: FastifyPluginOptions): Promise<void>;
}