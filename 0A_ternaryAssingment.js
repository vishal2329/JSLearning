console.log("======= Assingment 0A =======")

console.log("======= Step 1. Find the greater number amongs two number =======")

var num1 = 10;
var num2 = -10;

var num1 = 800;
var num2 = 899;

function greaterNumber(num1, num2){
var result = (num1 > num2) ? num1 : num2;
console.log(`Greater number amongst ${num1}, ${num2} is : ${result}`);
}
greaterNumber(10, -10,);
greaterNumber(800, 899);

console.log("======== Step 2. Check Even or Odd numbers ==========")

// var myNumber = 29; 
function isEvenOrOddNum(num1, num2, num3){
var result = num1%2==0 ? "ODD" : "EVEN";
  console.log(`Given Number is: `,result);
  var result = num2%2==0 ? "ODD" : "EVEN";
  console.log(`Given Number is:`,result);
  var result = num3%2==0 ? "ODD" : 'EVEN';
  console.log(`Given Number is:`, result);
}
isEvenOrOddNum(29, 44, 101);

console.log("======== Step 3. ========")

function wordLength(word){
    var wordLength = word.length;
    var result = wordLength%2==0 ? "EVEN" : "ODD";
    return result;
 }
 var result = wordLength("JavaScript");
 console.log(`Word "JavaScript" has ${result} length` );
 var result = wordLength("developer");
 console.log(`Word "developer" has ${result}} length`);
 var result = wordLength("Google");
 console.log(`Word "Google" has ${wordLength("Google")} length` );







