class Person {
  constructor(firstName,lastName,dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthDate = new Date(dob);
  }
  greeting(){
    return `Hey ${this.firstName}, Welcome to my site`;
  }
  calculateAge(){
    const diff = Date.now() - this.birthDate.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
  static addNumbers(x,y){
    return x + y;
  }
}
const mary = new Person('Mary', 'luu', '11-13-1997');
console.log(mary.greeting());
console.log(mary.calculateAge());
console.log(Person.addNumbers(4,5));

class Person2{
  constructor(firstName,lastName){
    this.firstName = firstName;
    this.lastName = lastName;
  }
  greeting(){
    return `Hello ${this.firstName} ${this.lastName}`;
  }
}

class Customer extends Person2{
  constructor(firstName,lastName,phone,membership){
    super(firstName,lastName); // calls the parent name constructor.
    this.phone = phone;
    this.membership = membership;
  }
  static getMembershipCost(){
    return 500;
  }
}

const john = new Customer('Jibril','Mohamed','614-323-7843','Golden');
console.log(Customer.getMembershipCost());