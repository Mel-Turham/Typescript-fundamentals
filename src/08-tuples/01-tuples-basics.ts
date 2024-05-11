let user: [string, number] = ['Girls', 23];

let date: readonly [number, number, number] = [13, 17, 2002];

function getPersonName(): [string, number] {
	return ['Jane', 30];
}

let randomPerson = getPersonName();
console.log(randomPerson[1]);
console.log(randomPerson[0]);

const fred: [string, number?] = ['Fred'];

