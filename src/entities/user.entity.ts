export class User {
	constructor(
		private id: number,
		private name: string,
		private email: string,
		private createdAt: Date,
	) {}

	getId(): number {
		return this.id;
	}

	getName(): string {
		return this.name;
	}
	getEmail(): string {
		return this.email;
	}

	getCreatedAt(): Date {
		return this.createdAt;
	}

	setName(name: string): void {
		this.name = name;
	}

	setEmail(email: string): void {
		this.email = email;
	}
}
