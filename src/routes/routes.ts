import type { FastifyInstance } from "fastify";
import { healthRoutes } from "./health/health.routes";
import { usersRoutes } from "./users/users.routes";

export async function registerRoutes(app: FastifyInstance) {
	await app.register(usersRoutes, { prefix: "/users" });
	await app.register(healthRoutes, { prefix: "/health" });
}
