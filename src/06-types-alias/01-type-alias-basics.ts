type User = { id: number; name: string; isActive: boolean };

const john: User = {
	id: 1,
	name: 'John',
	isActive: true,
};
const susan: User = {
	id: 2,
	name: 'Susan',
	isActive: false,
};

function createUser(user: User): User {
	console.log(`Hello there ${user.name.toUpperCase()}`);

	return user;
}

createUser(john);

type StringOrNumber = string | number;

let value: StringOrNumber;

value = 'Hello';
value = 73;

type Theme = 'light' | 'dark';

let theme: Theme;
theme = 'light';
theme = 'dark';
