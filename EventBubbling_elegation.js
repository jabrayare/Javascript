// Even Bubling.
document.querySelector('.card-title').addEventListener('click', function(){
  console.log('card-title')
});


// Even delegation.

document.body.addEventListener('click',deleteItem);
let list = document.querySelector('ul');

function deleteItem(e){
  if(e.target.parentElement.classList.contains('delete-item')){
    e.target.parentElement.parentElement.remove();
  }else{
    console.log('not in the list');
  }
}  