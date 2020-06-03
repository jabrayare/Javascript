// Dom Munimulations.
let val;
val = document;
val = document.all;
val = document.all[0];
val = document.all.length;
val = document.doctype;
val = document.body;
val = document.URL;
val = document.contentType;
val = document.characterSet;


val = document.forms;
val = document.forms[0];
val = document.forms[0].id;
val = document.forms[0].method;



val = document.links;
val = document.links[0].className;
val = document.links[0].append('Hello ');

let scripts;
scripts = document.scripts;
let scriptArr = Array.from(scripts);
scriptArr.forEach((element) => {
  console.log(element.getAttribute('src'))
});
