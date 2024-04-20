// Problem 1: Create JSON for each employee
const employees = [
    { firstName: "Sam", department: "Tech", designation: "Manager", salary: 40000, raiseEligible: true },
    { firstName: "Mary", department: "Finance", designation: "Trainee", salary: 18500, raiseEligible: true },
    { firstName: "Bill", department: "HR", designation: "Executive", salary: 21200, raiseEligible: false }
];
console.log("Problem 1: ", employees);

// Problem 2: Create JSON for the company
const company = {
    companyName: "Tech Stars",
    website: "www.techstars.site",
    employees: employees
};
console.log("Problem 2: ", company);

// Problem 3: Adding a new employee
const newEmployee = { firstName: "Anna", department: "Tech", designation: "Executive", salary: 25600, raiseEligible: false };
company.employees.push(newEmployee);
console.log("Problem 3: Updated Employees", company.employees);

// Problem 4: Calculate the total salary for all company employees
let totalSalary = company.employees.reduce((sum, employee) => sum + employee.salary, 0);
console.log("Problem 4: Total Salary", totalSalary);

// Problem 5: Process raises for eligible employees
company.employees.forEach(employee => {
    if (employee.raiseEligible) {
        employee.salary *= 1.10; // increase salary by 10%
        employee.raiseEligible = false; // set raise eligibility to false
    }
});
console.log("Problem 5: Updated Salaries After Raise", company.employees);

// Problem 6: Update JSON for employees working from home
const wfhEmployees = ["Anna", "Sam"];
company.employees.forEach(employee => {
    employee.wfh = wfhEmployees.includes(employee.firstName);
});
console.log("Problem 6: Work From Home Status", company.employees);
