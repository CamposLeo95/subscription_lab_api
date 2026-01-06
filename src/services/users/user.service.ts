import type { UserRepositoryInterface } from "../../repositories/users/user.repository";

export class UserService {
	constructor(private userRepository: UserRepositoryInterface) {}

	async getAllUsers() {
		const users = await this.userRepository.findAll();
		return users;
	}
}
