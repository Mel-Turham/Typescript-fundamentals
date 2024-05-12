enum UserRole {
	Admin,
	Manager,
	Employee,
}

type Users = {
	id: number;
	name: string;
	role: UserRole;
	contact: [email: string, phone: string];
};

function createUserEnum(user: Users): Users {
	return user;
}
const resultsUser: Users = createUserEnum({
	id: 1,
	name: 'John Doe',
	role: UserRole.Admin,
	contact: ['johnDoe@gmail.com', '+237699833117'],
});

console.log(resultsUser);
