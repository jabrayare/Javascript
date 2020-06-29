// MAPS -> key-value pairs - can use ANY type as a key or value.

const map1 = new Map();

//Set Keys.
const key1 = 'Jibril',
      key2 = {},
      key3 = function(){};

// SET map values by key.
map1.set(key1,'value of Key 1');
map1.set(key2,'value of Key 2');
map1.set(key3,'value of Key 3');
// console.log(map1.get(key1));
// console.log(map1.size);


// ITERATING Maps.
//Looping using for...of to get keys and values.
for(let [key,value] of map1){
  console.log(`${key}, ${value}`);
}
//Iterating KEYS only.
for(let key of map1.keys()){
  console.log(key);
}

//Iterating VALUES only.
for(let values of map1.values()){console.log(values);}

//Looping with forEach.
map1.forEach(function(value,key){
  console.log(`${key} = ${value}`);
})
// create an array of key value pairs.
const keyValueArr = Array.from(map1);

// Create an array of values.
const valuesArr = Array.from(map1.values());

// Create an array of Keys.
const keysArr = Array.from(map1.keys());
console.log(keysArr);
