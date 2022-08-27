'use strict';

const employeesList = [...document.querySelectorAll('li')];
const employeesListObject = employeesList.map((employee) => ({
  name: employee.innerHTML.trim(),
  position: employee.dataset.position,
  salary: Number(employee.dataset.salary.replace(/[$,]/g, '')),
  age: Number(employee.dataset.age),
})).sort((a, b) => a.salary - b.salary).reverse();

for (let i = 0; i < employeesListObject.length; i++) {
  employeesList[i].innerHTML = employeesListObject[i].name;
  employeesList[i].dataset.position = employeesListObject[i].position;
  employeesList[i].dataset.salary = employeesListObject[i].salary;
  employeesList[i].dataset.age = employeesListObject[i].age;
}
