console.log("**** Step-1[Two Function With no arguments and no return type] ****");

function myFavActor(){
    console.log("My favourite actor is: John Ebrahim");

}
myFavActor()

function myCity(){
    console.log("My city is: Nagpur");
}
myCity()

console.log("**** Step-2. Personal Details] ****"); 

function personalDetails(firstName, lastName, collegeName){
    console.log("First Name is: Vishal");
    console.log("Last Name is: Dudhabade");
    console.log("College Name is: PCE");
}
personalDetails()


console.log("**** Step-3. [Function With Argument & no return value] ****")


var num1 = 1000;
var num2 = 2000;

var name1 = "Virat"
var name2 = "Anushka"

function swapValueDude(value1, value2){
    console.log("Before Swap two value:-", value1, value2);
    var temp = value1;
    value1 = value2;
    value2 = temp;
    console.log("After Swap two value:-", value1, value2);
}
swapValueDude(name1, name2)
swapValueDude(num1, num2);


console.log("**** Step-4. [With Argument and Return value] ****")
console.log("Given Three Parameter:- 10.23, 600, 40 ")

var num1 = 10.26;  var num2 = 600;  var num3 = 40;

function addThreeValues(num1, num2, num3){
    var addition = num1 + num2 + num3;
    return addition;
 }
 var additionResult1 = addThreeValues(10.23, 600, 40);
 console.log("Addition of Three Parameter:", additionResult1);

 console.log("Given 3 Parameter:- Hello, Good, Morning")
 var additionResult2 =  addThreeValues(" Hello", "Good", "Morning");
 console.log("Adition of Three Parameter:", additionResult2);



 