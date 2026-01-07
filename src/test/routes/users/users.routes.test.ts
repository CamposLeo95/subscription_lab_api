import { StatusCodes } from "http-status-codes";
import request from "supertest";
import { buildApp } from "../../../server";

const PORT = 4000;

describe("/Users", () => {
	it("Should return statusCode 200 when success", async () => {
		const appInstance = await buildApp(PORT);
		await appInstance.ready();
		const response = await request(appInstance.server).get("/users");
		expect(response.status).toBe(StatusCodes.OK);
		for (const user of response.body) {
			expect(user).toHaveProperty("id");
		}
	});
});
