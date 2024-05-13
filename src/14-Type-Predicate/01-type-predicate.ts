// type predicate is a function whose return type is a special kind of type that can be used to narrow down types within conditional block

type Student = {
	name: string;
	study: () => void;
};

type User = {
	name: string;
	login: () => void;
};

type Person = Student | User;

const randomPerson = (): Person => {
	return Math.random() > 0.5
		? { name: 'john', study: () => console.log('Studying') }
		: { name: 'mary', login: () => console.log('Logging in') };
};

const person = randomPerson();

function isStudent(person: Person): person is Student {
	// return 'study' in person;

	return (person as Student).study !== undefined;
}

if (isStudent(person)) {
	person.study();
} else {
	person.login();
}
