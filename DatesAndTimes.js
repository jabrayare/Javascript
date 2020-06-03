

const today1 = new Date();

const birthDate = new Date('5-31-2020 10:39')
val = birthDate;
// Get Month.
val = birthDate.getMonth();
//Get date.
val = birthDate.getDate();
// get day.
val = birthDate.getDay();
// get hours.
val = birthDate.getHours();
// get minutes.
val = birthDate.getMinutes();
// get second.
val = birthDate.getSeconds();
//get time.
val = birthDate.getTime();

// Change the month;
birthDate.setMonth(11);
// Change the dat.
birthDate.setDate(12);
console.log(birthDate)