//25-03-2023//
console.log("-----=========== Assignment B. Sorting in Ascending and Descending order ===========-------")

class Employee {
    constructor(empID, empName, empDept, empSalary, empCompany) {
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

 
arrayEmployee = [empAnil, empRadha, empRishi, empSonali, empMonika, empViny, empMahi];

console.log("================= Sort the arrayEmployee in ascending order of Employee ID? ===================")

arrayEmployee.sort((emp1, emp2) => {
    return emp1.empID > emp2.empID ? 1 : -1;

});

arrayEmployee.forEach((employee) => {
    console.log(`Employee ID:--> ${employee.empID}, Employee Name:--> ${employee.empName}, Employee department:--> ${employee.empDept}`);
});


console.log("================= Step 2. Employee Department in Ascending order? ===================")

arrayEmployee.sort((emp1, emp2) => {
    return emp1.empDept > emp2.empDept ? 1 : -1;
});

arrayEmployee.forEach((employee) => {
    console.log(`Employee ID:--> ${employee.empID}, Employee department:--> ${employee.empDept}, Employee Company:--> ${employee.empCompany}`)

});


console.log("================= Step 3. Employee salary in Descending order =========================")

arrayEmployee.sort((emp1, emp2) => {
    return emp1.empSalary > emp2.empSalary ? -1 : 1;

});

arrayEmployee.forEach((element) => {
    console.log(`Employee Name:--> ${element.empName}, Employee Salary:--> ${element.empSalary}, Employee Compnay:--> ${element.empCompany}`)
});