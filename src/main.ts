import Fastify from "fastify";

export function createApp() {
	return Fastify({
		logger: {
			transport: {
				target: "pino-pretty",
			},
		},
	});
}
