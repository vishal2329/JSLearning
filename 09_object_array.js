// Assingment No.2 //  

let sbiBank = {
    bankName : " SBI Bank",
    location: "Narhe",
    account: 62514897564,
    ifsc: "SBIN0004598",
    interestRate: 10.75
}

let axisBank = {
    bankName: "Axis",
    location: "Bajirao Road, Pune",
    account: 4597863258,
    ifsc: "AXIS4567893",
    interestRate: 12.5
}

let hdfcBank = {
    bankName: "hdfc",
    location: "Sinhgad road",
    account: 4593587569,
    ifsc: "HDFC000489",
    interestRate: 11.79
}

let yesBank = {
    bankName: "YesBank",
    location: "Kothrud Pune",
    account: 4568792581,
    ifsc: "YESB0214597",
    interestRate: 14.5,
}

// We can Traverse the arrayObject with the help of For loop and For of loop
const arrayOfBanks = [sbiBank, axisBank, hdfcBank, yesBank ];

for (let index = 0; index < arrayOfBanks.length; index++) {
    const element = arrayOfBanks[index];
    console.log(`${element.bankName}, ${element.location}, ${element.account}, ${element.interestRate}`);
}


// Traversing By using For of loop
for (const element of arrayOfBanks) {
    console.log(`${element.bankName}, ${element.location}, ${element.account}, ${element.interestRate}`);
}

//const array = [1, 2, 3, 4, 8, 9];
// for (const value of array) {
//    console.log(value); 
// }