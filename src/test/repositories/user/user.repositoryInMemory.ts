import type {
	CreateUserRequestDTO,
	CreateuserResponseDTO,
	UserResponseDTO,
} from "../../../dtos/users/users.dto";
import { User } from "../../../entities/user.entity";
import type { UserRepositoryInterface } from "../../../repositories/users/user.repository";

const users: UserResponseDTO[] = [];

export class UserRepositoryInMemory implements UserRepositoryInterface {
	async findAll(): Promise<UserResponseDTO[]> {
		return users;
	}

	async create(data: CreateUserRequestDTO): Promise<CreateuserResponseDTO> {
		const id = users.length + 1;
		const newUser = new User(id, data.name, data.email, new Date());

		users.push({
			id: newUser.getId(),
			name: newUser.getName(),
			email: newUser.getEmail(),
			createdAt: newUser.getCreatedAt().toISOString(),
		});

		return { id: newUser.getId() };
	}
}
