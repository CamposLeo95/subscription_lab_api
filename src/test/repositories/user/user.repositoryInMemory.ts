import type { UserResponseDTO } from "../../../dtos/users/users.dto";
import type { UserRepositoryInterface } from "../../../repositories/users/user.repository";

export class UserRepositoryInMemory implements UserRepositoryInterface {
	private users: UserResponseDTO[] = [];
	async findAll(): Promise<UserResponseDTO[]> {
		return this.users;
	}
}
