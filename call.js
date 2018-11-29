let obj = {
  num: 2
};

let addToThis = function(a,b,c){
  //This has no context here
  return this.num + a + b + c;
};

//Call binds the function to the first object passed in
//Parameters are passed in
//Subsequent values
console.log(addToThis.call(obj, 1, 2, 3));

let person1 = {
  firstName: 'Jack',
  lastName: 'Davis'
};

let person2 = {
  firstName: 'Mark',
  lastName: 'Price'
};

function hello(greeting){
  console.log(`${greeting}  ${this.firstName} ${this.lastName}`);
}

hello.call(person1,"What\s up");
hello.call(person2,'Yo');
