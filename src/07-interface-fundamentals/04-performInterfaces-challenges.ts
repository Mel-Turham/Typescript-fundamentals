function getEmployee(): Person | DogOwner | ManagerInterface {
	const random = Math.random();

	if (random < 0.33) {
		return {
			name: 'john',
		};
	} else if (random < 0.66) {
		return {
			name: 'Sarah',
			dogName: 'max',
		};
	} else {
		return {
			name: 'bob',
			managePeople() {
				console.log('Managing people...');
			},
			delegateTask() {
				console.log('Delegate Task...');
			},
		};
	}
}

interface Person {
	name: string;
}

interface DogOwner extends Person {
	dogName: string;
}

interface ManagerInterface extends Person {
	managePeople(): void;
	delegateTask(): void;
}

const employer: Person | DogOwner | ManagerInterface = getEmployee();

// console.log(employer);

function isManager(
	obj: Person | DogOwner | ManagerInterface,
): obj is ManagerInterface {
	return 'managePeople' in obj;
}

if (isManager(employer)) {
	employer.delegateTask(); 
}
