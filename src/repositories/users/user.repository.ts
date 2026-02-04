import type {
	CreateUserRequestDTO,
	CreateuserResponseDTO,
	UserResponseDTO,
} from "../../dtos/users/users.dto";

export interface UserRepositoryInterface {
	findAll(): Promise<UserResponseDTO[]>;
	findById(id: number): Promise<UserResponseDTO | null>;
	create(data: CreateUserRequestDTO): Promise<CreateuserResponseDTO>;
	delete(id: number): Promise<void>;
}
