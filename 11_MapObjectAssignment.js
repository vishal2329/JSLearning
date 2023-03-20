console.log("================= Assignment 0A:-> 11_Map Object Assignment ===================")
console.log("============= Class Bank With all Data Members ==============")

class Bank {

    constructor(bankName, location, accountNo, ifscCode, interestRate){
        this.bankName = bankName;
        this.location = location;
        this.accountNo = accountNo;
        this.ifscCode = ifscCode;
        this.interestRate = interestRate;
    }   
}
const axis_bank = new Bank("Axis Bank", "Pimpri Chinchvad", "18605005555", "UTIB0000037", 3.50);
console.log(axis_bank);

const sbi_bank = new Bank("SBI Bank", "Kharadi", "11478592452", "SBIN0000455", 6.20);
console.log(sbi_bank);

const icici_bank = new Bank("ICICI Bank", "Chakan", "11010055225", "ICIC0001733", 6.9);
console.log(icici_bank);

const kotak_bank = new Bank("Kotak Bank", "Nawle Bridge", "12456979328", "KKBK0001769", 7.20);
console.log(kotak_bank);

const  hdfc_bank = new Bank("HDFC Bank", "Kothrud", "13301265786", "HDFC0004024", 5.50);
console.log(hdfc_bank);

const panjab_bank = new Bank("Panjab Bank", "Hadapsar", "14445236578", "PUNB0284500", 7.25);
console.log(panjab_bank);

console.log("=========================== Create Map ============================")

const mapOfBank = new Map();
mapOfBank.set("Axis_1", axis_bank);
mapOfBank.set("SBI_2", sbi_bank);
mapOfBank.set("ICICI_3", icici_bank);
mapOfBank.set("Kotak_4", kotak_bank);
mapOfBank.set("HDFC_5", hdfc_bank);
mapOfBank.set("Panjab_6", panjab_bank);
console.log(mapOfBank);


console.log("========================= Traverse The Map =========================")

const element = mapOfBank.get("Axis_1");
console.log(`Bank Name is:--> ${element.bankName}, Account Number is:--> ${element.accountNo}, Interest Rate is:--> ${element.interestRate}`);

const traverseObject = mapOfBank.get("SBI_2");
console.log(`Bank Name is:--> ${traverseObject.bankName}, Account Number is:--> ${traverseObject.accountNo}, Interest Rate is:--> ${traverseObject.interestRate}`);

const iciciResult = mapOfBank.get("ICICI_3");
console.log(`Bank Name is:--> ${iciciResult.bankName}, Account Number is:--> ${iciciResult.accountNo}, Interest Rate is:--> ${iciciResult.interestRate}`);

const kotakResult = mapOfBank.get("Kotak_4");
console.log(`Bank Name is:--> ${kotakResult.bankName}, Account Number is:--> ${kotakResult.accountNo}, Interest Rate is:--> ${kotakResult.interestRate}`);

const hdfcResult = mapOfBank.get("HDFC_5");
console.log(`Bank Name is:--> ${hdfcResult.bankName}, Account Number is:--> ${hdfcResult.accountNo}, Interest Rate is:--> ${hdfcResult.interestRate}`);

const panjabResult = mapOfBank.get("Panjab_6");
console.log(`Bank Name is:--> ${panjabResult.bankName}, Account Number is:--> ${panjabResult.accountNo}, Interest Rate is:--> ${panjabResult.interestRate}`);



//for (const Axis_1 of keyOfBank) {
//    const element = mapOfBank.get("Axis_1");
//    console.log(`Bank Name is:--> ${element.bankName}, Account Number is:--> ${element.accountNo}, Interest Rate is:--> ${element.interestRate}`);
//}

// for (const map of mapOfBank) {
//     const element = mapOfBank.get("SBI_2");
//     console.log(`Bank Name is:--> ${element.bankName}, Account Number is:--> ${element.accountNo}, Interest Rate is:--> ${element.interestRate}`);
     
//  }

//  for (const map of mapOfBank) {
//     const element = mapOfBank.get("ICICI_3");
//     console.log(`Bank Name is:--> ${element.bankName}, Account Number is:--> ${element.accountNo}, Interest Rate is:--> ${element.interestRate}`);
     
//  }

//  for (const map of mapOfBank) {
//     const element = mapOfBank.get("Kotak_4");
//     console.log(`Bank Name is:--> ${element.bankName}, Account Number is:--> ${element.accountNo}, Interest Rate is:--> ${element.interestRate}`);
     
//  }

//  for (const map of mapOfBank) {
//     const element = mapOfBank.get("HDFC_5");
//     console.log(`Bank Name is:--> ${element.bankName}, Account Number is:--> ${element.accountNo}, Interest Rate is:--> ${element.interestRate}`);
     
//  }

//  for (const map of mapOfBank) {
//     const element = mapOfBank.get("Panjab_6");
//     console.log(`Bank Name is:--> ${element.bankName}, Account Number is:--> ${element.accountNo}, Interest Rate is:--> ${element.interestRate}`);
     
//  }