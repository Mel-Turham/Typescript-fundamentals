// Allow to setup the shape for the objects (only objects)

interface Books {
	readonly isbn: number;
	title: string;
	author: string;
	genre?: string;

	// method
	printAuthor(): void;
	printTitle(message: string): string;
	printSomeValue: (someValue: number) => number;
}

const deepWork: Books & { price: number } = {
	isbn: 1234,
	title: 'Deep work',
	author: 'Cal newport',
	// genre: 'self-help',
	price: 390,

	printAuthor() {
		console.log(this.author);
	},

	printTitle(message) {
		return `${this.title} ${message}`;
	},
	// first option
	// printSomeValue: function (someValue) {
	// 	return someValue;
	// },

	// second option

	// printSomeValue: (someValue) => {
	// 	console.log(deepWork.isbn);

	// 	return someValue;
	// },

	// third method

	printSomeValue(someValue) {
		return someValue;
	},
};
deepWork.printAuthor();

const printBook = deepWork.printTitle('Beautiful');
// deepWork.isbn = 'some value'

console.log(printBook);

console.log(deepWork.printSomeValue(4));
