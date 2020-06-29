console.log('Hello world');

const KEY1 = Symbol();
const KEY2 = Symbol('sym2');

const myObj = {};
myObj[KEY1] = 'prob1';
myObj[KEY2] = 'prob2';
myObj.key3 = 'prob3';
myObj.key4 = 'prob4';
console.log(myObj[KEY1]);

// Symbols are not enumerable with for...in
for(let i in myObj){
  console.log(`${i}: ${myObj[i]}`);
}

// Symbols are ignored by json stringfy.
console.log(JSON.stringify({key: 'prob'})); // works
console.log(JSON.stringify({[Symbol('key')]: 'prob'})); //ignored