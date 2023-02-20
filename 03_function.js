
// Function with no Argument and no return value
//Note:- Inside the paranthesis we write down the variable we can say Argument
function showFullName(){
    console.log("My full name is: Vishal Dudhabade");

}
showFullName()  //Function Call or function invoke


// Function with Argument and no return value
var age = 25;
function showAge(age){
    console.log("My age is:", age);
}
showAge(25);  //function call


// Function without Argument and return value
function fullName(){
    var name = "Vishal Dudhabade";
    return name;
}
var fname = fullName();
console.log(fname);


// Function with Argument and return value
function sumOfNumber(num1, num2, num3){
var sum = num1 + num2 + num3;
return sum;
}
var sumResult = sumOfNumber(10, 25, 45.20);
console.log(sumResult);


// This type we can do the Swaping
var str1 = "Sweety"; // Cuteiy
var str2 = "Cuteiy"; // Sweety
function swapVariables(value1, value2){
    console.log("Before Swap:", value1, value2);
    var temp = value1;
    value1 = value2;
    value2 = temp
    console.log("After Swap:", value1, value2);
}
swapVariables(str1, str2);



var num1 = 100;  //value1 
var num2 = 200; //value2
function swapVariables(value1 ,value2){   //var value1:-num1, var value1:- num2
    console.log("Before Swap:", value1, value2);
    var temp = value1;
    value1 = value2;
    value2 = temp;
    console.log("After Swap:", value1, value2);
    return "Swapping Variable successefully completed";
}
var swapResult = swapVariables(num1, num2);  //Function Call or function invoke
console.log(swapResult);


var name1= "Vishal";
var name2 = "Sagar";