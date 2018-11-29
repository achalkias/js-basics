let a = 9;
let b = 32;

if (a > b){ //false
  console.log('a is greater than b');
} else if (a === b){ //false
  console.log('a is equal to b');
} else { //Catch
    console.log('a is less than b');
}

//Anything that retuns a boolean value can be the contidion
if ((a+b) > (a * b - 248)) { //evaluates to (42 > 40)
  console.log('The condition is true');
} else {
  console.log('The condition is false');
}

//Multiple contitions can be 'chaned' together
//&& = 'AND'
//!! = 'OR'
if ((true) && (true)) { //True
  console.log('true');
} else {
  console.log('false');
}

if ((true) && (false)) { //False
  console.log('true');
} else {
  console.log('false');
}

if ((true) || (false)){ // True
  console.log('true');
} else {
  console.log('false');
}

let isDarkOutside = false;
if (isDarkOutside) {
  console.log('It is is dark outside');
} else {
  console.log('It is daylight');
}

let color = 'black';

switch (color) {
  case 'yellow':
    console.log('Yellow');
    break;
    case 'green':
      console.log('Green');
      break;
      case 'red':
        console.log('Red');
        break;
  default:
  console.log('We couldn\'t determine the color');
}


//Loops
console.log('While loop');
let counter = 5;
while (counter <= 10) {
  console.log(`The value is ${counter}`);
  counter++;
}

//Do while Loop
console.log('Do While LOOP');
counter = 5;
do {
  console.log(`The value is ${counter}`);
  counter++;
} while (counter <= 10);


//For LOOP
console.log('For loop');
for (let x = 0; x <= 10; x++){
  console.log(`The value is ${x}`);
}
