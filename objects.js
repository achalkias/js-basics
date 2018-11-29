//Object literal
var truck = {
  //Porperties
  make:'Dodge',
  wheels: 4
}; //This is an object


//Bracket notation
console.log(`I have a ${truck['make']} that has ${truck['wheels']} wheels`);

//Dot notation
console.log(`I have ${truck.make} that has ${truck.wheels} wheels`);

//Object literal
var employee = {
  //Properties
  firstName: 'Joe',
  lastName: 'Blow',
  //Method
  fullName: function() {
    return `${this.firstName} ${this.lastName}`;
  }
}; // That is one other Object

//Property
console.log(`Our IT Director is ${employee.firstName}`);
//function
console.log(`His name is ${employee.fullName()}`); //Calling a function dont forget the parenthesis

//Object constructor function
function Vehicle(make,model,year){
  this.make = make;
  this.model = model;
  this.year = year;
  this.getFullDescription = function() {
    return `${this.year} ${this.make} ${this.year}`;
  }
}

//Create a new instance with the new keyword
let myTruck = new Vehicle('Dodje', 'Ram 1500','2011');
let myWifesCar = new Vehicle('Dogje','Charger R/T','2015');
let myDaugtersCar = new Vehicle('Nissan','Rogue','2014');

console.log(myTruck.year, myTruck.make, myTruck.model);
console.log(myDaugtersCar.getFullDescription());

//Second way
// function createVehicle(make, model, year) {
//   return {
//     make: make,
//     model: model,
//     year: year,
//     getFullDescription: function() {
//       return `${year} ${make} ${year}`;
//     }
//   }
// }

//ES6 Enhached Object Literal Syntax
function createVehicle(make, model, year) {
  return {
    make,
    model,
    year,
    getFullDescription() {
      return `${year} ${make} ${year}`;
    }
  }
}

let myTruck2 = createVehicle('Dodje', 'Ram 1500','2011');
console.log(myTruck2.getFullDescription());
