let car: { brand: string; year: number } = { brand: 'BMW', year: 2020 };

car.brand = 'Toyota';
// error because color don't have the type in the object car
// car.color='red';

const car1: { brand: string; year: number } = { brand: 'audi', year: 2023 };

let book = { title: 'book', cost: 20 };
let pen = { title: 'pen', cost: 10 };
let notebook = { title: 'notebook' };

let items: { readonly title: string; cost?: number }[] = [book, pen, notebook];
// whit readonly properties we can't change the value inside de variable
// items[0].title ='new book'

