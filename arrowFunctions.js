// one line function.
const sayHello = () => console.log('Hellooooo!');
// one line return function.
const oneLineHello = () => 'One line returns function';
sayHello();
console.log(oneLineHello());

// return object.
const oneLineOBJ = () => ({msg: 'obj message'});
console.log(oneLineOBJ());

// single line parameter does not need ().
const Greet = name => console.log(`Hello ${name}`);
Greet('Jibril');

// more than 0ne parameter needs ().
const greetingWithFullName = (firstName,lastName) => console.log(`Hello ${firstName}, ${lastName}`);
greetingWithFullName('Jibril','Mohamed');

// maping arrays getting length of each element.
const users = ['Jibril' , 'Ali', 'Farah'];
const nameLength = users.map((name) =>{
  return name.length;
})
// shorter aproach.
const nameLength2 = users.map(name => name.length);
console.log(nameLength2);