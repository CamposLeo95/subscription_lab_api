import { errorHandler } from "./errors/errorHandler.js";
import { createApp } from "./main.js";
import { registerRoutes } from "./routes/routes.js";

async function startServer() {
	const app = createApp();

	await registerRoutes(app);
	await app.setErrorHandler(errorHandler);

	await app.listen({ port: 3000, host: "127.0.0.1" });
}

startServer();
