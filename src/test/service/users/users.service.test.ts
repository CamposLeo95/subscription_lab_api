import { UserService } from "../../../services/users/user.service";
import { UserRepositoryInMemory } from "../../repositories/user/user.repositoryInMemory";

const repositoryInMemory = new UserRepositoryInMemory();
const userService = new UserService(repositoryInMemory);
describe("UserService", () => {
	beforeEach(() => {
		(repositoryInMemory as any).users = [];
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
});
