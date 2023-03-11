 const arrayNumbers = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
 console.log(`Given Array is:==> ${arrayNumbers}`);

 console.log("======= Step 1 =======")
 // Que.1. Find the total elements available in arrayNumbers 
 const arrayLength = arrayNumbers.length
 console.log(`Total Numbers of Elements are available is:==> ${arrayLength}`);

 console.log("======= Step 2 =======")
 // Que.2. Log the first element and last element in arrayNumbers and log on console?
 const arrayFirstElements = arrayNumbers[0];
 console.log(`The first Element inside the array is:==> ${arrayFirstElements}`)

 const arrayLastElements = arrayNumbers[arrayNumbers.length-1];
 console.log(`The last Element inside the array is:==> ${arrayLastElements}`);

 
 console.log("======= Step 3 =======")
 // Que.3. Log the third last elements using length property and log on console?

 const thirdLastElement = arrayNumbers[arrayNumbers.length-3]
 console.log(`Third last Element is:==> ${thirdLastElement}`);


 console.log("======= Step 4 =======")
 //Que.4- Find the all Even numbers and log on console?

console.log(`Given Array is:--> ${arrayNumbers}`);
const even = [];
 for (let index = 0; index < arrayNumbers.length; index++) {
    const number = arrayNumbers [index];
    if (number%2==0) {
        even.push(number);
    }
 }
  console.log(`Even numbers inside the array is:--> ${even}`);
 

  console.log("======= Step 5 =======")
  // Que.5. Find the odd numbers and log on console?

  console.log(`Given Array is:--> ${arrayNumbers}`);
  const Odds = [];
  for (let index = 0; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index];
    if (element%2==1) {
        Odds.push(element); 
    }
  }
  console.log(`Odd Numbers inside the array is:--> ${Odds}`)


  console.log("======= Step 6 =======")
  // Que.6. Find all the Even Positioned elemets from arrayNumbers, sum it and log on console?
   
  let Evenindex = [];
  let sum = 0;
  for (let index = 0; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index];
    if (index%2==0) {
     Evenindex.push(element);
     sum = sum + element
    }
    
  }
  console.log(`All the Even positioned from Array:--> ${Evenindex}`);
  console.log(`sum of All the given array is:--> ${sum}`);

     
  console.log("======= Step 7 =======")
  // Que.7. Find all the Odd positioned elementys from arrayNumbers, sum it and log on console?

  let oddIndex = [];
  let totalSum = 0;
  for (let index = 0; index < arrayNumbers.length; index++) {
    const numbers = arrayNumbers[index];
    if (index%2==1) {
      oddIndex.push(numbers);
      totalSum = totalSum + numbers  
    }
    
  }
  console.log(`All the Odd positioned from Array:--> ${oddIndex}`);
  console.log(`Sum of all the given Array is:--> ${totalSum}`)


  console.log("======= Step 8 =======")
  // Que.8. Find the sum of all elements from arrayNumbers, log on console?
  //  const arrayNumber = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];

  let numberSum = 0;
  for (let index = 0; index < arrayNumbers.length; index++) {
    numberSum += arrayNumbers[index];

  }
  console.log(`Sum of all the given element is:--> ${numberSum}`);


  console.log("======= Step 9 =======")
  // Que.9. Find the numbers which are multiple of 5?

  console.log("Multiple of 5");
  const multiples = arrayNumbers;

  for (let index = 0; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index];
    if (element %5==0) {
      console.log(element);
    }
    
  }


  console.log("======= Step 10 =======")
  // Que.10. Is number 115 available in arrayNumbers?
  
  const isAvailable = arrayNumbers
  console.log("Is Number 115 available in array is:", isAvailable.includes(115));

 
  console.log("======= Step 11 =======")
 // Que.11. Is number 23 avaialble in arrayNumber?

 const Available = arrayNumbers;
 console.log("Is Number 23 available in array is:", Available.includes(23));


 console.log("======= Step 12 =======")
 // Que.12. Insert number 55, 66 before index 3 and log array on console?

 //const arrayNumber = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];

 arrayNumbers.splice(3, 0, 55, 66);
 console.log(`Insert Number 55, 66 before index 3:-->  ${arrayNumbers}`);

 console.log("======= Step 13 =======")
 // Que.13. Delete 3 elements starting from index 4 and log arrayNumber on console?

 arrayNumbers.splice(4, 3);
 console.log(`Delete 3 elemets starting from index 4 is:--> ${arrayNumbers}`);




 