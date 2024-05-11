function processInput(input: string | number): string | number {
	if (typeof input === 'number') {
		return input * 2;
	} else {
		return input.toUpperCase();
	}
}

const numberValue = processInput(4);
console.log(numberValue);
const stringValue = processInput('Hello, typeScript');

console.log(stringValue);


