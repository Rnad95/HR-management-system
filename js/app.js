let EmployeeForm = document.getElementById('infoForm');
let employeeSec = document.getElementById('admin');
let market = document.getElementById('market');
let develop = document.getElementById('develop');
let fin = document.getElementById('fin');

let allEmployees = [];
checkLocalAndPush();

var count = 0;
let depCount = [0, 0, 0, 0];
let totalSal = [0, 0, 0, 0]

function Employee(fullName, department, level, imageURL) {
    this.employeeID = 0;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.imageURL = imageURL;
    this.Salary = 0;
    this.depCount = [];
    this.Count = 0;
    this.totalSal = [];
    this.avg = [];

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
        if (empFormLocalStrg[i].department === "Administration") {

            employeeSec.appendChild(div);
        }
        else if (empFormLocalStrg[i].department === "Marketing") {
            market.appendChild(div);

        } else if (empFormLocalStrg[i].department === "Development") {
            develop.appendChild(div);

        } else
            fin.appendChild(div);

        let img = document.createElement('img');
        div.appendChild(img);
        img.setAttribute('src', empFormLocalStrg[i].imageURL);
        img.setAttribute('width', "200px")
        img.setAttribute('height', "200px")
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

// ********************* Read the json file and converted to array ****************************/

function readFromLocalStrg() {
    let jsonStr = localStorage.getItem('admin');
    let arr = JSON.parse(jsonStr);
    if (arr !== null)
        return arr;
    else
        return [];

    // render

}

// ********************* Check the array is empty or Not ***************************************/

function checkLocalAndPush() {
    if (allEmployees.length == 0) {
        let arr = readFromLocalStrg();
        if (arr.length != 0) {
            allEmployees = arr;
        }
    }

}

// ********************* Create Object from  ***************************************************/

function handelSubmit(event) {
    event.preventDefault();
    let name = event.target.name.value;
    let department = event.target.department.value;
    let Level = event.target.Level.value;
    let imgURL = event.target.imgUrl.value || "../assets/maleImg.png";
    // let totalSal = [0, 0, 0, 0, 0]; // 0->adm  1->markt  2-> dev  3->fina 4->total


    let newEmployee = new Employee(name, department, Level, imgURL);
    newEmployee.employeeIDGenerator();
    newEmployee.calculateSalary(Level);

    if (department === "Administration") {
        depCount[0]++;
        totalSal[0] = totalSal[0] + newEmployee.Salary;

    }
    else if (department === "Marketing") {
        depCount[1]++;
        totalSal[1] = totalSal[1] + newEmployee.Salary;

    } else if (department === "Development") {
        depCount[2]++;
        totalSal[2] = totalSal[2] + newEmployee.Salary;

    } else {
        depCount[3]++;
        totalSal[3] = totalSal[3] + newEmployee.Salary;
    }

    newEmployee.totalSal[4] = totalSal[0] + totalSal[1] + totalSal[2] + totalSal[3];

    for (let i = 0; i < depCount.length; i++) {
        newEmployee.depCount[i] = depCount[i];
        newEmployee.totalSal[i] = totalSal[i] / newEmployee.depCount[i];
        newEmployee.avg[i] = newEmployee.totalSal[4] / newEmployee.depCount[i];
    }

    newEmployee.Count = count;
    newEmployee.imageURL = imgURL;
    allEmployees.push(newEmployee);

    let jsonStr = toJSON();
    saveToLocalStrg(jsonStr);

    render(readFromLocalStrg());

}


function toJSON() {
    let jsonString = JSON.stringify(allEmployees);
    return jsonString;
}

// ********************* saved the json file to local Storage ****************************

function saveToLocalStrg(jsonStr) {
    localStorage.setItem('admin', jsonStr);

}


render(readFromLocalStrg());



addEventListener('submit', handelSubmit);
