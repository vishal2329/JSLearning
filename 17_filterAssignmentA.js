console.log("........................... Assignment B. Filter Method ............................")
//23-03-2023//

const arrayNumbers = [20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19];
console.log(`Given Array is:--> ${arrayNumbers}`);

console.log("-----------------------------------------------------------------------------------------------------------")

console.log("================= Step 1. Find out all the number which are greater than 50? ==================")

const arrayGreater = arrayNumbers.filter((element) => {
    return element > 50;

});
console.log(`Numbers is Greater than 50:--> ${arrayGreater}`);

console.log("================= Step 2. Find out all the even number and log on console? ====================")

const arrayEven= arrayNumbers.filter((element) => {
    return element%2==0;
});
console.log(`The Even Number is:--> ${arrayEven}`);

console.log("===================== Step 3. Find out all the odd numbers? ========================")

const arrayOdd = arrayNumbers.filter((element) => {
    return element%2==1;
});
console.log(arrayOdd);


console.log("===================== Step 4. Find out all the numbers which are multiple of 5? ========================")

const arrayMultiple = arrayNumbers.filter((element) => {
    return element%5==0;
});
console.log(arrayMultiple);


console.log("===================== Step 5. Find out all the numbers which are between 20 and 50? ========================")

const arrayBetween = arrayNumbers.filter((element) => {
    return element>=20 && element<=50;
});
console.log(arrayBetween);