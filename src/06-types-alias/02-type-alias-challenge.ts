type Employee = {
	id: number;
	name: string;
	department: string;
};

type Manager = {
	id: number;
	name: string;
	employees: Employee[];
};

type Staff = Employee | Manager;

function printStaffDetails(staff: Staff): void {
	if ('employees' in staff) {
		console.log(`${staff.name} in an manager in the employees`);
	} else {
		console.log(
			`${staff.name} in an employees in the ${staff.department} department`,
		);
	}
}

const alice: Employee = { id: 1, name: 'alice', department: 'Sales' };
const julie: Employee = { id: 2, name: 'julie', department: 'HR' };
const bob: Manager = { id: 1, name: 'bob', employees: [alice, julie] };

const printResults = printStaffDetails(bob);
console.log(printResults);

type Book = {
	id: number;
	name: string;
	price: number;
};

const book1: Book = {
	id: 1,
	name: 'JavaScript Mastery',
	price: 300,
};

const book2: Book = {
	id: 2,
	name: 'Mastery React and Next',
	price: 200,
};

const discountBook: Book & { discount: number } = {
	id: 3,
	name: 'Poor man',
	price: 400,
	discount: 0.15,
};
