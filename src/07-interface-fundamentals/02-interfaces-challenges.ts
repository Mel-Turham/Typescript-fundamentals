interface Computer {
	readonly id: number;
	brand: string;
	ram: number;
	storage?: number;
	upgradeRam(increase: number): number;
}

const desktop: Computer = {
	id: 1234,
	brand: 'Dell',
	ram: 16,
	upgradeRam(amount) {
		this.ram += amount;
		return this.ram;
	},
};
desktop.storage = 256;
console.log(desktop.upgradeRam(16));
console.log(desktop);
