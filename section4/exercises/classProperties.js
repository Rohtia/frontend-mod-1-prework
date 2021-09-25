/*
In the exercise below, write your own code where indicated
to achieve the desired result.

Make sure to run the file with node in your command line.
*/

//-------------------
// Part 1: Syntax and Naming Conventions
//-------------------

// For each prompt:
  // Write a class skeleton
  // Create 2 object instances and store in variables
  // Log each variable to the console.
  // You do not need any proerties at this time!!

// Prompt 1: Dog
class Dog {
  /* constructor(breed, colour) {
  this.dogBreed = breed;
  this.dogColour = colour;
}*/
}

var dog1 = new Dog('retriever', 'gold');
console.log(dog1);

var dog2 = new Dog('lab', 'black');
console.log(dog2);

// Prompt 2: Snack
class Snack {
//  constructor() {

  //}
}

var chip = new Snack;
console.log(chip);
var pretzel = new Snack;
console.log(pretzel);

// Prompt 3: Shirt
class Shirt {
  //constructor() {

  //}
}

var tshirt = new Shirt;
var buttonUp = new Shirt;
console.log(tshirt);
console.log(buttonUp);

//-------------------
// Part 2: Properties
//-------------------

// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Assign 3 properties (names and values of your choice) to each class
  // Create an object instance and store in variable
  // Log that variable to the console.

// Prompt 1: Dog
class Dog2 {
  breed = 'lab';
  colour = 'black';
  age = 3;
}

var toby = new Dog2();
console.log(toby);

// Prompt 2: Snack
class Snack2 {
  type = 'chips';
  taste = 'salty';
  num = 2;
}

var lays = new Snack2();
console.log(lays);

// Prompt 3: Shirt
class Shirt2 {
  length = 'short';
  colour = 'red';
  material = 'cotton';
}

var tshirt = new Shirt2();
console.log(tshirt);

//-------------------
// Part 3: Dynamic Properties
//-------------------

// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Declare 3 parameters in the consutructor
  // Assign 3 properties (names and values of your choice), using the parameters
  // Create 2 object instances and store in variables (passing in different arguments)
  // Log those variables to the console.

// Prompt 1: Dog
class Dog1 {
  constructor(breed, colour, age) {
    this.breed = breed;
    this.colour = colour;
    this.age = age;
  }
}

var lab = new Dog1('labrador', 'black', 3);
var newf = new Dog1('Newfoundland', 'black and white', 7);
console.log(newf);
console.log(lab);

// Prompt 2: Snack
class Snack1 {
  constructor(type, taste, num) {
    this.type = type;
    this.taste = taste;
    this.number = num;
  }
}

var chip = new Snack1('Ketchup chips', 'salty', 3);
var pretzel = new Snack1('pretzels', 'salty', 1);
console.log(pretzel);
console.log(chip);

// Prompt 3: Shirt
class Shirt1 {
  constructor(length, colour, material) {
    this.length = length;
    this.colour = colour;
    this.material = material;
  }
}

var tshirt = new Shirt1('short sleeved', 'red', 'cotton');
var buttonUp = new Shirt1('long sleeved', 'blue', 'cotton-poly');
console.log(buttonUp);
console.log(tshirt);
