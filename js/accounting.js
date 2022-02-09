'use strict';

//you calculated the no. of employee in app.js file in handle submit
// show the table in the page instead of "false word

let td = document.getElementById('num');
let dep = document.getElementById('dep');
let tot = document.getElementById('total');
let avg = document.getElementById('avg');
let totEmp = document.getElementById('totNum');
let totSal = document.getElementById('totSal');
let totAvg = document.getElementById('totAvg');

let emp = [];


checkLocalAndPush();

function handleSubmit(event) {

    event.preventDefault();
    let arr = render(readFromLocalS());

}

// ****************************** Convert the array to json file *******************************************/
function toJSON() {
    let jsonArray = JSON.stringify(users);
    return jsonArray;
}

// ****************************** Save the data in local storage *******************************************/
function saveToLocalS(jsonArray) {
    localStorage.setItem('admin', jsonArray)

}

// ********************************** Convert the json file to array ***************************************/
function readFromLocalS() {
    let jsonArr = localStorage.getItem('admin');
    let arr = JSON.parse(jsonArr);
    if (arr !== null) {
        return arr;
    } else {
        return [];
    }

    render(arr);
    // , totalSalaryOfEachDepartment(arr), avgSalary(arr)
}

// *********************************** Show the Data in a Table  *******************************************/
function render(arr) {
    td.innerHTML = '';
    dep.innerHTML = '';
    tot.innerHTML = '';
    avg.innerHTML = '';
    totEmp.innerHTML = '';
    totSal.innerHTML = '';
    totAvg.innerHTML = '';

    var toTotSal = 0;
    var toAvgSal = 0;
    let depart = ["Administration", "Marketing", "Development", "Finance"]
    for (let i = 0; i < depart.length; i++) {
        let dep1 = document.createElement('div');
        let num = document.createElement('div');
        let tot1 = document.createElement('div');
        let avg1 = document.createElement('div');


        dep.appendChild(dep1);
        td.appendChild(num);
        tot.appendChild(tot1);
        avg.appendChild(avg1);


        dep1.textContent = depart[i];
        num.textContent = arr[arr.length - 1].depCount[i]
        tot1.textContent = arr[arr.length - 1].totalSal[i];
        avg1.textContent = Math.floor(arr[arr.length - 1].avg[i]);
        toTotSal += Math.floor(arr[arr.length - 1].totalSal[i]);
        toAvgSal += Math.floor(arr[arr.length - 1].avg[i]);

    };
    let totEmp1 = document.createElement('div');
    let totSal1 = document.createElement('div');
    let totAvg1 = document.createElement('div');
    totEmp.appendChild(totEmp1);
    totSal.appendChild(totSal1);
    totAvg.appendChild(totAvg1);
    totEmp1.textContent = arr.length;
    totSal1.textContent = toTotSal;
    totAvg.textContent = toAvgSal;

}


// ****************************** Check if the Local storage is empty **************************************/
function checkLocalAndPush() {
    if (emp.length == 0) {
        let arr = readFromLocalS();
        if (arr.length != 0) {
            emp = arr;
        }
    }
}


// render(readFromLocalS());


form.addEventListener('submit', handleSubmit)


