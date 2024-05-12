import newStudents, { sayHello, person } from './action';

console.log(sayHello(newStudents.name), person);

function doubleNumber(...argNumber: number[]): number[] {
	const doubled = argNumber.filter((num) => num % 2 === 0);
	return doubled;
}
console.log(doubleNumber(1, 3, 4, 5, 5, 6, 6));

