function printLength(str: string | null | undefined) {
	if (str) {
		console.log(str.length);
	} else {
		console.log('No string provided');
	}
}

printLength(null);
printLength('typeScript is the best');
printLength(undefined);
