const calculatePrice = (price: number, discount?: number): number => {
	return price - (discount || 0);
};

let priceAfterDiscount = calculatePrice(100, 20);

function calculateScore(
	initialScore: number,
	penaltyPoint: number = 0,
): number {
	return initialScore - penaltyPoint;
}

let finalPenalty = calculateScore(100, 20);

let scoreWithoutPenalty = calculateScore(300);

function sum(message: string, ...numbers: number[]): string {
	const doubled = numbers.map((num) => num * 2);
	console.log(doubled);

	let total = numbers.reduce((acc, cur) => {
		return acc + cur;
	}, 0);

	return `${message}${total}`;
}

let results = sum('the total  is :', 1, 2, 3, 4, 5);

console.log(results);
