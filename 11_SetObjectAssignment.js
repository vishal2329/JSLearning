console.log("======================== Assignment 0B:-> 11_Set Object Assignment =============================")
console.log("----------------- Class Bank with all Data Members ------------------")

class Bank {

    constructor(bank_name, location, account_no, ifsc_code, interest_rate){
        this.bank_name = bank_name;
        this.location = location;
        this.account_no = account_no;
        this.ifsc_code = ifsc_code;
        this.interest_rate = interest_rate;
    }
}
const axis_bank = new Bank("Axis Bank", "Chakan", "125475892043", "UTIB0000037", 4.75);
console.log(axis_bank);
const sbi_bank = new Bank("SBI Bank", "Wakad", "221335445245", "SBIN0000455", 6.20);
console.log(sbi_bank);
const icici_bank = new Bank("ICICI Bnak", "Narhe", "147527005175", "ICIC0001733", 6.90);
console.log(icici_bank);
const kotak_bank = new Bank("Kotak Bank", "Warge", "177745230079", "KKBK0001769", 7.20);
console.log(kotak_bank);
const hdfc_bank = new Bank("HDFC Bank", "Karve Nagar", "123697456321", "HDFC0004024", 5.60);
console.log(hdfc_bank);
const panjab_bank = new Bank("Panjab Bank", "Kothrud", "1456971230505", "PUNB0284500", 7.25);
console.log(panjab_bank);

console.log("---------------------- Add all object elements in a set -------------------------")

const setOfBanks = new Set();
setOfBanks.add(axis_bank);
setOfBanks.add(sbi_bank);
setOfBanks.add(icici_bank);
setOfBanks.add(kotak_bank);
setOfBanks.add(hdfc_bank);
setOfBanks.add(panjab_bank);
console.log(setOfBanks);

console.log("----------------------- Traverse By using For of loop -----------------------------")
// for (const Bank of setOfBanks) {
//     const newBank = setOfBanks;
//     console.log(`Bank Name is:--> ${newBank.bank_name}`, `Bank Location is:--> ${newBank.location}`);
// }

for (const Bank of setOfBanks) {
    console.log("Bank Name is:", Bank.bank_name, "location is:-->", Bank.location)
    console.log(`Bank Name is:--> ${Bank.bank_name}`, `location is:--> ${Bank.location}`);
}