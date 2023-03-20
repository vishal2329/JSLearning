console.log("============ Step 1 & 2. ==============")

const bankSbi = {
    bankName : "SBI Bank",
    location : "Pune",
    ifscCode : "SBIN0000455",
    branchCode : "040288",
}
const bankLocation = {
    street : "More Bhavan",
    city : "Pune",
    pinCode : "441110",
}
 
const mergedObject = Object.assign({}, bankSbi, bankLocation);
console.table(mergedObject);

console.log("============= Step 3. ==============")

const newbankSbi = {...bankSbi, ...bankLocation};
console.log("By using Spread Operator:-->", newbankSbi, bankLocation);

console.log("============= Step 4. ===============")

const rateOfInterest = {
    homeLoanInterest : "5%",
    personalLoanInterest : "7%",
    duelInterest : "10%",
}
const mergedsbiDetails = Object.assign({}, bankSbi, bankLocation, rateOfInterest);
console.table(mergedsbiDetails);

console.log("============= Step 5. ===============")
console.log("--------- Traverse object using loop ---------")

function traverseObject(mergedsbiDetails){
    for (const key in mergedsbiDetails) {
        if (Object.hasOwnProperty.call(mergedsbiDetails, key)) {
            const element = mergedsbiDetails[key];
            console.log(`${key} : ${element}`);  
        }
    }
}
traverseObject(bankSbi);
traverseObject(bankLocation);
traverseObject(rateOfInterest);
