// document.getElementById();

let element;
element = document.getElementById('task-title');

//Getting things from the element.
element = document.getElementById('task-title').classList;

//Change styling.

element = document.getElementById('task-title').style.background = '#ccc';
element = document.getElementById('task-title').style.color= '#333';
element = document.getElementById('task-title').style.padding = '4px';
// element = document.getElementById('task-title').style.display = 'none';

// Changing contents.

element = document.getElementById('task-title').textContent = 'Hello world';
element = document.getElementById('task-title').innerText = 'Hello';
element = document.getElementById('task-title').innerHTML = 'Hello Yea';
element = document.getElementById('task-title').innerHTML = '<span style ="color:green"> Hello task </task>';
console.log(element);


// document.querySelector.


document.querySelector('li:last-child').style.color ="blue";

document.querySelector('li:nth-child(even)').style.color ="green";
document.querySelector('li:nth-child(3)').style.color ="indigo";

document.querySelector('li:nth-child(4)').style.color ="purple";

document.querySelector('li:first-child').style.color ="red";

// document.getElementByClassName();

const items = document.getElementsByClassName('collection-item');
items[0].style.background = 'blue'

//document.getElementByTagName();
let lis = document.getElementsByTagName('ul')


// convert html collections into arrays.

lis = Array.from(lis);
lis.forEach(element => {
  console.log(element);
});

// document.querySelectorAll();

const item = document.querySelectorAll('ul.collection li.collection-item');
list = Array.from(item)
list.reverse();
list.forEach((element,index) =>{
  element.textContent =  `${index+1}: Hello`
})
console.log(item)
console.log("======");
const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');

liOdd.forEach((element)=>{
  element.style.background = "indigo"
})
liEven.forEach((element)=>{
  element.style.background = "purple"
})