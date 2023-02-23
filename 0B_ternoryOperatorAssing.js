console.log("======= Assignment 0B.Based on Ternary Operator By using Normal Function =======")
console.log(`======== Step 1 ========`)
function maleMarriageEligibility(gender, age, boyName){
    var result = (gender=="Male" && age>=21) ? `Hey ${boyName} you are eligible for marriage` : " You are Not eligible Try next time" ;
    return result;   
}
  var result = maleMarriageEligibility("Male", 25, "Billgates");
  console.log(`1.1`, result);
  var result = maleMarriageEligibility("Male", 17, "Stew Jobs");
  console.log(`1.2`, result);


console.log(`======== step 2 ========`)
// with Argument and return value
function femaleMarriageEligibility(gender, age, girlName){
    var result = (gender=="Female" && age>=18) ? `Hey ${girlName} You are eligible for maariage` : "You are Not eligible Try next time";
    return result;
}
var result1 = femaleMarriageEligibility("Female", 16, "Jenifer");
console.log(`2.1`, result1);
var result1 = femaleMarriageEligibility("Female", 27, "Malinda Gates");
console.log(`2.2`, result1);


