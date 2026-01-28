import { UserService } from "../../../services/users/user.service";
import {
	clearUsers,
	UserRepositoryInMemory,
} from "../../repositories/user/user.repositoryInMemory";

const repositoryInMemory = new UserRepositoryInMemory();
const userService = new UserService(repositoryInMemory);

describe("UserService", () => {
	beforeEach(() => {
		clearUsers();
	});

	describe("getAllUsers", () => {
		it("should return 0 users", async () => {
			const users = await userService.getAllUsers();
			expect(users).toHaveLength(0);
		});
	});

	describe("create", () => {
		it("should create a new user", async () => {
			const requestData = {
				name: "John Doe",
				email: "john@gmail.com",
			};
			const newUser = await userService.create(requestData);
			const users = await userService.getAllUsers();
			expect(users).toHaveLength(1);
			expect(newUser).toHaveProperty("id");
		});

		it("should throw an error when missing name or email", async () => {
			const requestData = [
				{},
				{ name: "John Doe" },
				{ email: "john@gmail.com" },
			];

			for (const data of requestData) {
				await expect(userService.create(data as any)).rejects.toThrow();
			}
		});
	});

	describe("delete", () => {
		it("should delete a user", async () => {
			const requestData = {
				name: "John Doe",
				email: "john@gmail.com",
			};
			const newUser = await userService.create(requestData);
			const users = await userService.getAllUsers();
			expect(users).toHaveLength(1);

			await userService.delete(newUser.id);
			const usersAfterDelete = await userService.getAllUsers();
			expect(usersAfterDelete).toHaveLength(0);
		});
	});
});
