console.log("=========== Assignment A. Using forEach() with arrow function =========")
console.log("-------- Step 1. ----------")
//Que.1. Log the array element with its index using For Each loop with Arrow function?

const arrayNumbers = [1, -7, 40, 502, -77, 91, 0, 108, 89, -601];
arrayNumbers.forEach( function(index, elements) {
    console.log(`index:-> ${index},  elements:-> ${elements}`)
});

console.log("------------------- Step 2. Find the positive numbers ------------------")
//Que.2. Find the positive numbers?

arrayNumbers.forEach( function(numbers) {
    if (numbers > 0) {
        console.log(`Positive numbers inside arrray is:-> ${numbers}`)
    } 
});

console.log("--------------------- Step 3. Find Negative numbers ----------------------")
//Que.3. Find the Negative numbers, add into New array and log New array on console using arrow function?

arrayNumbers.forEach(function(numbers) {
    if (numbers < 0) {
        console.log([numbers])
    }
});

console.log("--------------------- Step 4. Find the Even numbers ---------------------")
//Que.4. Find the Even numbers and log on console using for Each loop with arrow function?

arrayNumbers.forEach(numbers => {
    if (numbers%2==0) {
        console.log(`Even Numbers inside an Array:-> ${numbers}`);  
    }
});


console.log("---------------- Step 5. Find the sum of all elements --------------------")
//Que.5. Find the sum of all elements from arrayNumbers and log on sum value on console?

let sum = 0;
arrayNumbers.forEach(numbers => {
    sum = sum + numbers;
    
});
console.log(`Sum of the all Array elements is:-> ${sum}`);


console.log("-------------- Step6. Log the only even indexed array value on console --------------")
//Que.6. Log the only even indexed array value on console forEach with arrow gunction prefered?

arrayNumbers.forEach(function(numbers, index) {
    if (index%2==0) {
        console.log(`Even index Array Values is:-> ${numbers}`);
    }
});