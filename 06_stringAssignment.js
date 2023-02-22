console.log("====== String Assignment ======")
console.log("------ Step 1 ------")

function stringHandsOn(){
    var myLife= "Hey you are doing good, keep it up";
    console.log(myLife);

console.log("------ Step 2 -------")

console.log(" Lenght of string is:", myLife.length);

console.log("------- Step 3 -------")

var myRule = myLife.trim();
console.log(myRule);
console.log("Remove the leading and trailing extra spaces:", myRule);
console.log("Lenght of string is:", myRule.length);

console.log("-------- Step 4 -------")
var myRuleCount = myLife.split(" ");
// console.log(myRuleCount);
console.log("Total number of extra spaces removed :-", myRuleCount);


console.log("-------- Step 5 -------")
var firstChar = myLife.charAt(0); 
var lastChar = myLife.charAt(myLife.length-1);
console.log("First character is: ", firstChar)
console.log("Last character After trim is: ", lastChar)

console.log("-------- Step 6 -------")
var splitMyRule = myLife.split(" ");
console.log("Total number of Words in string after trim:- ", splitMyRule.length);

console.log("-------- Step 7 --------")
var myRule = myLife.indexOf('good');
console.log("Index of word Good is:-", myRule);

console.log("-------- Step 8 ---------")
var myRule = myLife.substring(22);
console.log("Substring strating from index 22:-", myRule);

var myRule = myLife.slice(22);
console.log("Slicing from index 22 is:-", myRule);


console.log("-------- Step 9 ---------")
var myRule = myLife.endsWith('up');
console.log("String ends with word Up after trim:-", myRule)

console.log("-------- Step 10 --------")
var myRule = myLife.startsWith('Hey');
console.log("Check string is starts with word Hey After trimming:-", myRule);

}
stringHandsOn();