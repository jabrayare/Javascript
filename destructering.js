// Destructuring assignment.
let a,b;
[a,b] = [100,200];
// console.log(a);

//Rest pattern.
[a,b,c,...rest] = [100,200,300,400,500,600];
({a,b, ...rest} = {a:100, b:200, c:300, d: 400, e: 500})

//Array Destructering.
const people = ['Jibril','John','Jamal'];
const [person1,person2,person3] = people;

//Parse array returned by function.
function getPeople(){
  return ['Jibril','Cade','Yare'];
}
let [person5,person6,person7] = getPeople();
console.log(person5,person6,person7);


//Object Destructering.
const Person = {
  name: 'Jabros',
  age: 23,
  city: 'Columbus',
  gender: 'male',
  sayBy: function(){
    console.log('bye bro');
}
}

// Old ES5.
// const name = Person.name,
//       age = Person.age,
//       city = Person.city;
  // NEW ES6.
  const {name,age,city,sayBy} = Person;
  sayBy();
console.log(name,age,city);