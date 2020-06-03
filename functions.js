// Imediately invokable function expressions.

// (function(name){
//   console.log("Hello "+name);
// })("jabra");

// const todo = {
//   add: function(){
//     console.log("Waryaaa");
//   },
//   edit: function(id){
//     console.log(`mxaa rabtaa ${id}`);
//   }
// }

// todo.edit('Jibril');


// LOOPS.
let cars = ["Ford", "Chevy", "Honda", "Toyota", "KIA"];
// For Loop.
// for(let i = 0; i < cars.length; i++){
//   console.log(cars[i]);
// }

// While LOOP.
let i = 0;
// while(i < cars.length){
//   console.log(cars[i]);
//   i++;
// }

//Do while LOOP.

// do{
//   console.log(cars[i]);
//   i++;
// }
// while(i < cars.length)

// FOr each Loop.
cars.forEach(function(car){
  console.log(car);
});
cars.forEach(function(car,index){
  console.log(`${index}: car`)
})
// for of loop.
console.log("+++++=====+++++++")
for(let car of cars){
  console.log(car);
}
// MAP.

const users = [
  {id: 1, name: "John"},
  {id: 4, name: "Sara"},
  {id: 3, name: "Doe"}
];

const ids = users.map(function(user){
  return user.id;
})
console.log(ids)

// For In loop.

const user = {
  firsName: "Jayajay",
  lastName: "kayakea",
  age: 23
};
for(let x in user){
  console.log(`${x}: ${user[x]}`)
}