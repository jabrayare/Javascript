let val;

let list = document.querySelector('ul.collection'); 
listItem = document.querySelector('li.collection-item:first-child');
val = list.childNodes;

//Get children element nodes.
val = list.children; // gives us the html collections of all the elements.
console.log(val)
      /*
      1 - Element.
      2 - Attribute.
      3 - Text node.
      8 - comment
      9 - document-itself.
      10 - Doctype.
      */
     val[4].textContent = 'Hello Item One'
     val = list.children[3];

// Last child
     val = list.lastElementChild;
     val = list.lastElementChild.textContent = 'Hey';

     // Count child element;
     val = list.childElementCount;

     //Parent element
     val = list.parentElement;
     val = list.parentNode;

     //parent parent element.
     val = list.parentElement.parentElement;

     // Get Next siblings.
  val = listItem.nextSibling;
  val = listItem.nextElementSibling;

  //Get Previous Sibling.
  val = listItem.previousSibling;
  val = listItem.previousSibling
console.log(val);
