let val;

//number to string.
// val = 123;
// boolean to string
// val = true;
// Date to string
// val = new Date();
// You can also use toString() Method.
// val = String(val)

// console.log(val);
// console.log(typeof val);
// console.log(val.length)


// String to Numbers.

// val = "534";
// val = Number(val);
// console.log(typeof val);

// console.log(val.toFixed(2))
// console.log("Hello world")


const firstName = "JIbril"
const lastName = "Mohamed"

val = firstName.concat(lastName);
console.log(val)

// Template Literals

const name = "Jibril"
const age = 243;
const city = "Columbus"
const job = "Web development"

let html;
//without using template strings (es5).

// html = '<ul> <li> Name: ' + name +' </li> <li> age: ' + age +' </li><li> job: ' + job +' </li> <li> city: ' + city +' </li></ul>';

document.body.innerHTML = html;

// WIth Template Strings;
 
html = `
  <ul>
  <li>Name: ${name}</li>
  <li>age: ${age}</li>
  <li>job: ${job}</li>
  <li>city: ${city}</li>
  </ul>
`
document.body.innerHTML = html;