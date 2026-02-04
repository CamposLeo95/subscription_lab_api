import type { FastifyReply, FastifyRequest } from "fastify";
import { StatusCodes } from "http-status-codes";
import { AppError } from "../../errors/AppError";
import type { UserService } from "../../services/users/user.service";

export class UserController {
	constructor(private userService: UserService) {}

	async getAllUsers(_request: FastifyRequest, reply: FastifyReply) {
		const users = await this.userService.getAllUsers();
		return reply.status(StatusCodes.OK).send(users);
	}

	async createUser(request: FastifyRequest, reply: FastifyReply) {
		try {
			const { name, email } = request.body as { name: string; email: string };
			const newUser = await this.userService.create({ name, email });
			return reply.status(StatusCodes.CREATED).send(newUser);
		} catch (error) {
			if (error instanceof AppError) {
				return reply.status(error.statusCode).send({
					code: error.code,
					message: error.message,
					details: error.details,
				});
			}
			return reply
				.status(StatusCodes.INTERNAL_SERVER_ERROR)
				.send({ message: "Internal Server Error" });
		}
	}

	async deleteUser(request: FastifyRequest, reply: FastifyReply) {
		try {
			const { id } = request.params as { id: string };
			await this.userService.delete(Number(id));
			return reply.status(StatusCodes.NO_CONTENT).send();
		} catch (error) {
			if (error instanceof AppError) {
				return reply.status(error.statusCode).send({
					code: error.code,
					message: error.message,
					details: error.details,
				});
			}
			return reply
				.status(StatusCodes.INTERNAL_SERVER_ERROR)
				.send({ message: "Internal Server Error" });
		}
	}
}
