



let EmployeeForm = document.getElementById('infoForm');
let employeeSec = document.getElementById('admin');
let market = document.getElementById('market');
let develop = document.getElementById('develop');
let fin = document.getElementById('fin');

var count = 0;

function Employee(fullName, department, level) {
    this.employeeID = 0;
    this.fullName = fullName;
    this.department = department;
    this.level = level;

    this.imageURL = "./assets/maleImg.png";
    // this.Salary = this.calculateSalary(level);
    this.Salary = 0;
    // this.count = 0;

}

// Employee.prototype.getImageByGender = function () {
//     let Gender = prompt("Enter your Gender please: ");
//     Gender = Gender.toLowerCase();
//     if (Geneder == "female" || Geneder == "f")
//         this.imageURL = "./assets/femleImg.png";
//     else if (Geneder == "male" || Geneder == "m")
//         this.imageURL = "./assets/maleImg.png";
//     else
//         alert("You didnt select your gender correctly ");

// }



Employee.prototype.employeeIDGenerator = function () {
    // let employee_id = Math.floor(Math.random() * (9999));
    count = count + 1;
    this.employeeID = fourDigitId(count);


}


function fourDigitId(empID) {
    empID = empID.toString();
    while (empID.length < 4) {
        empID = "0" + empID;
    }
    return empID
}



Employee.prototype.calculateSalary = function (Level) {
    let Salary = Math.floor((Math.random() * 500) + 1);    //random number between 1 and 500 
    console.log(Level);
    console.log("Salary:" + Salary)

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

    this.Salary = Salary;

}

Employee.prototype.render = function () {
    let div = document.createElement('div');
    if (this.department === "Administration") {

        employeeSec.appendChild(div);
    }
    else if (this.department === "Marketing") {
        market.appendChild(div);

    } else if (this.department === "Development") {
        develop.appendChild(div);

    } else
        fin.appendChild(div);

    let img = document.createElement('img');
    div.appendChild(img);
    img.setAttribute('src', this.imageURL);
    img.setAttribute('alt', this.fullName);


    let p0 = document.createElement('p');
    div.appendChild(p0);
    p0.textContent = this.fullName;

    let p = document.createElement('p');
    div.appendChild(p);
    p.textContent = this.employeeID;

    let p1 = document.createElement('p');
    div.appendChild(p1)
    p1.textContent = this.department;

    let p2 = document.createElement('p');
    div.appendChild(p2);
    p2.textContent = this.level;

    let p3 = document.createElement('p');
    div.appendChild(p3);
    p3.textContent = this.Salary;



}

function handelSubmit(event) {
    event.preventDefault();
    let fullName = event.target.name.value;
    let department = event.target.department.value;
    let Level = event.target.Level.value;

    let newEmployee = new Employee(fullName, department, Level);
    newEmployee.employeeIDGenerator();
    newEmployee.calculateSalary(Level);
    newEmployee.render();

}


addEventListener('submit', handelSubmit);

// let E1000 = new Employee('Ghazi Samer', 'Administration', 'Senior');
// let E1001 = new Employee('Lana Ali', 'Finance', 'Senior');
// let E1002 = new Employee('Tamara Ayoub', 'Marketing', 'Senior');
// let E1003 = new Employee('Safi Walid', 'Administration', 'Mid-Senior');
// let E1004 = new Employee('Omar Zaid', 'Development', 'Senior');
// let E1005 = new Employee('Rana Saleh', 'Development', 'Junior');
// let E1006 = new Employee('Hadi Ahmad', 'Finance', 'Mid-Senior');

// // console.log(E1000.level);
// E1000.calculateSalary(E1000.level);
// E1000.render();

// // console.log(E1001.level);
// E1001.calculateSalary(E1001.level);
// E1001.render();

// // console.log(E1002.level);
// E1002.calculateSalary(E1002.level);
// E1002.render();

// // console.log(E1003.level);
// E1003.calculateSalary(E1003.level);
// E1003.render();


// // console.log(E1004.level);
// E1004.calculateSalary(E1004.level);
// E1004.render();


// // console.log(E1005.level);
// E1005.calculateSalary(E1005.level);
// E1005.render();

// // console.log(E1006.level);
// E1006.calculateSalary(E1006.level);
// E1006.render();