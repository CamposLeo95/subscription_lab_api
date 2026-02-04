import { StatusCodes } from "http-status-codes";
import type {
	CreateUserRequestDTO,
	CreateuserResponseDTO,
} from "../../dtos/users/users.dto";
import { AppError } from "../../errors/AppError";
import type { UserRepositoryInterface } from "../../repositories/users/user.repository";

export class UserService {
	constructor(private userRepository: UserRepositoryInterface) {}

	async getAllUsers() {
		const users = await this.userRepository.findAll();
		return users;
	}

	async getById(id: number) {
		const user = await this.userRepository.findById(id);
		return user;
	}

	async create(data: CreateUserRequestDTO): Promise<CreateuserResponseDTO> {
		const errors: string[] = [];
		if (!data.name) errors.push("name");
		if (!data.email) errors.push("email");

		if (errors.length > 0) {
			throw new AppError(
				"INVALID_INPUT",
				"Missing required fields",
				StatusCodes.BAD_REQUEST,
				errors,
			);
		}

		const newUser = await this.userRepository.create(data);
		return newUser;
	}

	async delete(id: number): Promise<void> {
		const user = await this.userRepository.findById(id);
		if (!user) {
			throw new AppError(
				"USER_NOT_FOUND",
				"User not found",
				StatusCodes.NOT_FOUND,
			);
		}
		return this.userRepository.delete(id);
	}
}
