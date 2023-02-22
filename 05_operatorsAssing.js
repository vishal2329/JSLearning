//Invoke or Call this function for values one by one
// var wordA = `JavaScript`;    
// var wordB =  `Google Chrome`;
// var wordC = `Developer Smart`;

console.log(`----- Step 1. Find out The Word Length and Square of given Word -----`)
var wordA = `JavaScript`;
function squareOfWorldLength(wordA){
    var wordALength = wordA.length;
    console.log(`1.1- The Given word is:- ${wordA}`);
    console.log(`1.2- Word length is:- ${wordALength}`);
    // var num = 10;
    var result = 10 * 10;
    console.log(`Square of JavaScript length is:- ${result}`);

    console.log(`----------------@----------------`)
    var wordB =  `Google Chrome`;
    var wordBLength = wordB.length;
    console.log(`2.1- The Given word is:- ${wordB}`);
    console.log(`Word length is:- ${wordBLength}`);
    var num = 13;
    var result = 13 * 13;
    console.log(`Square of Google Chrome is:- ${result}`);

    console.log(`----------------@----------------`)
    var wordC = `Developer Smart`;
    console.log(`3.1- The given word is:- ${wordC}`);
    var wordCLength = wordC.length;
    console.log(`Word length is:- ${wordCLength}`);
    var num1 = 15;
    var result = 15 * 15;
    console.log(`Square of Developer Smart is:- ${result}`);

}
squareOfWorldLength(wordA);

console.log(`--------------- Step 2. ------------------`)

function stringAssingment(){
    var statement = "I am Angular Developer";
    console.log(`The string is:- ${statement}`);
    var statementLength = statement.length;
    console.log(`String length is:- ${statementLength}`);

    var splitResult = statement.split(` `); // Find How many Number of words inside the string
    console.log(splitResult);
    console.log(`Total word in string:- ${splitResult.length}`);

    var strLength = 22;
    var totalWord = 4;
    var result = 22 / 4;
    console.log(`Divided By total no of word and String length:- ${result}`);

    var result = 22 * 4;
    console.log(`Multiple by Total word and String length:- ${result}`);
}
stringAssingment()

