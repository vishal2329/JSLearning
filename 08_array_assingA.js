console.log("========== Assignmet 01 ==========")
console.log("Que.1. Log the First and Last Elements?")
const arraySeasonalFruits = ["Banana", "Orange", "Apple", "Mango", "WaterMelon"]
console.log(arraySeasonalFruits);

let arrayLength = arraySeasonalFruits.length
console.log(`Total length of the Array is: ${arrayLength}`);

let arrayFirstElements = arraySeasonalFruits[0];
console.log(`The First Elements inside the array is:- ${arrayFirstElements}`);

let arrayLastElement =arraySeasonalFruits[arraySeasonalFruits.length-1];
console.log(`The last Elements inside the array is:- ${arrayLastElement}`);

console.log("========================================================================================")

console.log("Que.2. Add Element --> Papaya before the element 'Banana' and log array on console? ")

console.log(`Before add the Elements:--> ${arraySeasonalFruits}`);
arraySeasonalFruits.unshift("Papaya");
console.log(`After add the elements:--> ${arraySeasonalFruits}`);

console.log("========================================================================================")
console.log("Que.3. Remove 'Mango' from the array?")

console.log(`Before Remove the 'Mango':--> ${arraySeasonalFruits}`);
const spliceArraywithDelete = arraySeasonalFruits.splice(4, 1);
console.log(`After Remove the 'Mango':-->  ${arraySeasonalFruits}`);

console.log("=========================================================================================")
console.log("Que.4. Add an Element 'Pineapple' at the last position?")

console.log(`Original Array:--> ${arraySeasonalFruits}`);
arraySeasonalFruits.push("Pineapple");
console.log(`After adding the Pineapple:--> ${arraySeasonalFruits}`);

console.log("=========================================================================================")
console.log("Que.5. Insert an elements 'Dragon Fruit' before Water Melon?");

console.log(`Original Array:--> ${arraySeasonalFruits}`);  //Papaya, Banana, Orange, Apple, WaterMelon, Pineapple 
arraySeasonalFruits.splice(4, 0, "Dragon Fruit");
console.log(`After adding the Dragon Fruit':--> ${ arraySeasonalFruits}`);  //Papaya,Banana,Orange,Apple,Dragon Fruit,WaterMelon,Pineapple

console.log("=========================================================================================")
console.log("Que.6. Replace an Elements 'Orange' with 'Kiwi'?")

console.log(`Original Array is:--> ${arraySeasonalFruits}`);  
const replaceElement = arraySeasonalFruits.splice(2, 1, "Kiwi");
console.log(`After Replacing the 'Orange' with 'Kiwi':-->  ${arraySeasonalFruits}`);

console.log("==========================================================================================")
console.log("Que.7. Log the elements starting from index 1 to 4?")
// Original Array is:--> Papaya, Banana,  Kiwi, Apple, Dragon Fruit, WaterMelon, Pineapple
console.log(`Original Array is:--> ${arraySeasonalFruits}`);  
const startingElements = arraySeasonalFruits.slice(1, 4);
console.log(`After Slicing the index 1 to 4:--> ${startingElements}`);   // Result is==> Banana,Kiwi,Apple

console.log("==========================================================================================")

console.log("Que.8. Only select last 3 Elements and log on console?")
const arrayLengthProperty = arraySeasonalFruits.length
console.log(`Total length of Elements is:-- ${arrayLengthProperty}`);

const lastThreeElements = arraySeasonalFruits.slice(4, 7);
console.log(`Selected Last three Elements:-- ${lastThreeElements}`);

















