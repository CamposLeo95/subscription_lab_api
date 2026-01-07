import type { FastifyInstance } from "fastify";
import { UserController } from "../../controllers/users/users.controller";
import { UserRepository } from "../../database/repositories/users/user.repository";
import { UserService } from "../../services/users/user.service";

const repository = new UserRepository();
const service = new UserService(repository);
const controller = new UserController(service);

export async function usersRoutes(app: FastifyInstance) {
	app.get("/", controller.getAllUsers.bind(controller));
	app.post("/", controller.createUser.bind(controller));
}
