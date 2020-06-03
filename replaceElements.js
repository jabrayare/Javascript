//creat elements.

const newHeading = document.createElement('h2');
newHeading.className = 'heading';
newHeading.id = 'task-title';
newHeading.appendChild(document.createTextNode('Task List'))

//Get the old heading.
const oldHeading = document.getElementById('task-title');
const cardAction = document.querySelector('.card-action')
console.log(cardAction);

//Replace the old element with the new element created.
cardAction.replaceChild(newHeading,oldHeading);

document.querySelector('.heading').style.color = 'red';
document.querySelector('.heading').style.fontSize = '20px';

// Remove element.

const li = document.querySelectorAll('li');
const list = document.querySelector('ul');
let arr = Array.from(li);
console.log(arr)
li.forEach((element,index)=>{
  console.log(`${index}: element`);
})
console.log(list);



console.log(oldHeading);
console.log(newHeading)

// Classes and attributes.

//Classes.
const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];
console.log(`first child == ${link}`)
val = link;
val = link.classList;
val = link.className;
val = link.classList[0]
val = link.classList.add('test');
link.classList.remove('test');


// Attributes.

val = link.getAttribute('href');
val = link.setAttribute('href', 'http://Google.com');
val = link.setAttribute('title','Google');
val = link.removeAttribute('title')
console.log(link)