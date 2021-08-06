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


// Prompt 2: Snack



// Prompt 3: Shirt

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
class Dog {
  constructor() {
    this.breed = "Australian Shepard";
    this.temperament = "Playful / Hyper";
    this.size = "Medium";
  }
}
var australianShepard = new Dog();
console.log(australianShepard);
// Prompt 2: Snack
class Snack {
  constructor() {
    this.type = "Healthy";
    this.filling = "Not at all";
    this.time = "Midday";
  }
}

var celary = new Snack();
console.log(celary);
// Prompt 3: Shirt
class Shirt {
  constructor() {
    this.size = "Large";
    this.color = "Black";
    this.brand = "Champion";
  }
}
var hype = new Shirt();
console.log(hype);
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
class Dog2 {
  constructor(breed, temperament, size)
  {
    this.breed = breed;
    this.temperament = temperament;
    this.size = size;
  }
}

var australianShepard = new Dog2("Australian Shepard", "Playful", "meduim");
console.log(australianShepard);

// Prompt 2: Snack
  class Snack2 {
    constructor(type, filling, time)
    {
      this.type = type;
      this.filling = filling;
      this.time = time;
    }
  }
  var popTart = new Snack2("Unhealthy", "Yes", "Midnight");
  console.log(popTart);
// Prompt 3: Shirt
class Shirt3 {
  constructor(size, color, brand)
  {
    this.size = size;
    this.color = color;
    this.brand = brand;
  }
}
var champion = new Shirt("Large", "White", "Champion");
console.log(champion);
