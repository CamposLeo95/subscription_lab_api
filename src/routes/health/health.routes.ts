import type { FastifyInstance } from "fastify";
import { HealthController } from "../../controllers/health/health.controller";

const healthController = new HealthController();
export async function healthRoutes(app: FastifyInstance) {
	app.get("/", healthController.checkHelth.bind(healthController));
}
