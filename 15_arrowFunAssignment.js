
console.log("=========== Step1. Arrow function With No argument and No return value ===========")
let show = () => {
    console.log("Good Morning, Today is Monday");
}
show();

console.log("=========== Step2. Arrow function With 3 argument and No return value ============")
console.log("----- Multiplication of 3 Argument -----")
//A. Values to be passsed=> 5, 5, 2

let multiple = (num1, num2, num3=1) => {
    console.log(num1 * num2 * num3);
}
multiple(5, 5, 2);
console.log("------ B. Multiplication of 2 argument and 1 Defualt value -----")
//B. Assign default value to 3rd argument as 1
multiple(10, 4)

console.log("=========== Step3. With 5 Argument and areturn value ============")

let addition = (num1, num2, num3, num4, num5) => {
    const additionOfValues = num1 + num2 + num3 + num4 + num5;
    return additionOfValues;

}
const result = addition(100, 100, 200, 349, 756);
console.log(`Given 5 Arguments 100, 100, 200, 349, 756 :--> Addition is ${result}`);
const arrowFunction = addition("I am", " learning", " ES6", " features", " in depth")
console.log(`Concatination of five value :--> ${arrowFunction}`);


