import type { FastifyReply, FastifyRequest } from "fastify";
import { StatusCodes } from "http-status-codes";
import type { UserService } from "../../services/users/user.service";

export class UserController {
	constructor(private userService: UserService) {}

	async getAllUsers(_request: FastifyRequest, reply: FastifyReply) {
		const users = await this.userService.getAllUsers();
		return reply.status(StatusCodes.OK).send(users);
	}

	async createUser(request: FastifyRequest, reply: FastifyReply) {
		const { name, email } = request.body as { name: string; email: string };
		if (!name || !email) {
			return reply
				.status(StatusCodes.BAD_REQUEST)
				.send({ message: "Name and email are required" });
		}

		const newUser = await this.userService.create({ name, email });

		return reply.status(StatusCodes.CREATED).send(newUser);
	}
}
