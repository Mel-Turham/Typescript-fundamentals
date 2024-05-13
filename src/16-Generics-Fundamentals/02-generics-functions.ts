function genericFunc<T>(arg: T): T {
	return arg;
}

const someStringValue = genericFunc<string>('Hello world');
const someNumberValue = genericFunc<number>(3);

interface GenericInterface<T> {
	value: T;
	getValue: () => T;
}

const genericString: GenericInterface<string> = {
	value: 'Hello World',
	getValue() {
		return this.value;
	},
};

async function someFunc(): Promise<string> {
	return 'Hello world';
}

// challenge

function generateStringArray(length: number, value: string): string[] {
	let result: string[] = [];
	result = Array(length).fill(value);

	return result;
}

const result = generateStringArray(4, 'Hello');
console.log(result);

function createArray<T>(length: number, value: T): Array<T> {
	let result: T[] = [];
	result = Array(length).fill(value);
	return result;
}

let arrayStrings = createArray<string>(20, 'TypeScript');

let arrayNumbers = createArray<number>(30, 0o6);
console.log(arrayNumbers);
console.log(arrayStrings);

// multiple types

function pair<T, U>(param1: T, param2: U): [T, U] {
	return [param1, param2];
}

let checkResult = pair<number, string>(8, 'Hello form string generic');

// other alternative

function processValue<T extends string | number>(value: T): T {
	console.log(value);
	return value;
}

processValue('Hello');
processValue(3);

