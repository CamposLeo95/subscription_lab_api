import type { UserResponseDTO } from "../../dtos/users/users.dto";

export interface UserRepositoryInterface {
	findAll(): Promise<UserResponseDTO[]>;
}
