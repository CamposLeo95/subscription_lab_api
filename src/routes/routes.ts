import type { FastifyInstance } from "fastify";
import { usersRoutes } from "./users/users.routes.js";

export async function registerRoutes(app: FastifyInstance) {
	await app.register(usersRoutes, { prefix: "/users" });
}
