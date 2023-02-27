console.log("======== Implicit conversation to String ========")
//Numeric string used with + gives string type

var result = '3' + 2;
console.log(result);

var result = '3' + true;
console.log(result);

var result = '3' + undefined;
console.log(result);

var result = '3' + null;
console.log(result);

console.log("======== Implicit Boolean Conversation to Number =======")
// If boolean is used, true is 1, false is 0

var result = '4' - true;
console.log(result);

var result = '4' + true;
console.log(result);

var result = 4 + false;
console.log(result);

var result = '10' + false;
console.log(result);

console.log("========= Implicit String conversation to Number =========")
//Numeric string used with -, /, * result number type

 var result = '4' - '2';
 console.log(result);

 var result = '4' - 2;
 console.log(result);

 var result = '4' * 2;
 console.log(result);

 var result = ('4' / 2);
 console.log(result);


 console.log("======== Undefined used with number, Boolean or Null given NaN =======")
 // Arithmetic operation of undefined with number, boolean or null gives NaN

 var result = 4 + undefined;
 console.log(result);

 var result = 4 - undefined;
 console.log(result);

 var result = true + undefined;
 console.log(result);

 var result = null + undefined;
 console.log(result); 

