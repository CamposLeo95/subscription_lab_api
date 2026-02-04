import dotenv from "dotenv";
import { errorHandler } from "./errors/errorHandler";
import { createApp } from "./main";
import { registerRoutes } from "./routes/routes";

dotenv.config({ path: `.env.${process.env.NODE_ENV || "development"}` });

const portProject = 3333;
const PORT = process.env.PORT ? parseInt(process.env.PORT) : portProject;

export async function buildApp(port: number = PORT) {
	const app = createApp();
	await registerRoutes(app);
	app.setErrorHandler(errorHandler);
	app.listen({ port, host: "0.0.0.0" });
	return app;
}

buildApp(PORT);
