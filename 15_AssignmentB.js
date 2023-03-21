console.log("--------============= Step 1. ==============----------")

class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
}    
const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
console.log(emp_anil);
const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
console.log(emp_radha);
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
console.log(emp_rishi);
const emp_sonali = new Employee(66, "Sonali","Finance", 45000, "Infy");
console.log(emp_sonali);
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
console.log(emp_monika);
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
console.log(emp_viny);
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");
console.log(emp_mahi);

console.log("==========--------------> Add all created Employe object inside the One Array? <---------------============")
//Que:-> Add all the created employee object inside array namely as 'array_employees'?

const array_employees = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi]
console.log(array_employees);

console.log("-------------------======== Step 1. Find all the employee working in TCS =========-------------------------")
//Que.1. Find all the employees working in 'TCS' and log only employee names and company name on console?
for (const Employee of array_employees) {

    if (Employee.emp_company == "TCS" ){
        console.log(`Employee name:-> ${Employee.emp_name}, Employee company:-> ${Employee.emp_company}`)
    }
}

console.log("-----------------======= Step 2. Find the Finance department employees ===============-----------------------")
//Que.2. Find the 'Finance' department employees, log only department and employee name on console?

for (const Employee of array_employees) {

    if (Employee.emp_dept == "Finance") {
        console.log(`Employee department:-> ${Employee.emp_dept}, Employee Name:-> ${Employee.emp_name}`) 
    }
}

console.log("---------------========== Step 3. Find the employee whose Name starts with 'R' ===========---------------------")
//Que.3. Find the employees whose name start with 'R' & complete employee details on console?

for (const Employee of array_employees) {

    if (Employee.emp_name.startsWith('R')) {
        console.log(`Employee ID:-> ${Employee.emp_id}, Employee Name:-> ${Employee.emp_name}, Employee department:-> ${Employee.emp_dept}, Employee salary:-> ${Employee.emp_salary}, Employee compnay:-> ${Employee.emp_company}`)
    } 
}


console.log("-----------------======== 4. Find the Empllyee whose salary is greater than 75000 ========--------------------")
//Que.4. Find the employees whose salary is greater than 75000, and emp_name, emp_company, and emp_salary on console?

for (const Employee of array_employees) {

    if (Employee.emp_salary > 75000) {
        console.log(` Employee Name:-> ${Employee.emp_name}, Employee company:-> ${Employee.emp_company}, Employee salary ${Employee.emp_salary}`)
    }
}

console.log("---------------------================= Step 5.Find the Employees whose salary greater than or equal 50000 and from 'IT' deparment =================------------------------")
//Que.5. Find the Employees whose salary greater than or equal 50000 and from 'IT' deparment, log complete employee details on console?

for (const Employee of array_employees) {
    if (Employee.emp_salary >= 50000 && Employee.emp_dept) {
        console.log(`Employee id:-> ${Employee.emp_id}, Employee Name:-> ${Employee.emp_name}, Employee department:-> ${Employee.emp_dept}, Employee salary:-> ${Employee.emp_salary}, Employee company:-> ${Employee.emp_company}`)
    }
}

console.log("------------------============= Step 6. Find out all the employees from company 'Infy'? ==============-------------------------")
//Que.6. Find out all the employees from company 'Infy' and log complete employee details on console?

for (const Employee of array_employees) {
    if (Employee.emp_company == "Infy") {
        console.log(`Employee ID:-> ${Employee.emp_id}, Employee Name:-> ${Employee.emp_name}, Employee department:-> ${Employee.emp_dept}, Employee salary:-> ${Employee.emp_salary}, Employee compnay:-> ${Employee.emp_company}`)
    }
}