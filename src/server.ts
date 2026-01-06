import { app } from "./main.js";

const portNumber: number = 3000;
const PORT: number = Number(process.env.PORT) || portNumber;

app.listen({ port: PORT }, (err) => {
	console.log(`Server listening at ${PORT}`);
	if (err) {
		console.error(err);
		process.exit(1);
	}
});
