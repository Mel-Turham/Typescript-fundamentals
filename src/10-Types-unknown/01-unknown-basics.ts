let unknownValue: unknown;

unknownValue = 'Hello world';
unknownValue = [1, 2, 3, 45];
unknownValue = 42.45;

// unknownValue.toFixed(2)

if (typeof unknownValue === 'number') {
	unknownValue.toFixed(3);
}

function runSomeCode() {
	const random = Math.random();
	console.log(random);
	if (random < 0.5) {
		throw new Error('There was an error ');
	} else {
		throw 'some error...';
	}
}

try {
	runSomeCode();
} catch (error) {
	if (error instanceof Error) {
		console.log(error.message);
	}
	console.log(error);
}
