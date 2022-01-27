'use strict';

//you calculated the no. of employee in app.js file in handle submit
// show the table in the page instead of "false word"



let form = document.getElementById('form');
let div = document.getElementById('addedNames');

let emp = [];


checkLocalAndPush();

function handleSubmit(event) {

    event.preventDefault();
    render(readFromLocalS());

}

function toJSON() {
    let jsonArray = JSON.stringify(users);
    return jsonArray;
}

function saveToLocalS(jsonArray) {
    localStorage.setItem('allEmps', jsonArray)

}

function readFromLocalS() {
    let jsonArr = localStorage.getItem('allEmps');
    let arr = JSON.parse(jsonArr);
    if (arr !== null) {
        return arr;
    } else {
        return [];
    }
}

function render(arr) {
    div.innerHTML = '';

    let p0 = document.createElement('p');
    div.appendChild(p0);


    let p = document.getElementById('addedNames');
    let arr1 = readFromLocalS();
    p.textContent = arr1.includes("admCount");

    let sum = summationOfEachDepartment(readFromLocalS());
    let avg = avgSalary(readFromLocalS, sum);
    let totSalary = sum[0];

}


function avgSalary(empFormLocalStrg, sum) {
    let arr = [sum[0]];

    for (let i = 1; i < sum.length; i++) {
        arr.push(sum[0] / sum[i]);

    }
    return arr;
}


function summationOfEachDepartment(empFormLocalStrg) {
    let totalSalary = 0;

    for (let x = 0; x < empFormLocalStrg.length; x++) {

        if (department === "Administration") {
            adm = adm + empFormLocalStrg[x].Salary;

        }
        else if (department === "Marketing") {
            markt = markt + empFormLocalStrg[x].Salary;

        } else if (department === "Development") {
            dev = dev + empFormLocalStrg[x].Salary;

        } else {
            fina = fina + empFormLocalStrg[x].Salary;
        }
    }

    totalSalary = fina + dev + markt + adm;

    return [totalSalary, adm, markt, dev, fina];
}

function checkLocalAndPush() {
    if (emp.length == 0) {
        let arr = readFromLocalS();
        if (arr.length != 0) {
            emp = arr;
        }
    }
}

render(readFromLocalS());




form.addEventListener('submit', handleSubmit)


