const arr = [12,323,45,43];
const arr2 = new Array(12,423,4343,5423);

arr.push(23);
// console.log(arr);
// console.log(arr2.length);

// console.log(Array.isArray(arr));

// console.log(arr2[2]);

// Get array length;
console.log("The length of the array is: "+arr.length)
// check if is array.
console.log(Array.isArray(arr))
// Get single array.
console.log(arr[2]);
// insert into array.

// find index value.

console.log("Index of 45 is: "+arr.indexOf(45));

// MUTATING INTO ARRAYS.

//add to the end
arr.push(43);

//add to the front.
arr.unshift(78);

//Take off from end.
arr.pop();

//Take of from front.
arr.shift();

//splice values.The first parameter takes the index and and the second parameter takes up how many elements you want to remove from the array.
console.log(arr);
arr.splice(3,2)

// Reverse array.
arr.reverse();

//Concat arrays.
let merged = arr.concat(arr2)
console.log(merged)

//sort array numbers.
// accending order.
let sorted = merged.sort(function(x,y){
  return x - y;
})

//sort array numbers.
// accending order.
merged.sort(function(x,y){
  return y - x;
})


console.log(arr)