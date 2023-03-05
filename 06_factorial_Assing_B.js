// Find out count the Total Numbers of words in Availble string and its factorial?
console.log("======== Assignmets B [Factorial of a Number] ========")

function factorialofWordscount(word){
    if (word == null || word == undefined || word == "" || word == NaN) {
        return `Given String is ${word} This string is Invalid please provide Valid String`;
    }
    let str = word.split(" ")
    let totalWord = str.length;
    let factorial = 1;

    for (let index = totalWord; index >=1; index--) {
        factorial = factorial * index;
    }
     return `Given String is:- "${word}" Total Numbers of Word is:- '${totalWord}' And factorail is:- ${factorial}` 

}
 var result = factorialofWordscount("Revision is the mother of Success");
 console.log(result)
 console.log("---------*----------")
 var result = factorialofWordscount("We never fail, We always learn");
 console.log(result);
 console.log("---------*----------")
 var result = factorialofWordscount(null);
 console.log(result);
 console.log("---------*----------")
 var result = factorialofWordscount("");
 console.log(result);
 console.log("---------*----------")
 var result = factorialofWordscount("Vishal Niranjan Dudhabade");
 console.log(result);





