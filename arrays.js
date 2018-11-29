let grades = [92,98,84,87,93];

console.log(`My first grade was ${grades[1]}`);

let myStuff = ['baseball','football',32,true,'Magic Mouse'];

console.log(myStuff.length);

//Array Methods
//POP
let poppedValue = myStuff.pop(); //Extract the last value of the array to a variable

console.log(poppedValue);

console.log(myStuff); //There is no Magic mouse now because it has been popped

//Push
myStuff.push(poppedValue) //Add a value to the end of an array

console.log(myStuff); //Now magic mouse is back in to the Array

console.log(grades);

grades.push(59,94,94); // We can push more than one value

console.log(grades);


//SHIFT
let shiftedValue = myStuff.shift(); //Extract the first value of the array and to a variable
console.log(shiftedValue); //Baseball
console.log(myStuff); //Now baseball is no longer in myStuff Array

//UNSHIFT
myStuff.unshift(shiftedValue); //Add value to start of the arrray
console.log(myStuff); //Now baseball is in the start of the Array

//CONCAT
let array1 = [1,2,3];
let array2 = [4,5,6];

let conatArray = array1.concat(array2); // Join two arrays together

console.log(conatArray);

let array3 = [7,8,9];

let concatArray2 = array1.concat(array2,array3); // Join multiple arrays

console.log(concatArray2);

//REVERSE
let reversedArray = concatArray2.reverse(); //Reverse the array
console.log(reversedArray);


//SORT
let statesArray = ['Missouri','Arkansas','Arizona','Missisippi','Alabama','California'];
let sortedStatesArray = statesArray.sort(); //sorts the values
console.log(sortedStatesArray);

let numericArray = [233,3,83,2399,23,5,8];

// let sortedNumericAray = numericArray.sort(function(a, b) {
//   return a - b;
// });


let sortedNumericAray = numericArray.sort((a,b) => a - b); //ES6 Way

console.log(sortedNumericAray);


//SLICE

let slicedStates = sortedStatesArray.slice(2,5); //Pull out the values between the start and the end index
console.log(slicedStates);

slicedStates = sortedStatesArray.slice(2);
console.log(slicedStates);
