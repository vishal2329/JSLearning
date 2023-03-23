console.log("============----------- Assignment 0B. Map Method ------------============")
//22-03-2023//

class Employee {
    constructor(empID, empName, empDept, empSalary, empCompany){
        this.empID = empID;
        this.empName = empName;
        this.empDept = empDept;
        this.empSalary = empSalary;
        this.empCompany = empCompany;
    }
}
const empAnil = new Employee(22, "Anil", "IT", 50000, "TCS");
const empRadha = new Employee(33, "Radha", "HR", 74000, "Wipro");
const empRishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const empSonali = new Employee(66, "Sonali","Finance", 45000, "Infy");
const empMonika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const empViny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const empMahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");


arrayOfEmployees = [empAnil, empRadha, empRishi, empSonali, empMonika, empViny, empMahi];

console.log("========= Step 1.  Get the list of all Employee names? ==========")
 const nameOfEmployee = arrayOfEmployees.map((element) => {
    return element.empName;
});
console.log(nameOfEmployee);

console.log("========== Step 2. Get the list of Deparments? ==========")

const listOfEmplyDept = arrayOfEmployees.map((employees) => {
    return employees.empDept;
});
console.log(listOfEmplyDept);

console.log("======== Step 3. Get the list of Employee ID? ==========")

const listOfEmplyID = arrayOfEmployees.map((element) => {
    return element.empID;
});
console.log(listOfEmplyID);

console.log("======== Step 4. Get the list Employee names working in TCS? ==========")

const listOfEmplyCompy = arrayOfEmployees.map((element) => {
   if (element.empCompany == "TCS") {
    console.log(element);
   }
});






