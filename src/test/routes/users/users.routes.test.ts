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

	it("should return statusCode 201 and id property when creating a user", async () => {
		const appInstance = await buildApp(PORT);
		await appInstance.ready();

		const requestData = {
			name: "Jane Doe",
			email: "jane.doe@example.com",
		};

		const response = await request(appInstance.server)
			.post("/users")
			.send(requestData);
		expect(response.status).toBe(StatusCodes.CREATED);
		expect(response.body).toHaveProperty("id");
	});
});
