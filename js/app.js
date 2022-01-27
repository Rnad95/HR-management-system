let EmployeeForm = document.getElementById('infoForm');
let employeeSec = document.getElementById('admin');
let market = document.getElementById('market');
let develop = document.getElementById('develop');
let fin = document.getElementById('fin');

let allEmployees = [];
checkLocalAndPush();

var count = 0;
let adm = 0;
let markt = 0;
let dev = 0;
let fina = 0;

function Employee(fullName, department, level) {
    this.employeeID = 0;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.imageURL = "./assets/maleImg.png";
    // this.Salary = this.calculateSalary(level);
    this.Salary = 0;


}



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

function render(empFormLocalStrg) {  // the render passed arr arguement
    employeeSec.innerHTML = '';
    market.innerHTML = '';
    develop.innerHTML = '';
    fin.innerHTML = '';


    for (let i = 0; i < empFormLocalStrg.length; i++) {
        let div = document.createElement('div');
        employeeSec.appendChild(div);

        let img = document.createElement('img');
        div.appendChild(img);
        img.setAttribute('src', empFormLocalStrg[i].imageURL);
        img.setAttribute('alt', empFormLocalStrg[i].fullName);


        let p0 = document.createElement('p');
        div.appendChild(p0);
        p0.textContent = empFormLocalStrg[i].fullName;

        let p = document.createElement('p');
        div.appendChild(p);
        p.textContent = empFormLocalStrg[i].employeeID;

        let p1 = document.createElement('p');
        div.appendChild(p1)
        p1.textContent = empFormLocalStrg[i].department;

        let p2 = document.createElement('p');
        div.appendChild(p2);
        p2.textContent = empFormLocalStrg[i].level;

        let p3 = document.createElement('p');
        div.appendChild(p3);
        p3.textContent = empFormLocalStrg[i].Salary;






    }
}

function readFromLocalStrg() {
    let jsonStr = localStorage.getItem('admin');
    let arr = JSON.parse(jsonStr);
    if (arr !== null)
        return arr;
    else
        return [];

    // render

}


function checkLocalAndPush() {
    if (allEmployees.length == 0) {
        let arr = readFromLocalStrg();
        if (arr.length != 0) {
            allEmployees = arr;
        }
    }

}

function handelSubmit(event) {
    event.preventDefault();
    let name = event.target.name.value;
    let department = event.target.department.value;
    let Level = event.target.Level.value;



    let newEmployee = new Employee(name, department, Level);
    newEmployee.employeeIDGenerator();
    newEmployee.calculateSalary(Level);

    if (department === "Administration") {
        adm++;

    }
    else if (department === "Marketing") {
        markt++;

    } else if (department === "Development") {
        dev++;

    } else {
        fina++;
    }

    let countObj = { admCount: adm, devCount: dev, marktCount: markt, finCount: fina };
    allEmployees.push(newEmployee);
    allEmployees.push(countObj);

    let jsonStr = toJSON();
    saveToLocalStrg(jsonStr);

    render(readFromLocalStrg());

}


function toJSON() {
    let jsonString = JSON.stringify(allEmployees);
    return jsonString;
}

function saveToLocalStrg(jsonStr) {
    localStorage.setItem('admin', jsonStr);


}


render(readFromLocalStrg());



addEventListener('submit', handelSubmit);
