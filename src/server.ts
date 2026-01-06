import { errorHandler } from "./errors/errorHandler";
import { createApp } from "./main";
import { registerRoutes } from "./routes/routes";

const PORT = 3000;

export async function buildApp(port: number = PORT) {
	const app = createApp();

	await registerRoutes(app);
	app.setErrorHandler(errorHandler);

	app.listen({ port, host: "127.0.0.1" });

	return app;
}

buildApp(PORT);
