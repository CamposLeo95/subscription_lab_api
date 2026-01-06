import type { UserResponseDTO } from "../../../dtos/users/users.dto.js";
import type { UserRepositoryInterface } from "../../../repositories/users/user.repository.js";

const fakeDB: UserResponseDTO[] = [
	{
		id: "1",
		name: "John Doe",
		email: "john.doe@example.com",
		createdAt: "2024-01-01T00:00:00Z",
	},
];

export class UserRepository implements UserRepositoryInterface {
	async findAll(): Promise<UserResponseDTO[]> {
		return fakeDB;
	}
}
