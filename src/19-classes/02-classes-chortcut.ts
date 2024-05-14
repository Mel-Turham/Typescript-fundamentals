class Book {
	private checkedOut: boolean = false;
	constructor(
		public readonly title: string,
		public author: string,
		private someValue: number,
	) {}
	// method
	public getSomeValue() {
		return this.someValue;
	}
}

const deepWort = new Book('Deep work', 'Cal Newport', 300);

console.log(deepWort.getSomeValue());
