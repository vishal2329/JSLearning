var greet = "Good Morning";
console.log(typeof greet);

console.log(" Total number chars available into this string variable - greet ");
var greetLenght = greet.length;
console.log(greetLenght);

console.log("Find the charecture by index value");
var charAtIndex3 = greet.charAt(3);
console.log("Charecture availeble at index 3 is: ", charAtIndex3);

console.log("Find tha last character");
var charAtLastIndex = greet.charAt(greetLenght-1);
console.log("Last char is: ", charAtLastIndex);

console.log("Find the index by charecter value");
var indexOfM = greet.indexOf('M');
console.log("index of cahr M is: ", indexOfM);

console.log("Index of char which is not available into the string: ", greet.indexOf('z'));

console.log("Index of o char: ", greet.indexOf('o'));
console.log("Index of o char using lastIndexOf(): ", greet.lastIndexOf('o'));

var replaceResult = greet.replace("Morning", "Evening");
console.log(replaceResult);
console.log(greet);

console.log("Upper Case:", replaceResult.toUpperCase());
console.log("Upper Case:", replaceResult.toLowerCase());

// Find the total extra spaces removed from the string - myName
var myName = "   Mohit   Sharma  ";
var myNameAfterTrim = myName.trim();
console.log("Removing extra start and end spaces using trim(): ",myNameAfterTrim, myName.length, myNameAfterTrim.length);

// String word is present or not means True Or False by using Substring
console.log("includes()");
console.log("Is substring Mor includes in the greet or not: ", greet.includes("Mor"));
console.log("Is substring Afternoon includes in the greet or not: ", greet.includes("Afternoon"));
console.log("Is substring o includes in the greet or not: ", greet.includes("o"));

// How we can do slice 
console.log("slice() method");
var sliceResult = greet.slice(5, 12);
console.log(sliceResult);
console.log(greet.slice(2, 5));

console.log("split() method");
var greet = "Good Morning";
var splitResult = greet.split(" ");
console.log(splitResult);


console.log("split() method");  // This method use to find out How many total words inside the string
var greet = "Good Morning my dear friend";
var splitResult = greet.split(" ");
console.log(splitResult);
console.log("Total words: ", splitResult.length);


var myFriendList = "Billgates, Stew Job, Elon Musk, Ratan Tata, Sundar Pichai, Satya Nadella, Narayan Murti, Nandan Nilekani, Larry Page, Surgey Brain, Tim Cook";
var frdList = myFriendList.split(",");
console.log(frdList);
console.log(frdList.lenght);





