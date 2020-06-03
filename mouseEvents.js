const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

//click//
// clearBtn.addEventListener('click',runEvent);


//Double Click
// clearBtn.addEventListener('dblclick',runEvent);

// Mousedown
clearBtn.addEventListener('mousedown',runEvent);

//Mouse up
clearBtn.addEventListener('mouseup',runEvent);

//mouse enter.
card.addEventListener('mouseenter', runEvent);
//Even handler...

//mouse leave
card.addEventListener('mouseleave', runEvent);
//mouse over
clearBtn.addEventListener('mouseover', runEvent);

//mouse move
card.addEventListener('mousemove', runEvent);
function runEvent(e){
  console.log(`EVENT TYPE:  ${e.type}`);
  heading.textContent = `mouseX: ${e.offsetX} mouseY: ${e.offsetY}`
  document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY},40)`
}
