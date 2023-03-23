console.log("----------========== Assignment 0B. For Each Map ===========-----------")

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

const mapOfEmployee = new Map ();
mapOfEmployee.set(22, empAnil);
mapOfEmployee.set(33, empRadha);
mapOfEmployee.set(55, empRishi);
mapOfEmployee.set(66, empSonali);
mapOfEmployee.set(77, empMonika);
mapOfEmployee.set(88, empViny);
mapOfEmployee.set(99, empMahi);

console.log("---------- 1.Traverse By using for Each loop? -----------")

mapOfEmployee.forEach((element)=>{
    console.log(`Employee ID:====> ${element.empID}, Employee Name:- ${element.empName}, Employee department:- ${element.empDept}, Employee salary:- ${element.empSalary}, Employee compnay:- ${element.empCompany}`)

});


