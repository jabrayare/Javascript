'const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');

// console.log(form.children)
// Even key down
// form.addEventListener('keydown', runEvent);

// Even key up
// form.addEventListener('keyup', runEvent);
// Key Press
// form.addEventListener('keypress', runEvent);
// focus
// taskInput.addEventListener('focus', runEvent);
// blur - When you click away the input.
// taskInput.addEventListener('blur', runEvent);
// cut
// taskInput.addEventListener('cut', runEvent);
//paste.
// taskInput.addEventListener('paste', runEvent);
// input - any thing we do with the input.
taskInput.addEventListener('input', runEvent);
taskInput.value = '';

function runEvent(e){
  // heading.textContent = e.target.value;
  console.log(`EVENT TYPE: ${e.type}`);
}
/** 
 
  function runEvent(e){
  e.preventDefault();
  const ul = document.querySelector('ul');
  const newElement = document.createElement('li');
  newElement.className = 'collection-item'
  newElement.appendChild(document.createTextNode(taskInput.value));
  ul.appendChild(newElement)
 
}
*/

/**
 * select event.
 * select.addEventListener('select',runEven);
 * 
  function runEvent(e){
  e.preventDefault();
  e.target.value; - This will give you the value you selected.
 * 
 */'