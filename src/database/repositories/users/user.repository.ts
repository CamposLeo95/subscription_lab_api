import type {
	CreateUserRequestDTO,
	CreateuserResponseDTO,
	UserResponseDTO,
} from "../../../dtos/users/users.dto";
import { User } from "../../../entities/user.entity";
import type { UserRepositoryInterface } from "../../../repositories/users/user.repository";

const fakeDB: UserResponseDTO[] = [
	{
		id: 1,
		name: "John Doe",
		email: "john.doe@example.com",
		createdAt: "2024-01-01T00:00:00Z",
	},
];

export class UserRepository implements UserRepositoryInterface {
	async findAll(): Promise<UserResponseDTO[]> {
		return fakeDB;
	}

	async create(data: CreateUserRequestDTO): Promise<CreateuserResponseDTO> {
		const newId = fakeDB.length + 1;
		const newUser = new User(newId, data.name, data.email, new Date());
		fakeDB.push({
			id: newUser.getId(),
			name: newUser.getName(),
			email: newUser.getEmail(),
			createdAt: newUser.getCreatedAt().toISOString(),
		});
		return { id: newUser.getId() };
	}
}
