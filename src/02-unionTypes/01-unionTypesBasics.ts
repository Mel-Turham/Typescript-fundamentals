// the union type is a method that is use to provide many data types the example below👇!
// ide string || number
let tax: number | string = 10;
tax = 400;
tax = '$0394';

// union type allows us to assign multiples types for the same variable

let requestStatus: 'pending' | 'success' | 'error' = 'pending';
requestStatus = 'success';
requestStatus = 'error';
