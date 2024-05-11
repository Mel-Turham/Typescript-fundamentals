// the any is use to assign all types of data types like function , array, objects , etc...

// bad type not use it 
let notSure: any = 4;
notSure = 'maybe a string instead';
notSure = false;
notSure = [];
notSure = {
	id: 3,
};
notSure = (name: string = 'user') => {
	console.log(`Welcome ${name.toUpperCase()}`);
};

console.log(notSure('Mel'));

