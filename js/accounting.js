'use strict';

//you calculated the no. of employee in app.js file in handle submit
// show the table in the page instead of "false word

let form = document.getElementById('form');
let div = document.getElementById('addedNames');
const thead = document.getElementById('thead');
const tfoot = document.getElementById('tfoot');
let tr = document.getElementById('tr1')
let emp = [];


checkLocalAndPush();
function handleSubmit(event) {

    event.preventDefault();
    let arr = render(readFromLocalS());

}


function toJSON() {
    let jsonArray = JSON.stringify(users);
    return jsonArray;
}


function saveToLocalS(jsonArray) {
    localStorage.setItem('admin', jsonArray)

}

//convert json file to a normal array
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

function render(arr) {
    div.innerHTML = '';
    thead.innerHTML = '';
    tfoot.innerHTML = '';
    tr.innerHTML = '';

    let tbody = document.createElement('tbody');

    let tbody4 = document.createElement('tr');
    thead.appendChild(tbody4);
    tbody4.textContent = "Department";

    let tbody5 = document.createElement('tr');
    thead.appendChild(tbody5);
    tbody5.textContent = "# of Employee";
    let tbody6 = document.createElement('tr');
    thead.appendChild(tbody6);
    tbody6.textContent = "Total Salary";
    let tbody7 = document.createElement('tr');
    thead.appendChild(tbody7);
    tbody7.textContent = "Average Salary"


    let tbody0 = document.createElement('tbody');
    div.appendChild(tbody);
    tbody.textContent = "Adminstration " + arr[arr.length - 1].Adm;

    let tbody1 = document.createElement('tbody');
    div.appendChild(tbody1);
    tbody1.textContent = `Marketing  ${arr[arr.length - 1].Markt}`;

    let tbody2 = document.createElement('tbody');
    div.appendChild(tbody2);
    tbody2.textContent = `Development${arr[arr.length - 1].Dev}`;

    let tbody3 = document.createElement('tbody');
    div.appendChild(tbody3);
    tbody3.textContent = ` Finance ${arr[arr.length - 1].Fina}`;


    for (let i = 0; i < arr.length - 1; i++) { //subtraction because the last item is total

        let tbody = document.createElement('tfoot');
        tfoot.appendChild(tbody);
        tbody.textContent = arr[i].totalSal[i];

    }

    let tfoot0 = document.createElement('tfoot');
    tfoot.appendChild(tfoot0);
    tfoot0.textContent = `Total ${arr.length}`;

    for (let i = 0; i < arr.length; i++) {
        let tfoot1 = document.createElement('tfoot');
        tfoot.appendChild(tfoot1);
        tfoot1.textContent = arr[i].totalSal[i];

    }


}


function checkLocalAndPush() {
    if (emp.length == 0) {
        let arr = readFromLocalS();
        if (arr.length != 0) {
            emp = arr;
        }
    }
}


//render(readFromLocalS());


form.addEventListener('submit', handleSubmit)


