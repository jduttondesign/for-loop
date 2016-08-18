
//Increment by 10
 /*Write a for loop that uses a counter variable 
 initialized at 5 and then increments it by 10 
 every time it executes. Use console.log() to output the value of 
the counter variable each time through the loop. Stop execution of 
 the loop if the counter variable's value is greater than 120.*/

for (var number = 5; number <= 120, number+=10);{
var total = "current value is" + number; 
console.log(number);
}




/*Decrement by division
Write a for loop with a counter variable initialized at 4096. 
Each time the loop executes divide the counter variable's value by 2. 
Use console.log() to output its value every time. When the counter 
variable's value is 1, stop execution.*/
for (var counter = 4096; counter = counter / 2;{
var output = "current value is" + counter;
console.log(output);
}


/*Array iteration

Create an array that contains the names of American Presidents. 
Loop over that array with a for loop, and use string concatenation 
with console.log() to output the order and name of each President 
(see example below).

President #1 was George Washington
President #2 was John Adams
President #3 was Thomas Jefferson*/

var Presnames = [George Washington, John Adams, Thomas Jefferson];
var numbers = [1, 2, 3];
for (var i = 0; i < Presnames.length; i++) {
var output = Presnames + # + numbers[i] + Presnames[i];

console.log(output);


/*Object iteration

Use can use another kind of for loop to iterate over objects. 
Iterate over the object below and use console.log() to output 
the names of the keys in the object.*/

var antSpecies = {
  argentine: {},
  army: {},
  bigHeaded: {},
  black: {},
  bull: {},
  carpenter: {},
  crazy: {},
  fire: {},
  glider: {},
  honeyPot: {},
  jackJumper: {}
}

for (var key in antSpecies);
console.log(key);

