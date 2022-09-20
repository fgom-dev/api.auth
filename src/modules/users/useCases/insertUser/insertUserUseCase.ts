import { CreateUser, IUserRepository } from "../../repositories/IUserRepository";

export class InsertUserUseCase {
	constructor(private userRepository: IUserRepository) { }

	async execute(user: CreateUser) {
		const newUser = await this.userRepository.insert(user)

		return newUser
	}
}