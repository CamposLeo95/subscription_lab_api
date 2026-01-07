import createError from "@fastify/error";
import { StatusCodes } from "http-status-codes";

export const userNotFoundError = createError(
	"NOT_FOUND_USERS",
	"User(s) not found",
	StatusCodes.NOT_FOUND,
);

export const InvalidInputError = createError(
	"INVALID_INPUT",
	"Invalid input data",
	StatusCodes.BAD_REQUEST,
);
