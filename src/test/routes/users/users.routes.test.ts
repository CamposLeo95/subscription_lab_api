import type { FastifyInstance } from "fastify";
import { StatusCodes } from "http-status-codes";
import request from "supertest";
import { buildApp } from "../../../server";

let appInstance: FastifyInstance;
const PORT = 4000;

describe("/Users", () => {
	beforeAll(async () => {
		appInstance = await buildApp(PORT);
		await appInstance.ready();
	});

	afterAll(async () => {
		await appInstance.close();
	});

	it("Should return statusCode 200 when success", async () => {
		const response = await request(appInstance.server).get("/users");
		expect(response.status).toBe(StatusCodes.OK);
		for (const user of response.body) {
			expect(user).toHaveProperty("id");
		}
	});

	it("should return statusCode 201 and id property when creating a user", async () => {
		const requestData = {
			name: "john Doe",
			email: "john.doe@example.com",
		};
		const response = await request(appInstance.server)
			.post("/users")
			.send(requestData);
		expect(response.status).toBe(StatusCodes.CREATED);
		expect(response.body).toHaveProperty("id");
	});

	it("should return statusCode 400 when creating a user with missing fields", async () => {
		const requestDataArray = [
			{ name: "john Doe" },
			{ email: "john.doe@example.com" },
			{},
		];
		for (const requestData of requestDataArray) {
			const response = await request(appInstance.server)
				.post("/users")
				.send(requestData);
			expect(response.status).toBe(StatusCodes.BAD_REQUEST);
		}
	});

	it("should return the corretect field details when creating a user with missing fields", async () => {
		const requestData = { name: "john Doe" };
		const response = await request(appInstance.server)
			.post("/users")
			.send(requestData);
		expect(response.status).toBe(StatusCodes.BAD_REQUEST);
		expect(response.body).toHaveProperty("details");
		expect(response.body.details).toContain("email");
	});

	it("should return statusCode 204 when delete a user", async () => {
		const createResponse = await request(appInstance.server)
			.post("/users")
			.send({
				name: "john Doe",
				email: "john.doe@example.com",
			});
		const deleteResponse = await request(appInstance.server).delete(
			`/users/${createResponse.body.id}`,
		);
		expect(deleteResponse.status).toBe(StatusCodes.NO_CONTENT);
	});

	it("should return status code 404 when deleting a non-existing user", async () => {
		const response = await request(appInstance.server).delete("/users/9999");
		expect(response.status).toBe(StatusCodes.NOT_FOUND);
	});
});
