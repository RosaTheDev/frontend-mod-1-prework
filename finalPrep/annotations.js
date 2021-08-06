// Add your annotations, line by line, to the code below using code comments.
// Use the double // to create a new comment

//Build a Bear
//creating a function called buildABear with 5 parameters
function buildABear(name, age, fur, clothes, specialPower) {
  // assign the greeting variable to a string, that string is using name to be interpolated, I find this very interesting method
  var greeting = `Hey partner! My name is ${name} - will you be my friend?!`;
  // assign an aray to the demographics variable in the array you are putting the name and age, one is a string and the other an integer
  var demographics = [name, age];
  // declare a variable with a string that is using concatnation, I found this special power really creepy
  var powerSaying = "Did you know that I can " + specialPower + " ?";
  // AHH yes, we are building an opbject within this function, we can tell it is an object by the colons, call it builtBear
  var builtBear = {
    // assign the variable basicInfo to demographics which is found in the fuction buildABear
    basicInfo: demographics,
    // assign clothes to the bear, I see that this is an array in the parameter, but I feel this couldve been done better
    clothes: clothes,
    // I'm noticing that this is meant to be a fur color in the parameters, I wouldve named this furColor instead of fur
    exterior: fur,
    // assigning the cost to the bears, all bears cost basically $50 if you add tax
    cost: 49.99,
    // assign saying to an array, basically it will say "Hey partner my name is..", then "Did you know I can give you nightmares", "Goodnight my friend"... I aint sleeping tonight
    sayings: [greeting, powerSaying, "Goodnight my friend!"],
    // assigning isCuddly to a boolean... it says true but I would not cuddle with that monster
    isCuddly: true,
  };
  //
  return builtBear
}

buildABear('Fluffy', 4, 'brown', ['pants', 'jorts', 'tanktop'], 'give you nightmares');
buildABear('Sleepy', 2, 'purple', ['pajamas', 'sleeping cap'], 'sleeping in');



//FizzBuzz
// declare a function called fizzBuzz and assign it 3 parameters num1, num2, num3
function fizzBuzz(num1, num2, range) {
  // wooo we going in for a for loop, in the for loop name a variable to i and assign it to 0, if I gets past the range then the loop will stop, also increment i by 1
  for (var i = 0; i <= range; i++) {
    // if i is divisable by num 1 AND i is divisable by num 2 then log fizzbuzz to the console
    if (i % num1 === 0 && i % num2 === 0) {
      // log fizzbuzz to the console
      console.log('fizzbuzz');
      // if i is divisable by num 1  print fizz to the console
    } else if (i % num1 === 0) {
      // log fizz
      console.log('fizz');
      // if i is divisable by num 2 print buzz to the console
    } else if (i % num2 === 0) {
      // log buzz to the console
      console.log('buzz');
      // anything else print i
    } else {
      console.log(i);
    }
  }
}

fizzBuzz(3, 5, 100);
fizzBuzz(5, 8, 400);
