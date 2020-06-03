const personal = {
  firstName: "JIbril",
  lastNamae: "Mohamed"
}
//Get specific value.
let value = personal["firstName"];

console.log(value);
console.log("================");
const people = [
  { name: "Mohamed"},
  {name: "Cade"},
  {name: "Hussein"},
  {city: "Columbus"},
  {country: "USA"}
]
for(let i = 0; i < people.length; i++){
  console.log(people[i].name);
  console.log(people[i].city);
}
