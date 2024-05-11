const books = ['1984', 'Brave New World', 'Fahrenheit 451'];

let foundBook;

for (let book of books) {
	if (book === books[0]) {
		foundBook = book;
		break;
	}
}

let prices: number[] = [10, 75, 42, 50];

// prices.push('hello')

// let randomValues:[] = [''] bad not type a variable with empty array

let names = ['peter', 'susan', 3];

let array: (string | boolean)[] = ['apple', 'banana', true];
