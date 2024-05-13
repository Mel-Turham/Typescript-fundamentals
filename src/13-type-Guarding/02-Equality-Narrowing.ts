type Dog = { type: 'dog'; name: string; bark: () => void };
type Cat = { type: 'cat'; name: string; meow: () => void };

type Animal = Dog | Cat;

// function makeSound(animal: Animal) {
// 	if (animal.type === 'dog') {
// 		animal.bark();
// 	}else{
//     animal.meow()
//   }
// }


// function makeSound(animal:Animal){
//   if('bark' in animal){
//     animal.bark()
//   }else{
//     animal.meow()
//   }
// }


