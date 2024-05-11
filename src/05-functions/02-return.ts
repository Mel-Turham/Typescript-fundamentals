function calculateDiscount(price: number) {
	const hasDiscount = true;

	if (hasDiscount) {
		// in this case we have an error type return because we specify the return of this function is a number not other type only number
		return 'Discount Applied';
	}

	return price * 0.9;
}

const priceFinal = calculateDiscount(200);

function addThree(number: any) {
	let anotherNumber: number = 3;
	return number + anotherNumber;
}

const result = addThree(3);
const someValue = result;

function logMessage(message: string) {
	console.log(message );
}


logMessage('Hello , typeScript' )