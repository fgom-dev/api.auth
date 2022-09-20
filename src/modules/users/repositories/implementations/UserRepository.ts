import { PrismaClient, User } from "@prisma/client";
import { CreateUser, IUserRepository, UserOut } from "../IUserRepository";

export class UserRepository implements IUserRepository {
	constructor(private prismaUser: PrismaClient['user']) { }

	async insert(data: CreateUser): Promise<UserOut> {
		const user = await this.prismaUser.create({
			data: {
				email: data.email,
				first_name: data.firstName,
				last_name: data.lastName,
				password: data.password
			},
			select: {
				id: true,
				email: true,
				first_name: true,
				last_name: true,
				status: true,
				created_at: true,
				updated_at: true
			}
		})

		return user
	}
}