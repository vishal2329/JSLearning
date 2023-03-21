console.log("----------- Assignment 0A:- Use only For Each loop ------------")

class Employee {
    constructor(empID, empName, empDept, empSalary, empCompany){
        this.empID = empID;
        this.empName = empName;
        this.empDept = empDept;
        this.empSalary = empSalary;
        this.empCompany = empCompany;
    }
}const empAnil = new Employee(22, "Anil", "IT", 50000, "TCS");
const empRadha = new Employee(33, "Radha", "HR", 74000, "Wipro");
const empRishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const empSonali = new Employee(66, "Sonali","Finance", 45000, "Infy");
const empMonika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const empViny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const empMahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");


const arrayEmployees = [empAnil, empRadha, empRishi, empSonali, empMonika, empViny, empMahi]
// console.log(arrayEmployees);

console.log("============= Step 1. =============")

arrayEmployees.forEach(employees => {
    let empCompany = employees.empCompany
    if (employees.empCompany == "TCS") {
        console.log(`Employee Name:-> ${employees.empName}, Employee Company:-> ${employees.empCompany}`)
    }
});

console.log("============== Step 2. ==============")

arrayEmployees.forEach(employees => {
    let empSalary = employees.empSalary
    if (employees.empSalary >= 50000) {
        console.log(`Employee ID:-> ${employees.empID}, Employee Name:-> ${employees.empName}, Employee deparment:-> ${employees.empDept}, Employee salary:-> ${employees.empSalary}, Employee company:-> ${employees.empCompany}`)
    }
});

console.log("=============== Step 3. ===============")
//Que.3. Find the sum of all employees salary and log on console?

let sum = 0;
arrayEmployees.forEach(employees => {
    let empSalary = employees.empSalary
    sum = sum + employees.empSalary
    
});
console.log(`Sum of all Employee salary is:-> ${sum}`);

console.log("=============== Step 4. ===============")
//Que.4. Find the averege salary and log on console (Averege=Total Salary/Number of employees)

salarysum = 0;
arrayEmployees.forEach(employees => {
    let empSalary = employees.empSalary
    salarysum = salarysum + employees.empSalary
});
console.log(`Averege Salary of Employee is:-> ${salarysum/arrayEmployees.length}`)


console.log("=============== Step 5. ===============")

arrayEmployees.forEach(employees => {
    if (employees.empDept == "It" || "HR" && employees.empSalary >= 75000) {
        console.log(`Employee ID:-> ${employees.empID}, Employee Name:-> ${employees.empName}, Employee deparment:-> ${employees.empDept}, Employee salary:-> ${employees.empSalary}, Employee company:-> ${employees.empCompany}`)

    }
});




