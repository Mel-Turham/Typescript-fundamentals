function createEmployee({ id }: { id: number }): {
	id: number;
	isActive: boolean;
} {
	return {
		id,
		isActive: id % 2 === 0,
	};
}
const first = createEmployee({id:1})
const second= createEmployee({id:2})

console.log(first, second);

// alternative

function createStudent(student: { id: number; name: string }): void {
	console.log(`Welcome to the the course ${student.name.toUpperCase()}`);
}

const newStudent = { id: 4, name: 'William', email:'William@gmail.com' };

console.log(createStudent(newStudent));
// createStudent({id:1, name:'bob', email:'bob@gmail.com'})