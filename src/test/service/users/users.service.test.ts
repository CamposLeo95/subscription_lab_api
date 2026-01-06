import { UserService } from "../../../services/users/user.service";
import { UserRepositoryInMemory } from "../../repositories/user/user.repositoryInMemory";

describe("UserService", () => {
	it("should return 0 users", async () => {
		const repositoryInMemory = new UserRepositoryInMemory();
		const userService = new UserService(repositoryInMemory);
		const users = await userService.getAllUsers();
		expect(users).toHaveLength(0);
	});
});
