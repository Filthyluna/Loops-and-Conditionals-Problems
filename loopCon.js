//Problem A

let lunchArray = ["Burger", "Salad", "Lasagna", "Sushi", "Meatloaf"];
//Create variable to hold the longest word as an empty string
let longestWord = "";
//Loops through the array
for (let i = 0; i < lunchArray.length; i++){
  //Checks to see if the longest word is less than every item in i
  if (longestWord.length < lunchArray[i].length) {
    //We set the longest word to the each item until we reach the longest word
    longestWord = lunchArray[i];
  }
}
//Print out result
console.log("The longest word is " + longestWord + " its length is " + longestWord.length);

//Problem A part 2
let lunchArrayString = ["Burger Salad Lasagna Sushi Meatloaf"];
//Empty array to hold new array
let newArray = [];
//Empty string to hold longest word
let longest = "";
//Loop through first array
for (let i = 0; i < lunchArrayString.length; i++){
  //Split first array based on the index because it is an array not a string
  //Store it in our empty array
  newArray = lunchArrayString[i].split(" ")
  //Loop through our new array and do the same process we did in the previous part
  for (let j = 0; j < newArray.length; j++) {
    if (longest.length < newArray[j].length) {
      //Set longest word to longest word in the array
      longest = newArray[j];
    }
  }
}
//Print word and its length
console.log(longest + " " + longest.length);

//Part B
function oddElements(arr) {
  //Odd Array that holds the odd elements
  let oddArray = [];
  //Starts at 1 and increments by 2 to grab the odd elements
  for (let i = 1; i < arr.length; i += 2){
    //Pushes the odd elements into the array
     oddArray.push(arr[i]);
  }
  //Returns a string of odd elemnts joined by a space
  return "The odd elements are: " + oddArray.join(" ");
}
//test
console.log(oddElements([1, 2, 3, 4, 5, 6, 7]))

//Part C
function factorial(n) {
  let factorial = 1;
  for (let i = n; i >= 1; i--) {
    //multiplies 1 by i
    factorial *= i;
  }
  return factorial;
}
console.log("Factorial of n is " + factorial(4));

//Part D
let mpg = 38;
if (mpg <= 10) {
  console.log("Gas guzzler");
}
else if (mpg >= 11 && mpg <= 16) {
  console.log("Planet still frowns upon this, and so does your wallet");
}
else if (mpg >= 17 && mpg <= 20) {
  console.log("It's palpable");
}
else if (mpg >= 21 && mpg <= 29) {
  console.log("Atmosphere smiles at your decision");
}
else if (mpg >= 30 && mpg <= 35) {
  console.log("Not many gas stops will be taken");
}
else if (mpg > 35 && mpg < 120) {
  console.log("The fish of the sea smile at your conservation");
}
else if (mpg == 120) {
  console.log("If you are using the Tom Ogle fuel system, props");
}


