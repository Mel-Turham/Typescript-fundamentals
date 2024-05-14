class Book {
	// type of this property
	public readonly title: string;
	public author: string;
	// default property below
	private checkedOut: boolean = false;
	constructor(title: string, author: string) {
		this.title = title;
		this.author = author;
	}
	//  access the checkedOut property inside the class only because he have private key
	public checkOut() {
		this.checkedOut = this.toggleCheckedOutStatus();
	}

	public isCheckedOut() {
		return this.checkedOut;
	}

	private toggleCheckedOutStatus() {
		return !this.checkedOut;
	}
}

const deepWort = new Book('Deep work', 'Cal Newport');

// we can access the checkedOut outside we the method checkOut
// deepWort.checkOut();
// console.log(deepWort);

window.addEventListener('click' , ()=>{
  deepWort.checkOut();
  console.log(deepWort.isCheckedOut());
})
