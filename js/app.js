
function Employee(employeeID, fullName, department, level) {
    this.employeeID = employeeID;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.imageURL = "./assets/employee_image";
    this.Salary = this.calculateSalary(level);




}


Employee.prototype.calculateSalary = function (Level) {
    let Salary = Math.floor((Math.random() * 500) + 1);    //random number between 1 and 500 


    if (Level === "Senior") {
        Salary = Salary + 1500; // adding 1500 which the range will be 1500 - 2000

    }
    else if (Level === "Mid-Senior")
        Salary = Salary + 1000; // adding 1000 which the range will be 1000 - 1500
    else if (Level === "Junior")
        Salary = Salary + 500; // adding 500 which the range will be 500 - 1000
    else
        document.write('Enter your level correctly');

    Salary = Salary - (Salary * 0.075);

    return Salary;

}

Employee.prototype.render = function () {
    document.write(`<b>Employee_Name:</b> ${this.fullName} <b>Salary:</b> ${this.Salary} <br><br>`);
}



let E1000 = new Employee('1000', 'Ghazi Samer', 'Administration', 'Senior');
let E1001 = new Employee('1001', 'Lana Ali', 'Finance', 'Senior');
let E1002 = new Employee('1002', 'Tamara Ayoub', 'Marketing', 'Senior');
let E1003 = new Employee('1003', 'Safi Walid', 'Administration', 'Mid-Senior');
let E1004 = new Employee('1004', 'Omar Zaid', 'Development', 'Senior');
let E1005 = new Employee('1005', 'Rana Saleh', 'Development', 'Junior');
let E1006 = new Employee('1006', 'Hadi Ahmad', 'Finance', 'Mid-Senior');

// console.log(E1000.level);
E1000.calculateSalary(E1000.level);
E1000.render();

// console.log(E1001.level);
E1001.calculateSalary(E1001.level);
E1001.render();

// console.log(E1002.level);
E1002.calculateSalary(E1002.level);
E1002.render();

// console.log(E1003.level);
E1003.calculateSalary(E1003.level);
E1003.render();


// console.log(E1004.level);
E1004.calculateSalary(E1004.level);
E1004.render();


// console.log(E1005.level);
E1005.calculateSalary(E1005.level);
E1005.render();

// console.log(E1006.level);
E1006.calculateSalary(E1006.level);
E1006.render();