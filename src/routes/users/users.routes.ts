import type { FastifyInstance } from "fastify";
import { UserController } from "../../controllers/users/users.controller.js";
import { UserRepository } from "../../database/repositories/users/user.repository.js";
import { UserService } from "../../services/users/user.service.js";

export async function usersRoutes(app: FastifyInstance) {
	const repository = new UserRepository();
	const service = new UserService(repository);
	const controller = new UserController(service);

	app.get("/", controller.getAllUsers.bind(controller));
}
