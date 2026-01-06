import type { FastifyReply, FastifyRequest } from "fastify";
import { StatusCodes } from "http-status-codes";
import type { UserService } from "../../services/users/user.service";

export class UserController {
	constructor(private userService: UserService) {}

	async getAllUsers(_request: FastifyRequest, reply: FastifyReply) {
		const users = await this.userService.getAllUsers();
		return reply.status(StatusCodes.OK).send(users);
	}
}
