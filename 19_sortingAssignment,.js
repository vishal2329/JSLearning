//25-03-2023//
console.log("================= Assignment A. Sorting =================")

console.log("--------------------------- Given Array -----------------------------------------")

const arrayRollNumbers = [113, 45, 56, 11, 32, 45, 109, 799, 56, 45];
console.log(`Given array is:--> ${arrayRollNumbers}`)

console.log("-------------------------- Reverse Array -----------------------------------------")
const arrayReverseNumber = arrayRollNumbers.reverse();
console.log(arrayReverseNumber);


console.log("----------------------- Step 2. without any custom sorting logic? ------------------")

const sortedArray = arrayReverseNumber.sort();
console.log(sortedArray);


console.log("----------------- Step 3. Sort the array in ascending order, by writing custom logic? ----------------")

arrayRollNumbers.sort((a,b) => {
    return a>b ? 1 : -1
});
console.log(arrayReverseNumber);


console.log("------------------- Step 4. Find Greatest number from the Array ------------------------------------")

console.log(arrayRollNumbers);
const maxNumber = Math.max(...arrayRollNumbers);
console.log(`Greatest number from the Array is:--> ${maxNumber}`);

console.log("------------------ Step 5. Find Smallest number from the Array ---------------------------------------")

console.log(arrayRollNumbers);
const smallestNumber = Math.min(...arrayRollNumbers)
console.log(`Smallest Number from the Array is:--> ${smallestNumber}`);

console.log("----------------- Step 6. Remove Duplicate from Array? -----------------------------------------------")

console.log(`Before Remove duplicate Array:--> ${arrayRollNumbers}`);

function removeDuplicates(arrayRollNumbers) {
    return arrayRollNumbers.filter((item,
        index) => arrayRollNumbers.indexOf(item) === index);
}
console.log("After Remove duplicate Array:-->",removeDuplicates(arrayRollNumbers));



