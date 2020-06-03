// Create element.

const li = document.createElement('li');
//Add class
li.className = 'collection-item'

// add id.
li.id = 'new-item'

//add attribe
li.setAttribute('title', 'New Item')

// Creat text node and append.
li.appendChild(document.createTextNode('Hello world'));

// Create new link element.
const link = document.createElement('a');
//add a class.

link.className = 'link'
link.setAttribute('href','#');
link.innerHTML = '<i class="fa fa-remove"></i>'
// document.querySelector('ul-collection').appendChild(link);
document.querySelector('ul').appendChild(link);
//append li as a child to ul.
document.querySelector('ul.collection').appendChild(li);


console.log(link);