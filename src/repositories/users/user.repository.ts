import type { UserResponseDTO } from "../../dtos/users/users.dto.js";

export interface UserRepositoryInterface {
	findAll(): Promise<UserResponseDTO[]>;
}
