console.log("========= Step 1. =========")

// total string count is 0 to 38
var countTotalVowels = function(givenString) {
    var vowelsCount = 0;
    for (let index = 0; index < givenString.length; index++) {
        var char = givenString.charAt(index);
        if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u")  { 
            vowelsCount = vowelsCount + 1;

        }
        
    }
    return vowelsCount;

}
var result = countTotalVowels("JavaScript is the language Of internet");
console.log(`The given string is ${result}`);




console.log("========= Step 2. =========")
//Find out How many total Characters in last word
// 0 to 31
function lastWordCharsCount(str){       // This is a given string:- "Hard work is the key of success"
    var  lastWord = "";
    for (let index = 31; index >lastWordCharsCount.length; index--) {
        var char = str.charAt(index); 
        lastWord = lastWord + char;  // "s"+"s"
        if (char == " ") {
            break;
        }  
    }
    return lastWord;

}
 var lastWord = lastWordCharsCount("Hard work is the key of success");
 console.log(`Last Word is:- ${lastWord} And Total charecters is:- ${lastWord.length}`);


