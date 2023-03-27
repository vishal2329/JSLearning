//23-03-2023//

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

 
arrayOfEmployee = [empAnil, empRadha, empRishi, empSonali, empMonika, empViny, empMahi];

console.log(`----------------- Step 1. All the Employees from TCS? --------------------`);

var empCompany = arrayOfEmployee.filter((employee) => {
    return employee.empCompany == "TCS";

});
empCompany.forEach((employee) => {
    console.log(`Employee Name:-> ${employee.empName} , Company Name:-> ${employee.empCompany}`);
});


console.log(`-------------- Step 2. Averege salary of employee from company Wipro? -----------------`)

const empSalary = arrayOfEmployee.filter((employee) => {
    return employee.empCompany == "Wipro"

});
let totalSalary = 0;
empSalary.forEach((element) => {
    totalSalary = totalSalary + element.empSalary
    
});
const avg = totalSalary/empSalary.length
console.log(`Averege salary of employee from company "Wipro" Is:-> ${avg}`)


console.log(`-------------- Step 3. Find the average salary of employee from companies Wipro and Infy ----------------`)

const empSalarys = arrayOfEmployee.filter((employee) => {
    return (employee.empCompany == "Wipro" || employee.empCompany == "Infy")
});
let totalSalarys = 0;
empSalarys.forEach((element) => {
    totalSalarys = totalSalarys + element.empSalary
});
const avgs = totalSalarys/empSalarys.length
console.log(`Average salary of employee from companies "Wipro" and "Infosys" is:-> ${avgs}`)


