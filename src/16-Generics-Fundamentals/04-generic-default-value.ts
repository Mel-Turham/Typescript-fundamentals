interface StoreData<T = any> {
	data: T[];
}

const storeNumbers: StoreData<number> = {
	data: [1, 3, 4, 56],
};

const randomStaff: StoreData = {
	data: ['random', 3.5, true, { name: 'John Doe' }],
};
