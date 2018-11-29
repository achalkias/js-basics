function sayHi() {
  console.log('Well, Hello there');
}

sayHi();

function sayHiWithParameter(name){
  console.log(`Well, Hello there ${name}`);
}

sayHiWithParameter('Tolis');


function addThreeNumbers(a,b,c) {
  return a + b + c;
}

let result = addThreeNumbers(10,20,30);
console.log(result);

function sayHello(firstName, lastName) {
  return `Well, hello ${firstName}, ${lastName}`
}

let greetings = sayHello('Billy','Moore')
console.log(greetings);



//Funtion expression -- assing anonyous (unamed) function to a variable
//console.log(sayGreeting()); //This not working
let sayGreeting = function() {
  return 'Well, Hello There';
}
console.log(sayGreeting()); //This works

//IIFE - Immetiatly Invoked Funtion Epxression - No need for parenthesis
let sayGreeting2 = (function() {
  return 'Hi, how are you';
}());

console.log(sayGreeting2); //No need for parenthesis

let sayGreeting3 = (function(firstName,lastName) { // No parenthesis with parameters
  return `Well hello there ${firstName} ${lastName}`;
}('David','John'));

console.log(sayGreeting3);

//ES6 Funtions
let speakNames = (firstName,secondName) => { // No need for the word function
  return `The names are ${firstName} and ${secondName}`;
}

let speakNames2 = (firstName,secondName) => `The names are ${firstName} and ${secondName}`; //This works

let speakNames3 = firstName => `The name is ${firstName}` //No parameters no need for parenthesis

console.log(speakNames('Jack','Jill'));
console.log(speakNames2('Jack','Jill'));
console.log(speakNames3('Tolis'));
