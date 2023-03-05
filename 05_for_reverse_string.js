// Date => 2/03/2023 //
// Reverse Method
var reverseString = function(str){
    var reverse = "";  // w
    for (let index = str.length-1; index >=0; index--) {
        var charAt = str.charAt(index);
        reverse = reverse + charAt;
    }
    return reverse;
}
var result = reverseString("Do it anyHow");
console.log(`Reverse String is: ${result}`);


// We can write single reverse word from last sentence of word
var reverseStr = function(str){
    var reverse = ""; // wohynafor 
    for (let index = str.length-1; index >= 0; index--) {
        var char = str.charAt(index);
        if(char == " "){
            break;
        }
        reverse = reverse + char; // "w"+"o" ==> "wo"
    }
    return reverse;
}
var result = reverseStr("Do it anyHow");
console.log(`Reverse last word : ${result}`);


// We can count the Spaces with the help of below program 
var str = "I am Angular champ";
var count = 0;
for (let index = 0; index < str.length; index++) {
    var char = str.charAt(index);
    if (char == " ") {
        count = count + 1;   
    }
    
}
console.log("Total number of spaces is:", count)
