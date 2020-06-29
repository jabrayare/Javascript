// SETS -> stores unique values of any type.
const set1 = new Set();

//add values to set.
set1.add(100);
set1.add('A string value');
set1.add({name: 'Jibril'});
set1.add(true)

set2 = new Set([100,true,'A string value']);
// console.log(set1);

// get size
// console.log(set1.size);

// check for a value.
// console.log(set1.has(100));
// console.log(set1.has({name: 'Jibril'}));

// Delete from set.
set1.delete(100);

// ITERATE Through set.
// for...of
//set1.enteries() -> gives you the values in array.
for(let item of set1){
  console.log(item);
}
//forEach Loop.
set1.forEach((values)=>{
  console.log(values);
})

//change sets to arrays.
const listArr = Array.from(set1);
console.log(listArr);
// console.log(set1);