// interface Person {
// 	name: string;
// 	getDetails(): string;
// }

// interface DogOwner {
// 	dogName: string;
// 	dogDetails(): string;
// }

// // merge 2 interfaces
// interface Person {
// 	age: number;
// }

// const person: Person = {
// 	name: 'John',
// 	age: 23,
// 	getDetails() {
// 		return `Name:${this.name}, Age:${this.age} `;
// 	},
// };

// console.log(person.getDetails());

// interface SomeEmployee extends Person {
// 	employeeId: number;
// }

// const employee: SomeEmployee = {
// 	name: 'jane',
// 	age: 20,
// 	employeeId: 12,
// 	getDetails() {
// 		return `Name:${this.name}, Age:${this.age},ID: ${this.employeeId}`;
// 	},
// };

// console.log(employee.getDetails());

// interface Managers extends Person, DogOwner {
// 	managerPeople(): void;
// }

// const manager: Managers = {
// 	name: 'Freddy',
// 	age: 20,
// 	dogName: 'Max',
// 	getDetails() {
// 		return `Name: ${this.name}, Age: ${this.age}`;
// 	},

// 	dogDetails() {
// 		return `${this.dogName}`;
// 	},

// 	managerPeople() {
// 		console.log('Managing people...');
// 	},
// };

// console.log(manager.managerPeople());
