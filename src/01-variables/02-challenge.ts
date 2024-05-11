let someText: string | string[] = 'TypeScript is beautiful';
someText = someText.replace('is', 'so');

console.log(someText);

// that's error because we can't assign the type number to a string type
// someText = 3

let isAdmin: boolean = false;

if (!isAdmin) {
	console.log('You are not the admin');
	// bad not assign others data type inside the isAmin intend the boolean value
	// isAdmin = 'admin'
} else {
	console.log('welcome admin');
}

let price: number = 5;
price += price + 4;
console.log(price);

interface someType {
	id: number;
	lastName: string;
	firstName: string;
	isMarried: boolean;
	city: string;
	age?: number;
}

const someBody: someType = {
	id: 124,
	lastName: 'William',
	firstName: 'Houtchou',
	isMarried: true,
	city: 'united state',
};
