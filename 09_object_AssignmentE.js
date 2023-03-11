console.log("==============# Assignment 0E #=============")
// Create an object sbiBank, axisBank, hdfcBank, yesBank, with data members?

let sbiBank = {
    bankName : "SBI Bank",
    location : "Kharadi",
    accountNo :"560002033458",
    ifscCode : "SBIN0000455 ",
    interestRest : "7.10",

    showDetails:function(){
        console.log(`Name: ${this.bankName}, Location: ${this.location}, AccountNo: ${this.accountNo}, IFSCCode: ${this.ifscCode}, InterestRate: ${this.interestRest}`);
    }
}
sbiBank.showDetails()

let axisBank = {
    bankName : "AXIS Bank",
    location : "Karve Nagar",
    accountNo: "1860500555570",
    ifscCode : "UTIB0000037",
    interestRest : "3.50",

    showDetails:function(){
        console.log(`Name: ${this.bankName}, Location: ${this.location}, AccountNo: ${this.accountNo}, IFSCCode: ${this.ifscCode}, InterestRate: ${this.interestRest}`);
    }
}
axisBank.showDetails()

let hdfcBank = {
    bankName : "HDFC Bank",
    location : "Kothrud",
    accountNo: "101105030565",
    ifscCode : "HDFC0004024",
    interestRest : "4.50",

    showDetails:function(){
        console.log(`Name: ${this.bankName}, Location: ${this.location}, AccountNo: ${this.accountNo}, IFSCCode: ${this.ifscCode}, InterestRate: ${this.interestRest}`);
    }
}
hdfcBank.showDetails()

let yesBank = {
    bankName : "YES Bank",
    location : "Hinjewadi",
    accountNo: "786245397124",
    ifscCode : "YESB0000951",
    interestRest : "6.25",

    showDetails:function(){
        console.log(`Name: ${this.bankName}, Location: ${this.location}, AccountNo: ${this.accountNo}, IFSCCode: ${this.ifscCode}, InterestRate: ${this.interestRest}`);
    }
}
yesBank.showDetails()

