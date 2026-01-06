import type { FastifyError, FastifyReply, FastifyRequest } from "fastify";

export function errorHandler(
	error: FastifyError,
	_request: FastifyRequest,
	reply: FastifyReply,
) {
	const statusCodeInternal = 500;
	const statusCode = error.statusCode ?? statusCodeInternal;

	reply.status(statusCode).send({
		statusCode,
		message: error.message ?? "Internal Server Error",
	});
}
