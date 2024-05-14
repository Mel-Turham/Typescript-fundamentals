interface IPerson {
	name: string;
	age: number;
	greet(): void;
}

class Person implements IPerson {
	constructor(public name: string, public age: number) {}

	greet(): void {
		console.log(
			`Hello my name is ${this.name} and I'am ${this.age} ${
				this.age > 1 ? 'years' : 'year'
			} old`,
		);
	}
}

const hipster = new Person('Williams', 10);

console.log(hipster.greet());
