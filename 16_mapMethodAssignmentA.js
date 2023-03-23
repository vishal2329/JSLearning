console.log("================== Assignment Map Method A ===================")
console.log("--------- Step 1. Add 10 into each element nad log new array result? ----------")

const arrayNumbers = [20, 11, 40, 25, 23, 11, 9, 31, 60, 2, 19];
const arrayNewNumbers = arrayNumbers.map((element) => {
    return element + 10;
});
console.log(arrayNewNumbers);

console.log("--------- Step 2. Square the each array element and log on console? -----------")

const arraySquareNumber = arrayNumbers.map((element) => {
    return element * element;
});
console.log(arraySquareNumber);


console.log("--------- step 3. Add he index value into its corresponding each array element? ---------")
const arrayOfIndex = arrayNewNumbers.map((element, index) => {
    return element, index;
});
console.log(arrayOfIndex);
