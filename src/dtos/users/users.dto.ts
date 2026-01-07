export type UserResponseDTO = {
	id: number;
	name: string;
	email: string;
	createdAt: string;
};

export type CreateUserRequestDTO = {
	name: string;
	email: string;
};

export type CreateuserResponseDTO = {
	id: number;
};
