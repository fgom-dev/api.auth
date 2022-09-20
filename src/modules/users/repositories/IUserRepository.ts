export type UserOut = {
	id: string
	email: string
	first_name: string
	last_name: string
	status: string
	created_at: Date
	updated_at: Date
}

export type CreateUser = {
	email: string
	firstName: string
	lastName: string
	password: string
}

export interface IUserRepository {
	insert(user: CreateUser): Promise<UserOut>
}