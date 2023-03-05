console.log("======== Assignmets A [Factorial of a Number] ========")

function factorialOfNum(value){
    let factorial = 1;
    if (value == null || value == undefined || value <=0) {
        return `The Given Number is Invalid`
    }
    for (let index = value; index >=1; index--) {    // Decrement
        factorial = factorial * index;
    }
    return factorial;
}
 var result = factorialOfNum(5);
 console.log(`The Given Number is 5 And factorial is:- '${result}'`);
 var result = factorialOfNum(3);
 console.log(`The Given Number is 3 And factorial is:- '${result}'`);
 var result = factorialOfNum(null);
 console.log(`The Given Number is null And Factorial is:- '${result}'`);
 var result = factorialOfNum(8);
 console.log(`The Given Number is 8 And factorial is:- '${result}'`);
 var result = factorialOfNum(undefined);
 console.log(`The Given Number is undefined And factorial is:- '${result}'`);
 var result = factorialOfNum(9);
 console.log(`The Given Number is 9 And factorial is:- '${result}'`);
 var result = factorialOfNum(0);
 console.log(`The Given Number is 0 And factorial is:- '${result}'`);








