const arrayNames: string[] = ['John', 'Fred', 'William', 'Grace', 'Olive'];

function checksName(name: string): boolean {
	return arrayNames.includes(name);
}

let nameToCheck = 'billy';
if (checksName(nameToCheck)) {
	console.log(`${nameToCheck.toUpperCase()} is in the list`);
} else {
	console.log(`${nameToCheck.toUpperCase()} is not in the list`);
}
