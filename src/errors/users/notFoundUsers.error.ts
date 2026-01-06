import createError from "@fastify/error";

const numberNotFound = 404;

export const notFoundUsersError = createError(
	"NOT_FOUND_USERS",
	"Users not found",
	numberNotFound,
);
