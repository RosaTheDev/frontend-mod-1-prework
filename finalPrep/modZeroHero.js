// Challenge - See if you can follow the instructions and complete the exercise in under 30 minutes!

// Declare two variables - heroName AND specialAbility - set to strings
  var heroName = "Black Panther";
  var specialAbility = "Agility, Previous live's knowledge";

// Declare two variables - greeting AND catchphrase
//   greeting should be assigned to a string that uses concatenation to include the heroName
//   catchphrase should be assigned to a string that uses interpolation to include the specialAbility
var greeting = "Hello citizen! I am " + heroName

var catchphrase = "I Normally say Wakanda Forever but now I'm saying " + specialAbility + "!";

// Declare two variables - power AND energy - set to integers
var power = 100;
var energy = 100;
// Declare two variables - fullPower AND fullEnergy
//   fullPower should multiply your current power by 500
//   fullEnergy should add 150 to your current energy
var fullPower = power * 500;
var fullEnergy = energy + 150;

// Declare two variables - isHuman and identityConcealed - assigned to booleans
var isHuman = true;
var indentityConcealed = false;

// Declare two variables - archEnemies AND sidekicks
//   archEnemies should be an array of at least 3 different enemy strings
//   sidekicks should be an array of at least 3 different sidekick strings

var archEnemies = ['Man-Ape', 'White Wolf', 'Erik Killmonger'];
var sideKicks =["N'gassi", "W'kabi", "Zuri"];
// Print the first sidekick to your console
console.log(sideKicks[0]);
// Print the last archEnemy to the console
console.log(archEnemies[2]);
// Write some code to add a new archEnemy to the archEnemies array
archEnemies.push("Dr. Doom");
// Print the archEnemies array to console to ensure you added a new archEnemy
console.log(archEnemies);
// Remove the first sidekick from the sidekicks array
sideKicks.shift();
// Print the sidekicks array to console to ensure you added a new sidekick
sideKicks.push('Advengers');
console.log(sideKicks);

// Create a function called assessSituation that takes three arguments - dangerLevel, saveTheDay, badExcuse
//   - dangerLevel should be an integer
//   - saveTheDay should be a string a hero would say once they save the day
//   - badExcuse should be a string a hero would say if they are too afraid of the dangerLevel
function assessSituation(dangerLevel, saveTheDay, badExcuse){
  if (dangerLevel > 50 ){
    console.log(badExcuse)
  } else if (dangerLevel > 10){
    console.log(saveTheDay)
  } else {
    console.log("Meh. Hard pass.");
  }
};

// Your function should include an if/else statement that meets the following criteria
//   - Danger levels that are above 50 are too scary for your hero. Any danger level that is above 50 should result in printing the badExcuse to the console
//   - Anything dangerLevel that is between 10 and 50 should result in printing the saveTheDay string to the console
//   - If the dangerLevel is below 10, it means it is not worth your time and should result in printing the string "Meh. Hard pass." to the console.

//Test Cases
var announcement = `Never fear, the Courageous ${heroName} is here!`;
var excuse = 'I think I forgot to lock up my 1992 Toyota Coralla. Be right back.';

// assessSituation(99, announcement, excuse) > Should print - 'I think I forgot to lock up my 1992 Toyota Coralla. Be right back.'
assessSituation(99, announcement,excuse);

//assessSituation(21, announcement, excuse) > should print - 'Never fear, the Courageous Curly Bracket is here!'
assessSituation(21, announcement, excuse);

//assessSituation(3, announcement, excuse) > should print - "Meh. Hard pass."

assessSituation(3, announcement, excuse);
// Declare a new variable - scaryMonster - assigned to an Object with the following key/values
//   - name (string)
//   - smell (string)
//   - weight (integer)
//   - citiesDestroyed (array)
//   - luckyNumbers (array)
//   - address (object with following key/values: number , street , state, zip)
var scaryMonster = {
  name : "Scary Terry",
  smell : "Rotting Flesh",
  weight : 120,
  citiesDestroyed : ["Hopes", "Dreams", "Elm Street"],
  luckyNumbers: [13, 11, 2, 5, 7],
  address: {
    number : 13,
    street : "Nightmare court",
    state :"Colorado",
    zip : 28348
  }
}

console.log(scaryMonster);
// Create a new class called SuperHero
// - Your class should have the following DYNAMIC values
//   - name
//   - superpower
//   - age
class SuperHero {
  constructor(name, superPower, age){
    this.name = name;
    this.superPower = superPower;
    this.age = age;
    this.archNemesis = "The Syntax Error";
    this.powerLevel = 100;
    this.energyLevel = 50;
  }
  sayName(){
    console.log(this.name);
  }
  maximizeEnergy(){
    this.energyLevel = 1000;
  }
  gainPower(new_powerLevel){
    this.powerLevel = this.powerLevel + new_powerLevel;
  }
}

var blackPanther = new SuperHero("Black Panther", "Agility", 27);

// - Your class should have the following STATIC values
//   - archNemesis, assigned to "The Syntax Error"
//   - powerLevel = 100
//   - energyLevel = 50

// - Create the following class methods
//   - sayName, should print the hero's name to the console
//   - maximizeEnergy, should update the energyLevel to 1000
//   - gainPower, should take an argument of a number and INCREASE the powerLevel by that number

// - Create 2 instances of your SuperHero class
var blackPanther = new SuperHero("Black Panther", "Agility", 27);
blackPanther.sayName();
blackPanther.maximizeEnergy();
blackPanther.gainPower(1543);
console.log(blackPanther);
var milesMorales = new SuperHero("SpiderMan", "The Exaggerated Swagger of a Black Teen", 19);
milesMorales.sayName();
milesMorales.maximizeEnergy();
milesMorales.gainPower(9001);
console.log(milesMorales);
// Reflection
// What parts were most difficult about this exerise?
  // - I Really liked this exercise because I was able to put in practice everything I learned and I liked how it started off easy and started compounding as things whent on

// What parts felt most comfortable to you?
  // everypart was really comfortable, whenever I was kinda stuck I could look at the previous exercises for guidance and I got right back to it fairly quickly

// What skills do you need to continue to practice before starting Mod 1?
  // definitly still need to work on classes and objects but I'm getting a reasonably good grasp on it, the only part I got kinda stuck on was using the colons instead of the assignment operator when working inside Objects, meanwhile its okay to use assignment operators in classes, which is something I'm really taking note on.
