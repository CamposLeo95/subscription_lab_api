import type {
	CreateUserRequestDTO,
	CreateuserResponseDTO,
} from "../../dtos/users/users.dto";
import { InvalidInputError } from "../../errors/users/notFoundUsers.error";
import type { UserRepositoryInterface } from "../../repositories/users/user.repository";

export class UserService {
	constructor(private userRepository: UserRepositoryInterface) {}

	async getAllUsers() {
		const users = await this.userRepository.findAll();
		return users;
	}

	async create(data: CreateUserRequestDTO): Promise<CreateuserResponseDTO> {
		const errors: string[] = [];
		if (!data.name) errors.push("name");
		if (!data.email) errors.push("email");

		if (errors.length > 0) {
			throw InvalidInputError({
				details: errors,
			});
		}

		const newUser = await this.userRepository.create(data);
		return newUser;
	}

	async delete(id: number): Promise<void> {
		return this.userRepository.delete(id);
	}
}
