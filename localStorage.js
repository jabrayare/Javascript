// Set local storage item.
// localStorage.setItem('name', 'Jabra');
// localStorage.setItem('age', '23');
// localStorage.setItem('Country', 'USA');

// Set session storage item.
// sessionStorage.setItem('name', 'Jibril');

// remove local storage item.
// localStorage.removeItem('name');

// get from the storage.
// const name = localStorage.getItem('name');
// console.log(name);
// localStorage.clear();

document.querySelector('form').addEventListener('submit',function(e){
  
  const task = document.getElementById('task').value;
  let tasks;
  if(localStorage.getItem('item') === null){
    tasks = [];
  }
  else{
    tasks = JSON.parse(localStorage.getItem('item'));
  }
  tasks.push(task);
  localStorage.setItem('item', JSON.stringify(tasks));
  e.preventDefault();

});

const tasks = JSON.parse(localStorage.getItem('item'));
tasks.forEach(element => {
  console.log(element);
});