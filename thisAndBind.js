//In javascript the thing called this is the object that owns the javascript code

let hotRod = {};

hotRod = {
  sound: "vroom",
  soundOff: function(){
    console.log(this.sound);
  }
};

hotRod.soundOff(); //vroom

let soundFunction = hotRod.soundOff; //This loses its context
soundFunction();

//We cand bind this to the object hotRod.
//This will give soundFunction a this context
let boundSoundFunction = soundFunction.bind(hotRod);
boundSoundFunction();

let person1 =
{
  name: 'Joe'
};

let person2 = {
  name: 'Jane'
};

function logName(){
  return this.name;
}

console.log(logName());
console.log(logName.bind(person1)());
console.log(logName.bind(person2)());

let number = {
  x: 24,
  y:22
};

let count = function() {
  console.log(this.x + this.y);
}


count();

let boundCount = count.bind(number);
boundCount();
