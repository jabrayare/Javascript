const color = "blue";
switch(color){
  case 'red':
    console.log('color is red');
    break;
  case 'green':
    console.log('color is green');
    break;
  default:
    console.log('color is neither red nor green');
}

let day;

switch(new Date().getDay()){
  case 0:
    day = 'sunday'
    break;
  case 1:
    day = 'Monday'
    break;
  case 2:
    day = 'Tuesday'
    break;
  case 3:
    day = 'Wednesday'
    break;
  case 4:
    day = 'Thurday'
    break;
  case 5:
    day = 'Friday'
    break;
  case 6:
    day = 'Saturday'
    break;
}

console.log(`Today is ${day}`)