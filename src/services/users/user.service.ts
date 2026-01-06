import { notFoundUsersError } from "../../errors/users/notFoundUsers.error.js";
import type { UserRepositoryInterface } from "../../repositories/users/user.repository.js";

export class UserService {
	constructor(private userRepository: UserRepositoryInterface) {}

	async getAllUsers() {
		const users = await this.userRepository.findAll();

		if (!users) {
			throw new notFoundUsersError();
		}

		return users;
	}
}
