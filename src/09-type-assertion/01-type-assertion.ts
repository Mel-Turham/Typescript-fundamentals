// Using type Assertion to treat "someValue as a string"
let someString = 'Some string text';

let strLength: number = (someString as string).length;

type Bird = {
	name: string;
};

let objectBird = { name: 'Food' };
let dogObject = { type: 'bulldog' };

let bird = objectBird as Bird;
// let dog = dogObject as Bird

enum Status {
	Pending = 'Pending',
	Declined = 'declined',
}

type somePerson = {
	name: string;
	status: Status;
};
const statusValue = 'Pending';
const someValues: somePerson = {
	name: 'John',
	status: statusValue as Status,
};
